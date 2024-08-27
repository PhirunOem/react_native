import {StyleSheet, View} from 'react-native';
import {theme} from '../../../core';
export default function LeftStyle() {
  return (
    <View style={{gap: 1.5}}>
      <Child isReverse={true} />
      <Child isReverse={false} />
    </View>
  );
}

const Child = ({isReverse = false}) => {
  return (
    <View
      style={{
        flexDirection: isReverse ? 'column-reverse' : 'column',
        alignItems: 'center',
        gap: 1.5,
        justifyContent: 'center',
        alignSelf: 'center',
      }}>
      <View style={styles.circle1}></View>
      <View style={styles.circle2}></View>
      <View style={styles.circle3}></View>
      <View style={styles.circle4}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  circle1: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'rgba(3,161,171,.5)',
  },
  circle2: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(3,161,171,.5)',
  },
  circle3: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: 'rgba(3,161,171,.5)',
  },
  circle4: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: 'rgba(3,161,171,.5)',
  },
});
