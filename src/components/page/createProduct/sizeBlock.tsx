import {TextInputCustom} from 'components';
import {StyleSheet, Text, ViewStyle} from 'react-native';
import {View} from 'react-native';
import styles from './style';
import {memo, useEffect, useState} from 'react';
import RenderItemAndReturnValue from './renderItemAndReturnValue';
import {allAvailableSizes} from '../../../utils';
import {CreateProductModel, PartialColors, theme} from '../../../core';
import {isEmpty} from 'validator';
import {Float} from 'react-native/Libraries/Types/CodegenTypes';

interface Props {
  activeIndex?: number;
  /**
   * @param value
   * it is depend on onPress() action. Mean that it works unless user click.
   */
  getIndex?(id: number): void;
  getData?(value: any): void;
  style?: ViewStyle;
  isAddNewColor?: boolean;
}
const SizesBlock = (props: Props) => {
  const [state, setState] = useState<{
    isSelected: boolean;
    selectedValue: string[];
    size: number;
    price: number;
    discount: number;
    allSizes: Array<{sizeValue: number; price: number; discount: number}>;
  }>({
    isSelected: false,
    selectedValue: [],
    allSizes: [],
    size: 0,
    price: 0,
    discount: 0,
  });

  // we use this function to make sure state is updated perfectly.
  const handleSetState = async (
    size: number,
    price: number,
    discount: number,
  ) => {
    console.log(':::::: call set state ::::::::::');

    setState(prev => {
      // Check if the size already exists in the array
      const sizeExists = prev.allSizes.some(item => item.sizeValue === size);
      const discountExists = prev.allSizes.some(
        item => item.sizeValue === discount,
      );
      if (sizeExists && discountExists) {
        console.log('Size already exists, not adding.');
        return prev;
      }
      const updatedSizes = [
        ...prev.allSizes,
        {
          sizeValue: size,
          price: price,
          discount: discount,
        },
      ];
      // handleSentDataToParent({...state, all});
      return {
        ...prev,
        allSizes: updatedSizes,
      };
    });
  };
  // This function handle sent all sizes to parent
  const handleSentDataToParent = (value: any) => {
    console.log('value sent to parent :::::::::::', value);

    // if (props.getData) props.getData(value);
  };
  // handle sent data to parent on every allSizes changed
  useEffect(() => {
    if (props.isAddNewColor && state.allSizes.length != 0)
      setState(prev => ({
        ...prev,
        isSelected: false,
        allSizes: [],
      }));
    handleSentDataToParent(state.allSizes);
  }, [state.allSizes, props.isAddNewColor]);
  // This fucntion handle when user unfocus input
  const handleBlur = () => {
    handleSetState(state.size, state.price, state.discount);
  };

  return (
    <View style={[props.style]}>
      <View>
        <RenderItemAndReturnValue
          isMultiSelect
          data={allAvailableSizes}
          style={local_styles.size}
          paddingHorizontal={2}
          borderWidth={0.5}
          borderColor="grey"
          backgrounColorWhenPress={theme.colors.background}
          onPress={(size: any) => {
            if (size.length == 0)
              setState(prev => ({...prev, isSelected: false}));
            else setState(prev => ({...prev, isSelected: true}));
          }}
          getOneSelectData={(size: any) => {
            const convert_num = parseFloat(size.value);
            if (convert_num) {
              setState(prev => ({...prev, size: convert_num}));
              handleSentDataToParent({...state, size: convert_num});
            }
          }}
        />
      </View>
      {state.isSelected && (
        <View style={[local_styles.sizeContainer]}>
          <View
            style={{
              justifyContent: 'center',
              flex: 1,
              alignItems: 'center',
              backgroundColor: theme.colors.secondary,
              paddingVertical: 5,
            }}>
            <Text style={{color: 'white'}}>Price</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
            }}>
            {[
              {label: 'Price', placeholder: '$ 0.00'},
              {label: 'Disount', placeholder: '0 %'},
            ].map((item, index) => {
              return (
                <View key={index} style={{flexDirection: 'row'}}>
                  <View
                    style={{
                      flexDirection: 'row',
                      gap: 5,
                      alignItems: 'center',
                    }}>
                    <View>
                      <Text>{item.label}</Text>
                    </View>
                    <View style={{width: 80}}>
                      <TextInputCustom
                        placeholder={item.placeholder}
                        inputContainerStyle={[
                          styles.inputContainerStyle,
                          {height: 25},
                        ]}
                        containerStyle={{paddingHorizontal: 0}}
                        inputStyle={{color: 'black', fontSize: 12}}
                        renderErrorMessage={false}
                        labelStyle={{display: 'none'}}
                        keyboardType="numeric"
                        onChangeText={(value: any) => {
                          if (item.label == 'Price')
                            setState({...state, price: parseFloat(value)});
                          else
                            setState({...state, discount: parseFloat(value)});
                        }}
                        onBlur={handleBlur}
                      />
                    </View>
                  </View>
                </View>
              );
            })}
          </View>
        </View>
      )}
    </View>
  );
};

const local_styles = StyleSheet.create({
  sizeContainer: {
    flexDirection: 'column',
    gap: 20,
    paddingTop: 10,
  },
  size: {
    paddingVertical: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
});

export default SizesBlock;
