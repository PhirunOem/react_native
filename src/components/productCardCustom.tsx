import React from 'react';
import {Dimensions, ImageBackground, StyleSheet, Text} from 'react-native';
import {View} from 'react-native-animatable';
import IconCustom from './iconCustom';
import {TouchableOpacity} from 'react-native';

interface Props {
  imageUrl?: string;
  price?: number;
  productType?: string;
  code?: string;
  description?: string;
  isFavorite?: boolean;
  addToFavorite?(): void;
  onPress?(): void;
  width?: number;
  isAutoWidth?: boolean;
}
const image = require('../assets/images/productType/Soccer/pic1.jpeg');
const screenWidth = Dimensions.get('screen').width;
const ProductCardCustom: React.FC<Props> = ({
  imageUrl = image,
  price = 600.0,
  productType = 'Soccer',
  code = 'SAVINGS',
  description = 'This soccer is good for men who like playing football',
  isFavorite = false,
  addToFavorite,
  onPress,
  width = screenWidth / 2,
  isAutoWidth = false,
}) => {
  return (
    <TouchableOpacity
      style={cardStyle({width: width, isAutoWidth: isAutoWidth}).container}
      activeOpacity={0.8}
      onPress={onPress}>
      <ImageBackground source={imageUrl} resizeMode="cover" style={{flex: 1}}>
        <View style={cardStyle({}).subContainer}>
          <View style={cardStyle({}).favorite}>
            <View style={cardStyle({}).icon} aria-disabled>
              <IconCustom
                iconName={isFavorite ? 'heart' : 'heart-outline'}
                iconSize={24}
                iconColor="black"
                underlayColor="rgba(0,0,0,0)"
                onClick={addToFavorite}
              />
            </View>
          </View>
          <View style={cardStyle({}).detail}>
            <View style={cardStyle({}).detailContent}>
              <View style={{gap: 3}}>
                <Text style={[cardStyle({}).txBg, {width: 94}]}>
                  CODE:{code.toUpperCase()}
                </Text>
                <Text style={[cardStyle({}).txBg, {width: 57}]}>
                  ${price.toFixed(2)}
                </Text>
              </View>
              <View style={{}}>
                <Text style={cardStyle({}).desTx} numberOfLines={2}>
                  {description.toUpperCase()}
                </Text>
                <Text style={{color: 'black', fontSize: 11}}>
                  {productType}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

interface containerProps {
  width?: number;
  isAutoWidth?: boolean;
}
const cardStyle = (props: containerProps) =>
  StyleSheet.create({
    container: {
      width: props.isAutoWidth ? 'auto' : props.width,
      minWidth: 100,
      maxWidth: 450,
      height: 314,
    },
    subContainer: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
    favorite: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
    },
    icon: {paddingVertical: 20, paddingHorizontal: 20},
    detail: {
      padding: 20,
      height: '50%',
    },
    detailContent: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
    txBg: {
      height: 'auto',
      backgroundColor: 'white',
      paddingHorizontal: 5,
      paddingVertical: 5,
      fontSize: 11,
    },
    desTx: {
      fontSize: 12,
      color: '#000',
      fontWeight: 'bold',
      textShadowColor: 'grey',
      textShadowRadius: 1,
      textShadowOffset: {
        width: 1,
        height: 1,
      },
    },
  });
export default ProductCardCustom;
