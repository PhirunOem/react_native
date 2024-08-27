import React from 'react';
import {
  Dimensions,
  ImageBackground,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {sliderImage} from '../../../utils';
import {ProductCategoryNavigator} from '../../../components';
import {ProductStatusPage} from '../productStatusPage';
const screenHeight = Dimensions.get('window').height;
interface Props {
  categoryType: string;
  navigation: any;
}
const menProductTypeData = [
  {
    pType: 'SHOES',
    iconName: 'footsteps-outline',
  },
  {
    pType: 'CLOSTHINGS',
    iconName: 'shirt-outline',
  },
  {
    pType: 'ACCESSORIES',
    iconName: 'watch-outline',
  },
];

const CategoryTypePage: React.FC<Props> = ({
  categoryType = 'MEN',
  navigation,
}) => {
  const handleClickNavigate = (productType: string, categoryType: string) => {
    navigation.navigate('Categories', {
      screen: 'ListTypeOfProductType',
      params: {
        productType: productType,
        categoryType: categoryType,
      },
    });
  };

  return (
    <ScrollView style={{height: 'auto', backgroundColor: 'white'}}>
      {categoryType == 'MEN' ? (
        <View>
          <ImageBackgroundCustom />
          <View style={{gap: 2, flexDirection: 'column'}}>
            {menProductTypeData.map((item, index): any => {
              return (
                <ProductCategoryNavigator
                  productType={item.pType}
                  leftIconName={item.iconName}
                  onClick={() => handleClickNavigate(item.pType, categoryType)}
                  key={index}
                />
              );
            })}
          </View>
          <View>
            <ProductStatusPage />
          </View>
        </View>
      ) : (
        <View
          style={{
            flex: 1,
            width: '100%',
            height: screenHeight - 190,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              alignItems: 'center',
              fontSize: 20,
              color: 'red',
              fontWeight: '500',
            }}>
            {categoryType + ' feature is coming soon!'}
          </Text>
        </View>
      )}
    </ScrollView>
  );
};

interface ImageProps {
  imageUrl?: string;
  categoryType?: string;
}
const ImageBackgroundCustom: React.FC<ImageProps> = ({}) => {
  return (
    <ImageBackground
      source={{uri: sliderImage[2]}}
      children={
        <View
          style={{
            flex: 1,
            height: 222,
            paddingHorizontal: 22,
            justifyContent: 'flex-end',
            bottom: 20,
            gap: 3,
          }}>
          <View
            style={{
              backgroundColor: 'white',
              width: 153,
              alignItems: 'center',
              paddingVertical: 6,
            }}>
            <Text style={{fontWeight: '500', color: 'black', fontSize: 10}}>
              {'SAVE ON BACK TO SCHOOL'}
            </Text>
          </View>
          <View
            style={{
              backgroundColor: 'white',
              width: 175,
              alignItems: 'center',
              paddingVertical: 6,
              paddingHorizontal: 4,
            }}>
            <Text
              style={{
                fontSize: 8,
              }}>
              {'30% off full price and sale. Use code: KIDS'}
            </Text>
          </View>
        </View>
      }
    />
  );
};
export default React.memo(CategoryTypePage);
