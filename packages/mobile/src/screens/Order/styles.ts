import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  base: {
    flex: 1,
    paddingVertical: 16,
    backgroundColor: '#ffffff',
  },
  orderStatusContainer: {
    paddingHorizontal: 16,
  },
  estimatedArrivalTimeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  estimatedArrivalTime: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  estimatedArrivalText: {
    color: '#a8a8a8',
    fontWeight: 'bold',
  },
  progressBarContainer: {
    marginBottom: 16,
  },
  orderStatusText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  orderImageContainer: {
    paddingVertical: 72,
    justifyContent: 'center',
    alignItems: 'center',
  },
  orderImage: {
    width: 120,
    height: 'auto',
    aspectRatio: 1,
  },
  orderSummaryContainer: {
    padding: 16,
  },
  orderSummaryCaption: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 25,
  },
  orderedItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  orderedCount: {
    backgroundColor: '#d8d8d8',
    paddingVertical: 4,
    paddingHorizontal: 8,
    marginRight: 8,
  },
  orderedFoodName: {
    flex: 1,
  },
  totalPriceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  totalPriceText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  totalPrice: {
    fontSize: 16,
  },
});
