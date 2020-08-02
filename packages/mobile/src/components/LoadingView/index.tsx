import React, { ComponentProps } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { styles } from './styles';

type Props = Partial<{
  size: ComponentProps<typeof ActivityIndicator>['size'];
}>;

export const LoadingView = ({ size = 'small' }: Props) => (
  <View style={styles.base}>
    <ActivityIndicator size={size} />
  </View>
);
