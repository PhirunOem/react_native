import {theme} from '../../../core';
import {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

interface Props {
  allSizes?: Array<number>;
  clickSize?(size: number): any;
}
export default function Sizes({
  allSizes = [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34],
  clickSize = () => {},
}: Props) {
  const [focusIndex, setFocusIndex] = useState(0);
  const handleSetSizeAndReturnToParent = (size: number, index: number) => {
    clickSize(size);
    setFocusIndex(index);
  };
  return (
    <View style={{gap: 5}}>
      <Text style={{fontSize: 16, color: 'black', letterSpacing: 1}}>
        {'SIZE'}
      </Text>
      <ScrollView
        horizontal
        contentContainerStyle={{gap: 15}}
        showsHorizontalScrollIndicator={false}>
        {allSizes.map((item, index) => {
          return (
            <TouchableOpacity
              onPress={() => handleSetSizeAndReturnToParent(item, index)}
              key={index}>
              <View
                style={[
                  styles.container,
                  {
                    backgroundColor:
                      index == focusIndex ? theme.colors.background : '#DDD',
                  },
                ]}>
                <Text
                  style={[
                    styles.sizeTx,
                    {
                      color: index == focusIndex ? '#00F0FF' : 'black',
                    },
                  ]}>
                  {item}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 23,
    backgroundColor: '#DDDDDD',
    alignItems: 'center',
    borderRadius: 2,
    justifyContent: 'center',
  },
  sizeTx: {
    color: 'black',
    fontSize: 12,
  },
});
