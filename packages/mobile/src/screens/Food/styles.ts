import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  base: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingVertical: 24,
    paddingHorizontal: 16,
  },
  foodDetailContainer: {
    marginBottom: 40,
  },
  counterContainer: {
    alignItems: 'center',
    marginBottom: 16,
  },
  addToCartContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 200,
  },
  totalPriceContainer: {
    borderWidth: 1,
    borderColor: '#d8d8d8',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginRight: 8,
  },
  totalPriceText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  addToCartButtonContainer: {
    flexGrow: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignSelf: 'stretch',
  },
  addToCartButton: {
    borderRadius: 8,
    paddingVertical: 12,
    backgroundColor: '#5ea33a',
    alignItems: 'center',
  },
  addToCartButtontext: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
