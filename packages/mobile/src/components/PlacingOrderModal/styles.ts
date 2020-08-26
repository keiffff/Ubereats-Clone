import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  base: {},
  inner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  container: {
    width: '100%',
    maxHeight: '90%',
    paddingTop: 24,
    paddingHorizontal: 16,
    backgroundColor: '#ffffff',
    borderRadius: 8,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 40,
  },
  placingOrderText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  content: {
    paddingHorizontal: 16,
    paddingBottom: 64,
  },
  orderedUserNametext: {
    fontWeight: 'bold',
    marginBottom: 24,
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
});
