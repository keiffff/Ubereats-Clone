import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  foodName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  foodImage: {
    resizeMode: 'cover',
    width: '100%',
    height: 'auto',
    aspectRatio: 1.6,
    marginBottom: 16,
  },
  foodImageList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  foodImageListItem: {
    height: 'auto',
    aspectRatio: 1.8,
    marginBottom: 8,
  },
});
