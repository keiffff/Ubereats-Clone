import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

type Props = {
  value: number;
  onPressIncrement: () => void;
  onPressDecrement: () => void;
  disableIncrement?: boolean;
};

export const Counter = ({ value, onPressDecrement, onPressIncrement, disableIncrement = false }: Props) => {
  const disableDecrement = value === 0;

  return (
    <View style={styles.base}>
      <TouchableOpacity onPress={onPressDecrement} disabled={disableDecrement}>
        <Text style={[styles.decrementText, disableDecrement && styles.decrementTextDisabled]}>-</Text>
      </TouchableOpacity>
      <Text style={styles.valueText}>{value}</Text>
      <TouchableOpacity onPress={onPressIncrement} disabled={disableIncrement}>
        <Text style={[styles.incrementText, disableIncrement && styles.incrementTextDisabled]}>+</Text>
      </TouchableOpacity>
    </View>
  );
};
