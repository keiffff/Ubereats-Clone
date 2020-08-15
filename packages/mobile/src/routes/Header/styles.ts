import { StyleSheet } from 'react-native';
import { makeCircleStyle } from 'helpers/styles';

export const styles = StyleSheet.create({
  hamburgerButtonContainer: {
    padding: 10,
  },
  hamburgerButtonImage: {
    width: 32,
    height: 32,
    marginLeft: 6,
  },
  shoppingCartContainer: {
    padding: 10,
    position: 'relative',
  },
  shoppingCartBadge: {
    position: 'absolute',
    top: 4,
    right: 8,
    ...makeCircleStyle(22),
    backgroundColor: '#D60F0F',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  shoppingCartBadgeText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  shoppingCartImage: {
    width: 32,
    height: 32,
    marginRight: 6,
  },
  searchTextInputContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 4,
  },
  searchTextInputWrapper: {
    flexShrink: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 4,
    paddingHorizontal: 8,
    backgroundColor: '#fafafa',
    borderRadius: 8,
    marginRight: 16,
  },
  searhIcon: {
    width: 14,
    height: 14,
    marginRight: 8,
  },
  searchTextInput: {
    fontSize: 16,
    flex: 1,
    marginRight: 8,
  },
  clearButton: {
    marginLeft: 'auto',
  },
  cancelButtonText: {
    fontSize: 16,
  },
});
