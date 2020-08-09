import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  base: {
    width: 128,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
    paddingVertical: 12,
    borderRadius: 24,
    borderColor: '#d8d8d8',
    borderWidth: 1,
  },
  decrementText: {
    fontSize: 20,
    marginLeft: 16,
  },
  decrementTextDisabled: {
    color: '#d8d8d8',
  },
  valueText: {
    fontSize: 20,
  },
  incrementText: {
    fontSize: 20,
    marginRight: 16,
  },
  incrementTextDisabled: {
    color: '#d8d8d8',
  },
});
