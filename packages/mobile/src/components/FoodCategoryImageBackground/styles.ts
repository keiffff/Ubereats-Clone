import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  baseImageBackground: {
    position: 'relative',
    aspectRatio: 1.5,
  },
  baseImage: {
    resizeMode: 'cover',
  },
  inner: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,.5)',
  },
  name: {
    position: 'absolute',
    alignSelf: 'center',
    top: '50%',
    color: 'rgba(255,255,255,.7)',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
