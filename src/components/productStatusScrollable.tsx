import React from 'react';
import {ScrollView, Text} from 'react-native';
import {StyleSheet, View} from 'react-native';
import ButtonCustom from './buttonCustom';
import {theme} from '../core';
import {allShoes} from '../utils';
import ProductCardCustom from './productCardCustom';
interface Props {
  productStatus: string;
  data?: Array<any>;
  onClickToSeeAll?(): void;
  isSimilarProduct?: boolean;
}

const exampleData = {
  productType: 'NONE',
  price: 0,
  description: 'No description available here',
  imagesCover: [require('../assets/images/noImage.png')],
  imagesByColors: {
    white: [],
    black: [],
    red: [],
    gold: [],
    purple: [],
    blue: [],
  },
  code: 'NONE',
  isFavorite: false,
};
const ProductStatusScrollable: React.FC<Props> = ({
  productStatus = 'NEW ARRIVALS',
  data = [exampleData],
  onClickToSeeAll,
  isSimilarProduct = false,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{flex: 1}}>
          <Text style={{fontSize: 20, fontWeight: 500, color: 'black'}}>
            {productStatus.toUpperCase()}
          </Text>
        </View>
        <View style={{width: '30%'}}>
          {isSimilarProduct ? (
            <View></View>
          ) : (
            <ButtonCustom
              onPress={onClickToSeeAll}
              title={'SEE ALL'}
              borderWidth={1}
              borderColor={theme.colors.background}
              fontSize={12}
              isIcon
              iconSize={12}
              iconName="arrow-forward"
              iconColor={theme.colors.background}
              isJustifyTextAndIcon
              textColor={theme.colors.background}
            />
          )}
        </View>
      </View>
      <View>
        {data.length !== 0 ? (
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {data.map((item, index) => {
              return (
                <View style={{paddingRight: 5}} key={index}>
                  <ProductCardCustom
                    imageUrl={item.imagesCover[0]}
                    description={item.description}
                    productType={item.productType}
                    code={item.code}
                    price={item.price}
                    onPress={() => {
                      console.log(':::: click product ::::');
                    }}
                  />
                </View>
              );
            })}
          </ScrollView>
        ) : (
          <Text>{'No data yet!'}</Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    gap: 10,
    paddingVertical: 10,
  },
  header: {
    paddingRight: 28,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
export default ProductStatusScrollable;
