import {Dimensions, ScrollView, StyleSheet, View} from 'react-native';
import {Text} from 'react-native-elements';
import React, {useEffect, useState} from 'react';
import {Image} from 'react-native';
import {Button} from '@rneui/base';
import {DropDownCustom, TextInputCustom} from '../../components';
import {useComplexStateWithReducer} from '../../hooks';
import {
  subCategories1,
  allAvailableColors,
  allAvailableSizes,
} from '../../utils';
import {UploadImagesFromMobile} from '../../core';
import {UploadImagesToFirebaseAndGetUrls} from '../../firebase';

import {create_product_route, retrieve_product_route} from '../../utils';
export default function FavoritePage() {
  const [uploadData, setUploadData] = useState<any>({
    mainCate: 'Men',
    subCate1: '',
    subCate2: '',
    description: '',
    title: '',
    allColors: [],
  });
  useEffect(() => {});
  const [states, setState] = useComplexStateWithReducer({});
  const [sizeData, setSizeData] = useState({sizeValue: 0, price: 0});
  const [imageUri, setImageUri] = useState(Array<any>);
  const [isUploadedImage, setIsUploadImage] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [colorData, setColorData] = useState({
    colorName: '',
    imageURLs: [],
    sizes: [
      {
        sizeValue: 0,
        price: 0,
      },
    ],
  });

  const handleUploadImage = async () => {
    // const result = await UploadImagesFromMobile({
    //   mediaType: 'photo',
    //   quality: 1,
    //   selectionLimit: 10,
    // });
    // await UploadImagesToFirebaseAndGetUrls([
    //   {
    //     fileName: '1000001203.jpg',
    //     url: 'file:///data/user/0/com.tostenh/cache/rn_image_picker_lib_temp_bbbfba86-4c0c-4fd1-9e66-2acc5174ae0a.jpg',
    //   },
    //   {
    //     fileName: '1000001204.jpg',
    //     url: 'file:///data/user/0/com.tostenh/cache/rn_image_picker_lib_temp_593e7f5d-2c37-4669-bfe4-4aac88104704.jpg',
    //   },
    //   {
    //     fileName: '1000001205.jpg',
    //     url: 'file:///data/user/0/com.tostenh/cache/rn_image_picker_lib_temp_7d6627a4-d657-48cb-a5fa-8a429eaa8b68.jpg',
    //   },
    //   {
    //     fileName: '1000001206.jpg',
    //     url: 'file:///data/user/0/com.tostenh/cache/rn_image_picker_lib_temp_d5152293-70b2-45d3-9ccc-5e026787d733.jpg',
    //   },
    //   {
    //     fileName: '1000001202.jpg',
    //     url: 'file:///data/user/0/com.tostenh/cache/rn_image_picker_lib_temp_0c330b51-5388-41fc-951e-00e94a6fafff.jpg',
    //   },
    // ])
    //   .then((uri: any) => {
    //     console.log('::::::::::: uri :::::::::::::::', uri);
    //     setColorData({...colorData, imageURLs: uri as any});
    //   })
    //   .catch((error: any) => console.log('::::::::: error :::::::::::', error));
    // const urls = await UploadImagesToFirebaseAndGetUrls(uri);
  };
  const handleInsertData = async (data: any) => {
    // console.log('::::::::::: upload data :::::::::::', uploadData);
    // const result = await fetch(`${create_product_route}`, {
    //   method: 'POST',
    //   headers: {'Content-Type': 'application/json'},
    //   body: JSON.stringify(uploadData),
    // });
    // console.log('::::::::: result ::::::::::', result);
  };

  //in future this function will acts like upload data to store
  const handleAddNewColor = (data: any) => {
    setUploadData({
      ...uploadData,
      allColors: [...uploadData.allColors, data],
    });
  };
  const handleAddNewSize = async (size: number, price: number) => {
    const sizeData = {sizeValue: size, price: price};
    if (colorData.sizes[0].price == 0)
      setColorData({
        ...colorData,
        sizes: [sizeData],
      });
    //delete default value we set and get a new one
    else if (colorData.sizes[sizes.length - 1].sizeValue == size)
      setColorData({
        ...colorData,
      });
    //we don't set redundancy value or repeated value
    else setColorData({...colorData, sizes: [...colorData.sizes, sizeData]}); //add more value to array
  };
  const width = Dimensions.get('screen').width;

  return (
    <View
      style={{
        paddingLeft: 20,
        paddingRight: 20,
        flexDirection: 'column',
        gap: 5,
        width: width,
      }}>
      <Text h4>{'Insert data'}</Text>
      <View style={styles.flexInputField}>
        <View style={{flex: 1}}>
          {/* <DropDownCustom
            data={mianCategories}
            placeholder="Category"
            zIndex={4}
            onChangeValue={value =>
              setUploadData({...uploadData, mainCate: value})
            }
          /> */}
        </View>
        <View style={{flex: 1}}>
          <DropDownCustom
            data={subCategories1}
            placeholder="Subcategory1"
            zIndex={3}
            onChangeValue={value =>
              setUploadData({...uploadData, subCate1: value})
            }
          />
        </View>
      </View>
      <View style={styles.flexInputField}>
        <View style={{flex: 1}}>
          {/* <DropDownCustom
            data={subCategories2}
            placeholder="Subcategory2"
            onChangeValue={value =>
              setUploadData({...uploadData, subCate2: value})
            }
            zIndex={2}
          /> */}
        </View>
        <View style={{flex: 1}}>
          <TextInputCustom
            placeholder="Description"
            keyboardType="default"
            inputStyle={{color: 'black'}}
            inputContainerStyle={{height: 30}}
            placeholderTextColor={'black'}
            onChangeText={value => {
              setUploadData({...uploadData, description: value});
            }}
          />
        </View>
      </View>
      <TextInputCustom
        placeholder="Title"
        keyboardType="default"
        inputStyle={{color: 'black'}}
        inputContainerStyle={{height: 30}}
        placeholderTextColor={'black'}
        onChangeText={value => {
          setUploadData({...uploadData, title: value});
        }}
      />
      <DropDownCustom
        data={allAvailableColors}
        placeholder="Color"
        onChangeValue={value => setColorData({...colorData, colorName: value})}
        zIndex={2}
      />
      <View style={{marginTop: 5}}>
        <Button title={'Click to upload images'} onPress={handleUploadImage} />
      </View>
      {isUploadedImage == true ? (
        <View style={{paddingVertical: 10}}>
          <ScrollView
            horizontal
            contentContainerStyle={{gap: 1, paddingVertical: 1}}>
            {imageUri.map((item, index) => (
              <Image
                source={{uri: item.uri}}
                width={30}
                height={30}
                key={index}
              />
            ))}
          </ScrollView>
        </View>
      ) : (
        <Text>{'No image uploaded !!!'}</Text>
      )}
      <DropDownCustom
        data={allAvailableSizes}
        placeholder="Available sizes"
        onChangeValue={value => setSizeData({...sizeData, sizeValue: value})}
        zIndex={1}
      />
      <TextInputCustom
        placeholder="Price"
        keyboardType="numeric"
        inputStyle={{color: 'black'}}
        inputContainerStyle={{height: 30}}
        placeholderTextColor={'black'}
        onChangeText={value => {
          setSizeData({...sizeData, price: parseFloat(value)});
        }}
      />
      <Button
        title={'Add to size collection'}
        onPress={() => handleAddNewSize(sizeData.sizeValue, sizeData.price)}
        type="outline"
        titleStyle={{color: 'white'}}
      />

      <Button
        title={'Upload to color collection'}
        onPress={() => handleAddNewColor(colorData)}
        color={'secondary'}
      />
      <Button
        title={'Upload to store'}
        onPress={() => handleInsertData(uploadData)}
        color={'success'}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  flexInputField: {
    flexDirection: 'row',
    gap: 5,
  },
});
function sizes(
  arrayLength: number,
): {sizeValue: number; price: Float32Array; imageURLs: String[]}[] {
  throw new Error('Function not implemented.');
}
