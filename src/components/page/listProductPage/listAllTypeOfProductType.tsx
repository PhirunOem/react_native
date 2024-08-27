import React from 'react';
import {FlatList, Image, Text, View} from 'react-native';
import {ListItem, Avatar} from '@rneui/themed';
import {ListChildCustom} from '../../../components';
import {allShoes} from '../../../utils';
const ListAllTypeOfProductType: React.FC = ({navigation, route}: any) => {
  const keyExtractor = (item: any, index: any) => index.toString();
  const ClickToListAllProductOfProductType = (productType: string) => {
    const params = route.params;
    console.log('::: route :::', route);

    if (params == undefined) return;
    else {
      navigation.navigate('Categories', {
        screen: 'ListProductOfType',
        params: {
          productType: productType,
          categoryType: params.categoryType,
        },
      });
    }
  };
  const renderItem = ({item, index}: any) => (
    <ListChildCustom
      imagrUrl={item.imagesCover[0]}
      title={item.productType}
      onPress={() => ClickToListAllProductOfProductType(item.productType)}
      key={index}
    />
  );

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <FlatList
        keyExtractor={keyExtractor}
        data={allShoes}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default ListAllTypeOfProductType;
