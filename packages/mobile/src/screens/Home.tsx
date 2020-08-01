import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useCurrentUser } from 'providers/CurrentUser';

export const Home = () => {
  const { firstName } = useCurrentUser();

  return (
    <View style={styles.container}>
      <Text>{`You are now logged in as ${firstName}`}</Text>
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
