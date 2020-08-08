import { StyleSheet } from 'react-native';

const ITEM_IMAGE_WIDTH = 120;

export const styles = StyleSheet.create({
  base: {
    backgroundColor: '#ffffff',
    padding: 16,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  itemContainerLast: {
    marginBottom: 0,
  },
  itemInfoContainer: {
    flexDirection: 'column',
    flexShrink: 1,
    marginRight: 16,
    maxHeight: ITEM_IMAGE_WIDTH,
  },
  itemNameContainer: {
    marginBottom: 8,
  },
  itemName: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  itemDescriptionContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  itemPrice: {
    alignContent: 'flex-end',
  },
  itemImage: {
    width: ITEM_IMAGE_WIDTH,
    height: ITEM_IMAGE_WIDTH,
  },
});
