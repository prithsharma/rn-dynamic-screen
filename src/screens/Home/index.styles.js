import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#DDDDDD',
  },
  feed: {
    backgroundColor: '#DDDDDD',
    paddingBottom: 50,
  },
  loadingView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorView: {
    flex: 1,
    minHeight: 150,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
