import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useAuth } from 'providers/Auth';

export const Test = () => {
  const { authenticated, handleLogin, currentUserId } = useAuth();

  return (
    <View style={styles.container}>
      {authenticated ? (
        <Text>You are logged in as {currentUserId}</Text>
      ) : (
        <Button title="Log in with Auth0" onPress={handleLogin} />
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
