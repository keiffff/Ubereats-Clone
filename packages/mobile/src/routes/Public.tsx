import React from 'react';
import { Button, StyleSheet, View } from 'react-native';

type Props = {
  onPressLogin: () => void;
};

export const Public = ({ onPressLogin }: Props) => {
  return (
    <View style={styles.container}>
      <Button title="Click to Login" onPress={onPressLogin} />
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
