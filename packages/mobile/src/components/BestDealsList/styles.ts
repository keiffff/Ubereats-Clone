import { StyleSheet } from 'react-native';
import { makeCircleStyle } from 'helpers/styles';

export const styles = StyleSheet.create({
  base: {
    position: 'relative',
  },
  indicatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    position: 'absolute',
    bottom: 24,
  },
  indicator: {
    backgroundColor: 'rgba(255,255,255,.5)',
    ...makeCircleStyle(10),
    marginRight: 16,
  },
  indicatorLast: {
    marginRight: 0,
  },
  indicatorActive: {
    backgroundColor: '#ffffff',
  },
});
