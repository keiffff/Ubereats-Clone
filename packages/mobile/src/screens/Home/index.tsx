import React from 'react';
import { View, Text } from 'react-native';
import { useCurrentUser } from 'providers/CurrentUser';
import { styles } from './styles';

export const Home = () => {
  const { firstName } = useCurrentUser();

  return (
    <View style={styles.container}>
      <Text>{`You are now logged in as ${firstName}`}</Text>
    </View>
  );
};
