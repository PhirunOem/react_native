import {
  Image,
  ScrollView,
  View,
  Dimensions,
  StatusBar,
  ImageSourcePropType,
} from 'react-native';
import {Text} from 'react-native-elements';
import React from 'react';
import {productTypeData} from '../../utils';
import validator from 'validator';
import ButtonCustom from '../../components/buttonCustom';
interface CardProps {
  title: string;
  images: Array<String>;
  onPress(): void;
}
export default function ScrollableCard(props: CardProps) {
  const screenHeight = Dimensions.get('screen').height;
  const windowHeight = Dimensions.get('window').height;
  const navbarHeight = screenHeight - windowHeight + StatusBar.currentHeight!;
  const screenWidth = Dimensions.get('screen').width;
  // if user don't paste images prop,it will render a string given below
  const imageList = props.images ? props.images : [];
  return (
    <View
      style={{
        position: 'relative',
      }}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {Array.isArray(imageList) == false ? (
          <Text>Empty array</Text>
        ) : (
          imageList.map((item, index): any => {
            const imageUrl = Image.resolveAssetSource(
              item as ImageSourcePropType,
            ).uri;
            return (
              <View
                key={index}
                style={{
                  width: screenWidth,
                  height: windowHeight - 3 * navbarHeight,
                }}>
                <Image
                  style={{flex: 1, width: undefined, height: undefined}}
                  source={{uri: imageUrl}}
                  alt="shoes"></Image>
              </View>
            );
          })
        )}
      </ScrollView>
      <View
        style={{
          position: 'absolute',
          top: '5%',
          left: '7%',
          width: 'auto',
          backgroundColor: 'white',
          paddingHorizontal: 8,
          paddingVertical: 6,
        }}>
        <Text
          style={{
            color: '#00F0FF',
            fontSize: 14,
            fontWeight: '300',
            letterSpacing: 2,
          }}>
          {props.title || ' '}
        </Text>
      </View>
      <View
        style={{
          position: 'absolute',
          bottom: '5%',
          alignItems: 'center',
          width: '100%',
        }}>
        <View style={{width: '86%'}}>
          <ButtonCustom
            onPress={props.onPress}
            title={'SHOP NOW'}
            textColor="#00F0FF"
            isIcon={true}
            iconName="arrow-forward"
            iconColor="#00F0FF"
            fontSize={14}
            backgroundColor="#069da2"
            paddingVertical={15}
            paddingHorizontal={15}
            isSemiBoldText
            isJustifyTextAndIcon={true}
          />
        </View>
      </View>
    </View>
  );
}
