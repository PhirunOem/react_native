import {ColorValue, StyleSheet, View, ViewStyle} from 'react-native';
import styles from './style';
import {Text} from 'react-native-animatable';
import {Divider} from '@rneui/base';
import {ButtonCustom, RadioCustom} from '../../../components';
import {useMemo, useState} from 'react';
import {CreateProductModel, theme} from '../../../core';
import {
  mainCategories,
  subCategories1,
  subCategoriesOfShoes,
} from '../../../utils';
import RenderItemAndReturnValue from './renderItemAndReturnValue';
import {useComplexStateWithReducer} from '../../../hooks';

interface Props {
  onReturnValue?(value: any): void;
  errorText?: string;
  isError?: boolean;
}
//make sure data insertion is perfect both attribute and value
type CateInfo = Pick<
  CreateProductModel,
  'mainCategory' | 'subCategory1' | 'subCategory2'
>;
const CategoryBlock = (props: Props) => {
  const borderSize = 0.5;
  const size = 16;
  const [selectedId, setSelectedId] = useState<string | undefined>();
  const [subCateSelected, setSubCateSelected] = useState<string>();
  const [state, setState] = useComplexStateWithReducer({isSelected: false});
  const mainCategory = useMemo(
    () =>
      mainCategories.map((item, index) => ({
        id: `${index}`,
        label: item.label,
        value: item.value,
        size: size,
        color: '#fff',
        borderColor:
          selectedId == `${index}` ? theme.colors.background : 'black',
        borderSize: selectedId == `${index}` ? 8 : borderSize,
        containerStyle: {
          paddingHorizontal: 0,
        },
      })),
    [selectedId],
  );
  const handleSentDataToParent = (data: Partial<CateInfo>) => {
    if (props.onReturnValue) props.onReturnValue(data);
  };
  return (
    <View style={[styles.detailBlock, {paddingBottom: 30}]}>
      <View>
        <Text>Categories</Text>
      </View>
      <View>
        <Divider />
      </View>
      <View>
        <RadioCustom
          dataRender={mainCategory}
          onPress={(id: any) => {
            if (id) setSelectedId(id);
            const value = mainCategory.filter(ci => id == ci.id);
            const _isArray = Array.isArray(value) && value.length != 0;
            if (_isArray == true)
              handleSentDataToParent({mainCategory: value[0].value});
          }}
        />
      </View>
      <View>
        <RenderItemAndReturnValue
          disableUnselected
          data={subCategories1}
          paddingHorizontal={6}
          flex={1}
          backgrounColorWhenPress="#929292"
          onPress={(value: any) => {
            if (value) {
              setSubCateSelected(value.value);
              setState('isSelected', true);
              handleSentDataToParent({subCategory1: value.value});
            }
          }}
        />
      </View>
      {state.isSelected && (
        <View>
          <RenderItemAndReturnValue
            disableUnselected
            data={subCateSelected == 'shoes' ? subCategoriesOfShoes : []}
            style={local_styles.subCate1Con}
            borderColor={'#929292'}
            borderWidth={0.5}
            letterSpacing={2}
            paddingHorizontal={2}
            fontSize={10}
            backgrounColorWhenPress={theme.colors.background}
            onPress={(value: any) => {
              if (value) {
                handleSentDataToParent({subCategory2: value.value});
              }
            }}
          />
        </View>
      )}
    </View>
  );
};
const local_styles = StyleSheet.create({
  subCate1Con: {
    flexDirection: 'row',
    gap: 5,
    flexWrap: 'wrap',
  },
});
export default CategoryBlock;
