import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import IconCustom from './iconCustom';
import {Divider} from '@rneui/base';

interface listChildProps {
  imagrUrl: any;
  title: string;
  onPress?(): void;
}
const ListChildCustom: React.FC<listChildProps> = ({
  imagrUrl,
  title = 'example',
  onPress,
}) => {
  const resolveUrl = Image.resolveAssetSource(imagrUrl).uri;
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.5}>
      <View>
        <View style={styles.container}>
          <View style={styles.subContainer}>
            <View>
              <Image
                source={{uri: resolveUrl}}
                resizeMode="cover"
                height={70}
                width={116}
              />
            </View>
            <View>
              <Text
                style={{
                  color: 'black',
                  fontSize: 14,
                  fontWeight: 400,
                }}>
                {title}
              </Text>
            </View>
          </View>
          <View>
            <IconCustom
              iconName="chevron-forward-sharp"
              iconSize={20}
              iconColor="black"
              onClick={onPress}
            />
          </View>
        </View>
        <View>
          <Divider color="#D9D9D9" width={1} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 90,
    padding: 20,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
  },
  subContainer: {
    flex: 1,
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center',
  },
});
export default React.memo(ListChildCustom);
