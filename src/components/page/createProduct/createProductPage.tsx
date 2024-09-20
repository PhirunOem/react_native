import {ButtonCustom, TextInputCustom} from '../../../components';
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  processColor,
} from 'react-native';
import styles from './style';
import DetailBlock from './detailBlock';
import CategoryBlock from './categoryBlock';
import ColorAndImageBlock from './colorAndImageBlock';
import {CreateProductModel, theme} from '../../../core';
import {useDispatch, useSelector} from 'react-redux';
import {setBooleanValue} from '../../../redux/slice';
import ModalWhenSave from './modalWhenSave';
import {isEmpty} from 'validator';
import {create_product_route} from '../../../utils';
import {UploadImagesToFirebaseAndGetUrls} from '../../../firebase';
import {useProductReducer} from './productReducer';
const CreateProductPage = ({navigation}: any) => {
  const isAddNewColor = useSelector((state: any) => state.action.isAddNewColor);
  const dispatch = useDispatch();
  const handlAddNewColor = () => {
    dispatch(setBooleanValue({type: 'ADDNEWCOLOR', booleanValue: true}));
  };
  const [dataUpload, setDataUpload] = useState<CreateProductModel>({
    // Initial all properties of create product model to ensure that data is clean and ready to insert to database
    productName: '',
    title: '',
    description: '',
    discount: 0,
    mainCategory: '',
    subCategory1: '',
    subCategory2: '',
    colors: [
      {
        colorName: '',
        colorCustom: '',
        imageURLs: [],
        sizes: [{sizeValue: 0, price: 0, discount: 0}],
      },
    ],
  });
  const [state, setState] = useState<{
    productName: string;
    isSave: boolean;
    isReadyToUpload: boolean;
  }>({
    productName: '',
    isSave: false,
    isReadyToUpload: false,
  });
  //Track and run when dataUpload changed
  useEffect(() => {
    if (state.isSave) {
      handleInsertData(dataUpload)
        .then(result => {
          console.log('result ::::::::::::::::: ', JSON.stringify(result));
        })
        .finally(() => {
          setState(prev => ({...prev, isSave: false}));
        });
    }
  }, [dataUpload, state.isReadyToUpload]);

  const handleUploadToPreview = (data: Partial<CreateProductModel>) => {
    setDataUpload(prev => ({...prev, ...data}));
  };

  const handleInsertData = async (data: any) => {
    const result = await fetch(`${create_product_route}`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data),
    });
    const finalResult = await result.json();
    return finalResult;
  };
  const handleSaveToDataBase = async () => {
    setState(prev => ({...prev, isSave: true}));
    try {
      await UploadImagesToFirebaseAndGetUrls(dataUpload.colors[0].imageURLs)
        .then(result => {
          if (result !== null) {
            setDataUpload(prev => ({
              ...prev,
              colors: prev.colors.map((item, index) =>
                //check index==0 in case our color has only one color, if has multiple we do different method in future
                index == 0 ? {...item, imageURLs: result!} : item,
              ),
            }));
          }
        })
        .finally(async () => {
          setState(prev => ({...prev, isReadyToUpload: true}));
        });
    } catch (err: any) {
      console.log(':::::::: error :::::::::', err);
    }
  };
  const [productState, productDispatch] = useProductReducer();
  // :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  const checkValidData =
    isEmpty(dataUpload.productName) ||
    isEmpty(dataUpload.title) ||
    isEmpty(dataUpload.mainCategory) ||
    isEmpty(dataUpload.subCategory1) ||
    isEmpty(dataUpload.subCategory2) ||
    dataUpload.colors[0].sizes.length == 0 ||
    dataUpload.colors[0].imageURLs.length == 0;

  return (
    <KeyboardAvoidingView
      behavior="height"
      style={[styles.container]}
      keyboardVerticalOffset={2}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardDismissMode={'on-drag'}>
        <View style={styles.subContainer}>
          <View>
            <Text style={{fontSize: 18, fontWeight: '400', color: 'black'}}>
              Add products {productState.productName}
            </Text>
          </View>
          <View>
            <TextInputCustom
              placeholder="Name of product"
              inputContainerStyle={[styles.inputContainerStyle, {height: 30}]}
              label="aaa"
              containerStyle={{paddingHorizontal: 0}}
              inputStyle={{color: 'black', fontSize: 12}}
              renderErrorMessage={false}
              labelStyle={{display: 'none'}}
              value={state.productName}
              onChangeText={(value: any) => {
                setState(prev => ({...prev, productName: value}));
              }}
              onBlur={() => {
                productDispatch({
                  type: 'setProductName',
                  payload: {productName: state.productName},
                });
              }}
            />
          </View>
          <View>
            <DetailBlock
              // onReturnValue={handleUploadToPreview}
              dispatch={productDispatch}
              state={productState}
            />
          </View>
          <View>
            <CategoryBlock onReturnValue={handleUploadToPreview} />
          </View>
          <View>
            <ColorAndImageBlock onReturnValue={handleUploadToPreview} />
          </View>
          <View
            style={{
              flexDirection: 'row',
              gap: 5,
            }}>
            {/* ::::::::::::::::::::::::::::::::::::::: Bottom Action block :::::::::::::::::::::::::::::::::*/}
            {/* <View style={{flex: 1}}>
              <ButtonCustom
                disable={true}
                title={'add NEW colors'.toUpperCase()}
                backgroundColor={theme.colors.secondary}
                textColor={'white'}
                fontSize={12}
                paddingVertical={8}
                paddingHorizontal={10}
                isCenter
                onPress={handlAddNewColor}
              />
            </View> */}
            <View style={{flex: 1}}>
              <ButtonCustom
                // disable={checkValidData}
                title={'save'.toUpperCase()}
                backgroundColor={
                  checkValidData
                    ? theme.colors.disable
                    : theme.colors.background
                }
                textColor={'white'}
                fontSize={12}
                paddingVertical={8}
                paddingHorizontal={10}
                isCenter
                onPress={handleSaveToDataBase}
              />
            </View>
          </View>
          <ModalWhenSave isVisible={state.isSave} />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
export default CreateProductPage;
