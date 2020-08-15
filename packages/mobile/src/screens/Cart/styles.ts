import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  base: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingVertical: 24,
  },
  cartFoodsContainer: {
    paddingHorizontal: 16,
  },
  cartFood: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  cartFoodInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cartFoodCount: {
    borderWidth: 1,
    borderColor: '#d8d8d8',
    paddingVertical: 4,
    paddingHorizontal: 8,
    marginRight: 8,
  },
  cartFoodCountText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#5ea33a',
  },
  cartFoodNameText: {
    fontSize: 16,
  },
  cartFoodPriceText: {
    fontSize: 16,
  },
  placeOrderButton: {
    marginTop: 'auto',
    backgroundColor: '#5ea33a',
    paddingVertical: 12,
  },
  placeOrderButtonText: {
    textAlign: 'center',
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
