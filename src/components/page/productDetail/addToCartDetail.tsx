import React from 'react';
import {Image} from 'react-native';
import {StyleSheet, Text, View} from 'react-native';

interface DetailContentProps {
  data: any;
}
const AddToCartDetail: React.FC<DetailContentProps> = ({
  data = {
    image: null,
    description: 'Example',
    color: 'black',
    size: 29,
    price: 20,
  },
}) => {
  var resolveImage = '';
  if (data.image == null)
    resolveImage = Image.resolveAssetSource(
      require('../../../assets/images/noImage.png'),
    ).uri;
  else resolveImage = Image.resolveAssetSource(data.image).uri;

  return (
    <View style={styles.addToCartContainer}>
      <View>
        <Image
          source={{uri: resolveImage}}
          width={156}
          height={156}
          resizeMode="cover"
        />
      </View>
      <View style={styles.addToCartLeftContent}>
        <Text numberOfLines={3} style={styles.addToCartDescText}>
          {data.description}
        </Text>
        <Text>{'Size: ' + data.size}</Text>
        <View
          style={{
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <Text>{'Color: '}</Text>
          <View
            style={{
              width: 24,
              height: 14,
              backgroundColor: data.color,
              borderWidth: 0.5,
              borderColor: '#929292',
            }}></View>
        </View>
        <Text style={[styles.addToCartDescText, {fontWeight: '400'}]}>
          {'$' + data.price.toFixed(2)}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  addToCartContainer: {
    paddingHorizontal: 30,
    paddingTop: 30,
    paddingBottom: 60,

    flexDirection: 'row',
    gap: 15,
    alignItems: 'flex-start',
  },
  addToCartLeftContent: {
    flexDirection: 'column',
    gap: 12,
    width: '50%',
  },
  addToCartDescText: {
    fontSize: 16,
    fontWeight: '700',
    color: 'rgba(0,0,0,.95)',
  },
});

export default AddToCartDetail;
