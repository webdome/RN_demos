import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  wrap: {
    flex: 1
  },
  contentContainer: {
    // flex: 1
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    height: 60,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  imageBox: {
    width: 40,
    height: 30
  }
});
