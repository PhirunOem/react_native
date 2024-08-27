import {StyleSheet} from 'react-native';
import {theme} from '../../core';
const fontWeight = theme.fonts.medium.fontWeight;
const styles = StyleSheet.create({
  constainter: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    flexDirection: 'column',
    gap: 15,
    padding:15
  },
  actionSignUp: {
    width: '100%',
  },
  middleAction: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  headerText: {
    color: theme.colors.text,
    fontWeight: '600',
    fontSize: theme.fonts.bold.fontSize,
    marginBottom: 0,
  },
  bottomText: {
    fontWeight: 'bold',
  },
  loginText: {
    color: theme.colors.text,
    fontWeight: 'bold',
  },
  image: {
    width: 200,
    height: 200,
  },
  logInWith: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
});

export default styles;
