import {StyleSheet, StatusBar} from 'react-native';
const statusHieght = StatusBar.currentHeight || 25;
const signInStyle = StyleSheet.create({
  contentContainer: {
    width: '100%',
    height: '100%',
    margin: 0,
  },
  icon: {
    color: 'black',
    position: 'absolute',
    right: '5%',
    top: '5%',
  },
  content: {
    color: 'black',
    position: 'absolute',
    bottom: '0%',
    backgroundColor: 'white',
    width: '100%',
    height: '20%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 15,
    padding: 20,
  },

  contentChild: {
    width: '100%',
    height: 'auto',
    gap: 15,
  },
  subContainer: {
    width: '100%',
    height: '100%',
  },
});

export {signInStyle};
