import React from 'react';
import { Button, StyleSheet, View } from 'react-native';

type Props = {
  onMounted: () => void;
};

export const Public = ({ onMounted }: Props) => {
  return (
    <View style={styles.container}>
      <Button title="Click to Login" onPress={onMounted} />
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
