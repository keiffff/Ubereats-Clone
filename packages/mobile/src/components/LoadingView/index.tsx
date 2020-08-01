import React, { ComponentProps } from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';

type Props = Partial<{
  size: ComponentProps<typeof ActivityIndicator>['size'];
}>;

export const LoadingView = ({ size = 'small' }: Props) => (
  <View style={styles.base}>
    <ActivityIndicator size={size} />
  </View>
);

const styles = StyleSheet.create({
  base: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
