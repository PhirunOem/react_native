import React, {useState} from 'react';
import {Dimensions, FlatList, ScrollView, Text, View} from 'react-native';
import {allShoes} from '../../../utils';
import {ProductCardCustom} from '../../../components';
import {checkValidKeyInObject} from '../../../core';
const ListAllProductOfType: React.FC = ({navigation, route}: any) => {
  const width = Dimensions.get('screen').width;
  const [routes, setRoutes] = useState({...route.params});
  const ClickToDetailProduct = (index: number) => {
    if (navigation.canGoBack()) {
      navigation.navigate('Categories', {
        screen: 'Detail',
        params: {...routes, productId: index},
      });
    }
  };
  return (
    <ScrollView>
      <View
        style={{
          flexDirection: 'row',
          width: width,
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          flex: 1,
          backgroundColor: 'white',
        }}>
        {allShoes.map((item, index) => {
          return (
            <View style={{paddingBottom: 3}} key={index}>
              <ProductCardCustom
                width={(index + 1) % 5 == 0 ? width : width / 2 - 1.5}
                imageUrl={item.imagesCover[0]}
                onPress={() => ClickToDetailProduct(index)}
              />
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default ListAllProductOfType;
