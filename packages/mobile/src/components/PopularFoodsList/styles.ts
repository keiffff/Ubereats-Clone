import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  base: {
    paddingHorizontal: 16,
  },
  itemImage: {
    resizeMode: 'cover',
    width: '100%',
    height: 'auto',
    aspectRatio: 1.8,
    marginBottom: 8,
  },
  itemLabelsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 32,
  },
  itemLabel: {
    fontSize: 14,
  },
});
