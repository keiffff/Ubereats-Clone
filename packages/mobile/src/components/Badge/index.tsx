import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

type Props = {
  count: number;
  minCount?: number;
  maxCount?: number;
};

export const Badge = ({ count, maxCount = 99, minCount = 1 }: Props) =>
  count >= minCount ? (
    <View style={styles.container}>
      <Text style={styles.text}>{count <= maxCount ? count : `${maxCount}+`}</Text>
    </View>
  ) : null;
