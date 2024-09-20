import {View} from 'react-native';
import styles from './style';
import {Text} from 'react-native-animatable';
import {Divider} from '@rneui/base';
import {TextInputCustom} from '../../../components';
import React, {useState} from 'react';
import {CreateProductModel} from '../../../core';
interface Props {
  state: any;
  errorText?: string;
  isError?: boolean;
  dispatch?: any;
}
type ActionTypes = 'setTitle' | 'setDiscount' | 'setDescription';
const DetailBlock = (props: Props) => {
  let detail = {title: '', description: '', discount: 0};
  const handleChange = (actionType: ActionTypes) => {
    switch (actionType) {
      case 'setTitle':
        props.dispatch({
          type: 'setProductName',
          payload: detail.title,
        });
        break;
      case 'setDiscount':
        props.dispatch({
          type: 'setDiscount',
          payload: detail.discount,
        });
        break;
      case 'setDescription':
        props.dispatch({
          type: 'setProductName',
          payload: detail.description,
        });
        break;
      default:
        console.log(':::: unknown action ::::');
    }
  };
  return (
    <View style={styles.detailBlock}>
      <View>
        <Text>Details</Text>
      </View>
      <View>
        <Divider />
      </View>
      <View>
        <TextInputCustom
          label="Title"
          inputContainerStyle={[styles.inputContainerStyle, {height: 30}]}
          containerStyle={{paddingHorizontal: 0}}
          inputStyle={{color: 'black', fontSize: 12}}
          labelStyle={styles.labelStyle}
          renderErrorMessage={false}
          onChangeText={(value: string) => {
            detail.title = value;
          }}
          onBlur={() => {
            handleChange('setTitle');
          }}
        />
      </View>
      <View>
        <TextInputCustom
          label="Discount"
          inputContainerStyle={[styles.inputContainerStyle, {height: 30}]}
          containerStyle={{paddingHorizontal: 0}}
          inputStyle={{color: 'black', fontSize: 12}}
          keyboardType="numeric"
          labelStyle={styles.labelStyle}
          renderErrorMessage={false}
          onChangeText={(value: string) => {
            detail.discount = parseFloat(value);
          }}
          onBlur={() => {
            handleChange('setDiscount');
          }}
        />
      </View>
      <View>
        <TextInputCustom
          multiline
          label="Descriptions"
          inputContainerStyle={styles.inputContainerStyle}
          containerStyle={{paddingHorizontal: 0}}
          inputStyle={{color: 'black', fontSize: 12}}
          labelStyle={styles.labelStyle}
          onChangeText={(value: string) => {
            detail.description = value;
          }}
          onBlur={() => {
            handleChange('setDescription');
          }}
        />
      </View>
    </View>
  );
};
export default DetailBlock;
