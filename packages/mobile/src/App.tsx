import React, { useEffect, useState } from 'react';
import { makeRedirectUri, useAuthRequest } from 'expo-auth-session';
import { Alert, StyleSheet, View, Text, Button, Platform } from 'react-native';
import { environment } from 'constants/environment';

const useProxy = Platform.select({ web: false, default: true });
const redirectUri = makeRedirectUri({ useProxy });

export const App = () => {
  const [token, setToken] = useState('');
  const [request, result, promptAsync] = useAuthRequest(
    {
      redirectUri,
      clientId: environment.authClientId,
      responseType: 'token',
      scopes: ['openid', 'profile', 'email'],
      extraParams: {
        audience: environment.authAudience,
        nonce: 'nonce',
      },
    },
    { authorizationEndpoint: `https://${environment.authDomain}/authorize` },
  );

  useEffect(() => {
    if (!result) return;
    if (result.type === 'error') {
      Alert.alert('Authentication error', result.params.error_description || 'something went wrong');

      return;
    }
    if (result.type === 'success') {
      setToken(result.params.access_token);
    }
  }, [result]);

  return (
    <View style={styles.container}>
      {token ? (
        <Text>You are logged in</Text>
      ) : (
        <Button disabled={!request} title="Log in with Auth0" onPress={() => promptAsync({ useProxy })} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
