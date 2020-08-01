import React, { useEffect, useState, useCallback, ReactNode, createContext, useContext } from 'react';
import { makeRedirectUri, useAuthRequest } from 'expo-auth-session';
import { Alert, Platform } from 'react-native';
import jwtDecoder from 'jwt-decode';

type AuthContext = {
  authenticated: boolean;
  currentUserId: string;
  loading: boolean;
  handleLogin: () => void;
  handleLogout: () => void;
};

type Props = {
  clientId: string;
  audience: string;
  scopes: string[];
  domain: string;
  children: ReactNode;
};

const AuthContext = createContext<AuthContext | null>(null);

export function useAuth() {
  const value = useContext(AuthContext);
  if (!value) {
    throw new Error('You must provide a value to the context');
  }

  return value;
}

const useProxy = Platform.select({ web: false, default: true });
const redirectUri = makeRedirectUri({ useProxy });

export const AuthProvider = ({ clientId, audience, scopes, domain, children }: Props) => {
  const [token, setToken] = useState('');
  const [currentUserId, setCurrentUserId] = useState('');
  const [loading, setLoading] = useState(false);
  const [, result, promptAsync] = useAuthRequest(
    {
      redirectUri,
      clientId,
      responseType: 'token',
      scopes,
      extraParams: {
        audience,
        nonce: 'nonce',
      },
    },
    { authorizationEndpoint: `https://${domain}/authorize` },
  );
  const handleLogin = useCallback(() => {
    setLoading(true);
    promptAsync({ useProxy });
  }, [promptAsync]);

  useEffect(() => {
    let cleanedUp = false;
    if (!result) return;
    if (result.type === 'error') {
      Alert.alert('Authentication error', result.params.error_description || 'something went wrong');
    }
    if (result.type === 'success') {
      setToken(result.params.access_token);
      const decoded: any = jwtDecoder(result.params.access_token);
      setCurrentUserId(decoded['https://hasura.io/jwt/claims']['x-hasura-user-id']);
    }
    !cleanedUp && setLoading(false);

    return () => {
      cleanedUp = true;
    };
  }, [result]);

  return (
    <AuthContext.Provider
      value={{ authenticated: !!token, currentUserId, loading, handleLogin, handleLogout: () => {} }}
    >
      {children}
    </AuthContext.Provider>
  );
};
