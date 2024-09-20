import {Divider} from '@rneui/base';
import {StyleSheet, Text, View} from 'react-native';

interface Props {
  label: string;
  colorValue: string;
}
const ColorLabel = (props: Props) => {
  return (
    <View style={styles.container}>
      <Divider width={1} orientation="vertical" />
      <View
        style={{
          width: 11,
          height: 11,
          backgroundColor: props.colorValue,
          borderWidth: 0.5,
          borderColor: props.colorValue == 'white' ? 'grey' : props.colorValue,
        }}></View>
      <Text style={{fontSize: 10}}>{props.label.toUpperCase()}</Text>
    </View>
  );
};

export default ColorLabel;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 5,
    justifyContent: 'flex-start',
    width: 50,
    alignItems: 'center',
  },
});
