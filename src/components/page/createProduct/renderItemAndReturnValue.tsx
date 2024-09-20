import {ButtonCustom} from 'components';
import {useEffect, useState} from 'react';
import {ColorValue, StyleSheet, Text, View, ViewStyle} from 'react-native';

interface RenderProps {
  letterSpacing?: number;
  borderColor?: string;
  onPress?(value: any): void;
  data: Array<{label: string; value: string}>;
  style?: ViewStyle;
  borderWidth?: number;
  fontSize?: number;
  backgrounColorWhenPress?: string;

  paddingHorizontal?: number;
  flex?: number;
  backgroundColor?: ColorValue;
  isMultiSelect?: boolean;
  disableUnselected?: boolean;
  /**
   * @type {number}
   *@param {number} - you can set default selected  by pasting the specific index of data and it will return that default value to parent. So you can use that value for any purpose.
   * Note: This feature will work in case isDefault is true
   */
  defaultSelectIndex?: number;
  /**
   * @type {number}
   * @param {number}- if true , default value will work. NOTE: This feature will work in case you paste defaultSelectIndex
   */
  isDefualtSelect?: boolean;

  /**
   *
   * @param value -it depends on onPress action, when user press, it will return one data that user press via its props
   */
  getOneSelectData?(value: any): void;
}
const RenderItemAndReturnValue = (props: RenderProps) => {
  const [state, setState] = useState<{
    isSelected: boolean;
    selectedValue: string[];
  }>({isSelected: false, selectedValue: []});
  // check for default selected
  useEffect(() => {
    let _default: any[] = [];
    if (props.isDefualtSelect && props.defaultSelectIndex !== undefined) {
      const defualtData = props.data[props.defaultSelectIndex];
      _default.push(defualtData);
      setState(prev => ({...prev, selectedValue: _default}));
    }
  }, []);
  //check whether data  is selected or not, if selected, return true and false if not.
  const _isSelected = (item: any) => {
    const selected = [...state.selectedValue];
    if (selected.indexOf(item) == -1) {
      return false;
    }
    return true;
  };
  //_______________________________________________________________________________________________
  //handle paste data to parent vai param value
  const handleGetValue = (value: any) => {
    if (props.onPress) {
      if (props.isMultiSelect) props.onPress(value);
      else props.onPress(value[0]);
    }
  };
  // handle user press action and check existing data or not
  const handlePress = (
    value: any,
    index: number,
    callback: (value: any) => void,
  ) => {
    if (value) {
      if (props.getOneSelectData) props.getOneSelectData(value);
      let selectedValue = [...state.selectedValue];
      if (props.isMultiSelect) {
        //if isMutliSelect is true this condition will work. First it check that value is selected or not, if true it will unselected and false , it will push new item to selectedValue
        //__________________________________________________________________________________________
        if (selectedValue.indexOf(value) == -1) {
          selectedValue.push(value);
          setState(prev => ({...prev, selectedValue: selectedValue}));
        } else {
          selectedValue = selectedValue.filter(sv => sv != value);
          setState(prev => ({...prev, selectedValue: selectedValue}));
        }
      } else {
        //check that if value is selected, set it back to empty array, mean that user unselected in case is multiple prop is false
        //________________________________________________
        if (selectedValue.indexOf(value) == -1) {
          selectedValue = [value];
          setState(prev => ({...prev, selectedValue: selectedValue}));
        } else {
          selectedValue = props.disableUnselected ? [value] : [];
          setState(prev => ({...prev, selectedValue: selectedValue}));
        }
      }
      callback(selectedValue);
    }
  };
  return (
    <View style={[local_styles.subCateCon, props.style]}>
      {props.data.map((item, index) => {
        const isSelected = _isSelected(item);

        return (
          <View key={index} style={{flex: props.flex || 0}}>
            <ButtonCustom
              {...props}
              title={item.label.toUpperCase()}
              textColor={isSelected ? '#fff' : '#929292'}
              borderColor={
                isSelected ? '#929292' : props.borderColor || '#EAEAEA'
              }
              backgroundColor={
                isSelected ? props.backgrounColorWhenPress : '#EAEAEA'
              }
              isCenter
              borderWidth={props.borderWidth || 0}
              fontSize={props.fontSize || 12}
              letterSpacing={0 || props.letterSpacing}
              onPress={() => handlePress(item, index, handleGetValue)}
              paddingVertical={0 || props.paddingHorizontal}
            />
          </View>
        );
      })}
    </View>
  );
};
export default RenderItemAndReturnValue;

const local_styles = StyleSheet.create({
  subCateCon: {
    flexDirection: 'row',
    gap: 5,
  },
});
