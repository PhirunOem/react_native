import {Dimensions, StatusBar, StyleSheet} from 'react-native';
const {height} = Dimensions.get('window');
const statusHeight =
  StatusBar.currentHeight == undefined ? 20 : StatusBar.currentHeight;
const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
  },
  subContainer: {
    paddingHorizontal: 22,
    paddingVertical: 32,
    position: 'absolute',
    top: statusHeight!,
    width: '100%',
    height: height - statusHeight!,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignContent: 'center',
  },
  subContainer1: {
    flexDirection: 'column',
    gap: 25,
  },
  header: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    gap: 10,
    alignItems: 'center',
  },
  bottomAction: {
    width: '100%',
  },
});

export {styles};
