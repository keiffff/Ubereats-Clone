import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  base: {
    backgroundColor: '#ffffff',
    paddingTop: 24,
    paddingHorizontal: 16,
  },
  foodCategoriesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 80,
  },
  foodCategoryItem: {
    marginBottom: 16,
  },
});
