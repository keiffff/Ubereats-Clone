import { StyleSheet } from 'react-native';
import { makeCircleStyle } from 'helpers/styles';

export const styles = StyleSheet.create({
  base: {},
  categoryItem: {
    flexDirection: 'column',
    marginRight: 32,
    alignItems: 'center',
  },
  categoryItemLast: {
    marginRight: 0,
  },
  categoryImage: {
    ...makeCircleStyle(64),
    marginBottom: 4,
  },
  categoryName: {
    fontWeight: 'bold',
  },
});
