import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  hamburgerButtonContainer: {
    padding: 10,
  },
  hamburgerButtonImage: {
    width: 25,
    height: 25,
    marginLeft: 6,
  },
  shoppingCartContainer: {
    padding: 10,
  },
  shoppingCartImage: {
    width: 25,
    height: 25,
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
    width: 180,
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
