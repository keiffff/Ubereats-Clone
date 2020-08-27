import React, { useRef, useEffect } from 'react';
import { View, Animated, StyleSheet } from 'react-native';
import { styles } from './styles';

type Props = {
  progress: number;
};

export const ProgressBar = ({ progress }: Props) => {
  const animation = useRef(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(animation.current, {
      toValue: progress,
      duration: 500,
      useNativeDriver: false,
    }).start();
  }, [animation, progress]);

  const width = animation.current.interpolate({
    inputRange: [0, 100],
    outputRange: ['0%', '100%'],
    extrapolate: 'clamp',
  });

  return (
    <View style={styles.base}>
      <Animated.View style={[StyleSheet.absoluteFill, styles.inner, { width }]} />
    </View>
  );
};
