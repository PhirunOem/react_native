import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  view: {
    justifyContent: 'flex-end',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    margin: 0,
    backgroundColor: 'rgba(0,0,0,0.025)',
  },
  content: {
    height: 347,
    backgroundColor: 'white',
    borderRadius: 4,
  },
  contentTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  header: {
    padding: 20,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  containerAction: {
    paddingHorizontal: 50,
    paddingVertical: 30,
    width: '100%',
    alignItems: 'center',
    gap: 5,
  },
  action: {
    width: '80%',
  },
  bottom: {
    paddingVertical: 10,
  },
});
export {styles};
