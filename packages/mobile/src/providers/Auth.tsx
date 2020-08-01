import React, { useState, useCallback, ReactNode, createContext, useContext, useEffect } from 'react';
import { makeRedirectUri, useAuthRequest } from 'expo-auth-session';
import { setItemAsync, getItemAsync } from 'expo-secure-store';
import { Alert, Platform } from 'react-native';
import jwtDecoder from 'jwt-decode';
import { secureStoreKey } from 'constants/secureStore';

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
  scope: string;
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

const decodeAuthToken = (token: string) => {
  const decoded: any = jwtDecoder(token);

  return { userId: decoded['https://hasura.io/jwt/claims']['x-hasura-user-id'], exp: decoded.exp };
};

export const AuthProvider = ({ clientId, audience, scope, domain, children }: Props) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [currentUserId, setCurrentUserId] = useState('');
  const [loading, setLoading] = useState(false);
  const [, , promptAsync] = useAuthRequest(
    {
      redirectUri,
      clientId,
      responseType: 'token',
      scopes: [],
      extraParams: {
        audience,
        scope,
        nonce: 'nonce',
      },
    },
    { authorizationEndpoint: `https://${domain}/authorize` },
  );

  const handleLogin = useCallback(async () => {
    setLoading(true);
    const result = await promptAsync({ useProxy });
    switch (result.type) {
      case 'success': {
        const { access_token } = result.params;
        setAuthenticated(true);
        const { userId } = decodeAuthToken(access_token);
        setCurrentUserId(userId);
        setItemAsync(secureStoreKey.accessToken, access_token);
        break;
      }
      case 'error': {
        Alert.alert('Authentication error', result.params.error_description || 'something went wrong');
        break;
      }
      case 'locked':
      case 'cancel':
      case 'dismiss':
    }
    setLoading(false);
  }, [promptAsync]);

  const initialize = useCallback(async () => {
    setLoading(true);
    const storedAccessToken = await getItemAsync(secureStoreKey.accessToken);
    if (storedAccessToken) {
      const { userId, exp } = decodeAuthToken(storedAccessToken);
      if (exp > Math.floor(new Date().getTime() / 1000)) {
        setAuthenticated(true);
        setCurrentUserId(userId);
      }
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    initialize();
  }, [initialize]);

  return (
    <AuthContext.Provider value={{ authenticated, currentUserId, loading, handleLogin, handleLogout: () => {} }}>
      {children}
    </AuthContext.Provider>
  );
};
