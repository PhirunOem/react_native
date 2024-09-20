import {StyleSheet, View} from 'react-native';
import {RadioCustom, TextInputCustom} from 'components';
import {memo, useEffect, useMemo, useState} from 'react';
import {CreateProductModel, theme} from '../../../core';
import {allAvailableColors} from '../../../utils';
import ColorLabel from './colorLabel';
import styles from './style';
import {ViewStyle} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {setBooleanValue} from '../../../redux/slice';

interface Props {
  data: Array<{label: string; value: string}>;
  onPress(colorValue: string): void;
  activeId?: string;
  /**
  This function depend on onPress. If user press , it will return id via getId() param
   */
  getId?(id: any): void;
  style?: ViewStyle;
  previousActivedId: Array<string>;
  isAddNewColor?: boolean;
}
const ShowAllColors = (props: Props) => {
  const borderSize = 0.5;
  const borderSizeAfterClick = 4;
  const size = 16;
  const [customColor, setCustomColor] = useState('');

  const dispatch = useDispatch();
  const radioButtons = useMemo(
    () =>
      props.data.map((item, index) => ({
        id: `${index}`,
        label: <ColorLabel label={item.label} colorValue={item.value} />,
        value: item.value,
        containerStyle: {gap: 5},
        color: '#fff',
        borderColor:
          props.activeId == `${index}` ? theme.colors.background : 'black',
        borderSize:
          props.activeId == `${index}` ? borderSizeAfterClick : borderSize,
        size: size,
        // disabled: props.previousActivedId[index] == `${index}`,
      })),
    [props.activeId, props.previousActivedId],
  );

  // useEffect(() => {
  //   if (props.isAddNewColor) {
  //     console.log(
  //       'Re-render triggered or side effect logic ::::::::::;',
  //       props.isAddNewColor,
  //     );
  //   }
  // }, [props.isAddNewColor]);
  async function getData(id: string) {
    //get id from use input and filter all radio button return only id which equal to id prop
    const value = radioButtons.filter(rb => rb.id == id);
    return value;
  }
  const handleSelectAndReturnToParent = async (id: string) => {
    if (id) {
      // dispatch(setBooleanValue({type: 'ADDNEWCOLOR', booleanValue: false}));
      try {
        const colorValue = await getData(id);
        const _isValidArray =
          Array.isArray(colorValue) && colorValue.length != 0;
        if (_isValidArray && props.onPress) props.onPress(colorValue[0].value);
        else if (props.onPress) props.onPress(customColor);
      } finally {
        if (props.getId) props.getId(id);
      }
    }
  };
  return (
    <View
      style={[
        props.style,
        {backgroundColor: '#F9F9F9', paddingVertical: 18, paddingLeft: 8},
      ]}>
      <View>
        <RadioCustom
          dataRender={radioButtons}
          onPress={handleSelectAndReturnToParent}
          containerStyle={local_styles.container}
        />
      </View>
      <View style={{paddingLeft: 10, width: '70%', paddingTop: 8}}>
        <TextInputCustom
          placeholder="Custom color"
          inputContainerStyle={[styles.inputContainerStyle, {height: 30}]}
          containerStyle={{paddingHorizontal: 0}}
          inputStyle={{color: 'black', fontSize: 12}}
          renderErrorMessage={false}
          labelStyle={{display: 'none'}}
          onChangeText={value => setCustomColor(value)}
          onBlur={() => handleSelectAndReturnToParent(customColor)}
        />
      </View>
    </View>
  );
};
const local_styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 8,
    flexWrap: 'wrap',
  },
});
export default ShowAllColors;
