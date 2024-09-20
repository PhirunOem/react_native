import {View} from 'react-native';
import styles from './style';
import {Text} from 'react-native-animatable';
import {Divider} from '@rneui/base';
import {memo, useEffect, useState} from 'react';
import {CreateProductModel} from '../../../core';
import {allAvailableColors} from '../../../utils';
import RenderItemAndReturnValue from './renderItemAndReturnValue';
import ShowAllColors from './showAllColors';
import {isEmpty} from 'validator';
import SizeBlock from './sizeBlock';
import InsertImagesBlock from './insertImageBlock';
import {useSelector, useDispatch} from 'react-redux';
import {setBooleanValue} from '../../../redux/slice';

//picked only specific attribute inorder to make sure our code is paste wrong attribute and value or douplicate attributes
type ColorInfo = Pick<CreateProductModel, 'colors'> & {
  colors: Pick<
    CreateProductModel['colors'][0],
    'colorName' | 'imageURLs' | 'sizes' | 'colorCustom'
  > & {
    sizes: Pick<
      CreateProductModel['colors'][0]['sizes'][0],
      'sizeValue' | 'discount' | 'price'
    >;
  };
};
interface Props {
  onReturnValue?(value: any): void;
  errorText?: string;
  isError?: boolean;
}

const ColorAndImageBlock = (props: Props) => {
  const [state, setState] = useState<{
    selectedValue: string;
    activeId: string;
    activeSizeId: number | undefined;
    previousActivedId: string[];
    data: any;
    isClickColor: boolean;
  }>({
    selectedValue: 'color',
    activeId: '',
    activeSizeId: undefined,
    previousActivedId: [],
    isClickColor: false,
    data: [
      {label: 'colors', value: 'color'},
      {label: 'sizes', value: 'size'},
    ],
  });
  const [colorData, setColorData] = useState({
    colorName: '',
    colorCustom: '',
    imageURLs: [{fileName: '', url: ''}],
    sizes: [{sizeValue: 0, price: 0, discount: 0}],
  });

  const isAddNewColor = useSelector((state: any) => state.action.isAddNewColor);
  const dispatch = useDispatch();
  //trig update color data
  useEffect(() => {
    handleReturnValueToParent(colorData);
  }, [colorData]);
  const handleReturnValueToParent = (data: Partial<ColorInfo['colors'][0]>) => {
    if (props.onReturnValue) props.onReturnValue({colors: [colorData]});
  };

  //handle select color and check if color selected, it will show size button and if not, doesn't show
  const handlSelectColor = () => {
    dispatch(setBooleanValue({type: 'ADDNEWCOLOR', booleanValue: false}));
    setState(prev => ({...prev, isClickColor: true}));
  };
  const checkIfAddNewColor =
    (state.isClickColor == false && isAddNewColor == true) ||
    (state.isClickColor == false && isAddNewColor == false) ||
    (state.isClickColor == true && isAddNewColor == true);
  return (
    <View style={[styles.detailBlock, {paddingBottom: 30}]}>
      <View>
        <Text>Colors, Sizes and Images</Text>
      </View>
      <View>
        <Divider />
      </View>
      <View>
        <RenderItemAndReturnValue
          isDefualtSelect
          disableUnselected
          defaultSelectIndex={0}
          data={checkIfAddNewColor ? [state.data[0]] : state.data}
          paddingHorizontal={6}
          backgrounColorWhenPress="#929292"
          borderColor="#929292"
          flex={checkIfAddNewColor ? 0 : 1}
          onPress={(value: any) => {
            if (value) {
              setState(prev => ({...prev, selectedValue: value.value}));
            }
          }}
        />
      </View>
      <View>
        <ShowAllColors
          data={allAvailableColors}
          isAddNewColor={isAddNewColor}
          previousActivedId={state.previousActivedId}
          onPress={(color: any) => {
            handlSelectColor();
            setColorData({...colorData, colorName: color});
          }}
          getId={(id: any) => {
            //this handle that when user click add new color, it will disable a previous one that user selected. Its concept is that when user selected one and click add new one, an old one will push to previousActivedId array and sent to child to render child's UI.
            setState(prev => ({...prev, activeId: id}));
            if (isAddNewColor == true) {
              const checkExist = state.previousActivedId.indexOf(id);
              if (checkExist == -1) {
                setState(prev => ({
                  ...prev,
                  previousActivedId: [...state.previousActivedId, id],
                }));
              }
            }
          }}
          activeId={state.activeId}
          style={{
            display:
              state.selectedValue == 'color' || isAddNewColor
                ? undefined
                : 'none',
          }}
        />
        <SizeBlock
          style={{
            display:
              state.selectedValue == 'color' || isAddNewColor
                ? 'none'
                : undefined,
          }}
          getData={(sizes: any) => {
            setColorData(prev => ({...prev, sizes: sizes}));
          }}
        />
      </View>
      <View>
        <Divider />
      </View>
      <View>
        <InsertImagesBlock
          disable={checkIfAddNewColor}
          isAddNewColor={checkIfAddNewColor}
          getImageUrl={(url: any) =>
            setColorData(prev => ({...prev, imageURLs: url}))
          }
        />
      </View>
    </View>
  );
};

export default ColorAndImageBlock;
