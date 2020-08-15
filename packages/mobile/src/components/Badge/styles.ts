import { StyleSheet } from 'react-native';
import { makeCircleStyle } from 'helpers/styles';

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 4,
    right: 8,
    ...makeCircleStyle(22),
    backgroundColor: '#D60F0F',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  text: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});
