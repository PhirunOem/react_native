import {theme} from '../../../core';
import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

interface Props {
  data: any;
  focusIndex: number;
  onPress?(index: number): any;
}
const ShowAllColorsSection: React.FC<Props> = ({
  data = [],
  focusIndex = 0,
  onPress = () => {},
}) => {
  // parent call onPress() and onPress() call pasteUpdateIndexToParent() =>>> and it call onpress() . It means it do a lifecycle action
  const pasteUpdateIndexToParent = async (index: any) => {
    await onPress(index);
  };
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {data.length == 0 ? (
        <Text>{'Loading...'}</Text>
      ) : (
        data.map((item: any, index: number) => {
          const imageResolve = Image.resolveAssetSource(item[0]).uri;
          return (
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={async () => pasteUpdateIndexToParent(index)}
              key={index}>
              <View
                style={{
                  borderColor: theme.colors.background,
                  borderWidth: focusIndex == index ? 1 : 0,
                }}>
                <Image
                  source={{uri: imageResolve}}
                  width={focusIndex == index ? 77 : 81}
                  height={focusIndex == index ? 77 : 81}
                />
              </View>
            </TouchableOpacity>
          );
        })
      )}
    </ScrollView>
  );
};

export default React.memo(ShowAllColorsSection);
