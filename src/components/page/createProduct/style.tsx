import {StyleSheet} from 'react-native';
import {theme} from '../../../core';
const styles = StyleSheet.create({
  container: {
    paddingBottom: 20,
    paddingHorizontal: 20,
    flex: 1,
    backgroundColor: 'white',
  },
  subContainer: {
    paddingTop: 20,
    flexDirection: 'column',
    gap: 10,
    paddingBottom: 50,
  },
  detailBlock: {
    borderColor: theme.colors.secondary,
    paddingHorizontal: 15,
    paddingTop: 10,
    height: 'auto',
    borderWidth: 1,
    flexDirection: 'column',
    gap: 10,
  },
  labelStyle: {
    paddingBottom: 5,
    color: '#50555C',
    fontSize: 12,
  },
  inputContainerStyle: {
    paddingHorizontal: 10,
    borderTopColor: '#F9F9F9',
    borderWidth: 0.5,
    borderBottomWidth: 0.5,
    height: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F9F9F9',
  },
});

export default styles;
