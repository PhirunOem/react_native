import {theme} from '../../../core';
import {ScrollView, Text, View} from 'react-native';

interface Props {
  data?: Array<string>;
}
export default function Colors({
  data = [
    'black',
    'white',
    'red',
    'purple',
    'blue',
    'gold',
    'orange',
    'silver',
    'grown',
  ],
}: Props) {
  return (
    <View style={{gap: 5}}>
      <Text
        style={{
          fontSize: 14,
          letterSpacing: 1,
          fontWeight: 400,
          color: 'black',
        }}>
        {'COLORS'}
      </Text>
      <ScrollView
        horizontal
        contentContainerStyle={{gap: 5}}
        showsHorizontalScrollIndicator={false}>
        {data.map((item, index) => {
          return (
            <View key={index}>
              <Text
                style={{
                  width: 40,
                  height: 15,
                  backgroundColor: item,
                  borderWidth: 0.5,
                  borderColor: theme.colors.secondary,
                }}></Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}
