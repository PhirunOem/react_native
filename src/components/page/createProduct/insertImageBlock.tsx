import {ButtonCustom, IconCustom} from 'components';
import {theme, UploadImagesFromMobile} from '../../../core';
import {memo, useEffect, useState} from 'react';
import {Image, ImageBackground, View} from 'react-native';
import {Text} from 'react-native-animatable';

interface Props {
  /**
   *
   * @param url - It is a function that depend on add image and delete image action, mean that when user add image, all image uris will return to parent via its props and deleted image do so.
   */
  getImageUrl?(url: any): void;
  disable?: boolean;
  isAddNewColor?: boolean;
}

const InsertImagesBlock = (props: Props) => {
  const [imageUri, setImageUri] = useState<Array<any>>([]);
  //handle add new color by trig the prop
  useEffect(() => {
    // if (props.isAddNewColor && imageUri.length != 0) setImageUri([]);
    console.log('::::::::::::: image uri :::::::::::', imageUri);

    handleReturnValueToParent(imageUri);
  }, [imageUri]);

  function handleReturnValueToParent(images: any) {
    console.log('::::::::::: call return to parent :::::::::::;');

    //call getImageUrl prop and return latest images to parent
    if (props.getImageUrl) props.getImageUrl(images);
  }

  return (
    <View>
      {imageUri.length == 0 ? (
        <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
          <ButtonCustom
            disable={props.disable}
            title={'upload images'.toUpperCase()}
            backgroundColor={
              !props.disable ? theme.colors.secondary : theme.colors.disable
            }
            textColor={'white'}
            fontSize={12}
            paddingVertical={8}
            paddingHorizontal={10}
            isCenter
            onPress={async () => {
              const uri = await UploadImagesFromMobile({
                mediaType: 'photo',
                quality: 0.5,
                selectionLimit: 5,
              });
              if (uri) {
                setImageUri(prev => [...prev, ...uri]);
              }
            }}
          />
        </View>
      ) : (
        <View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
            }}>
            <Text>{imageUri.length} images</Text>
            <View>
              <ButtonCustom
                title={'add more'.toUpperCase()}
                backgroundColor={theme.colors.secondary}
                textColor={'white'}
                fontSize={12}
                paddingVertical={8}
                paddingHorizontal={10}
                isCenter
                onPress={async () => {
                  const uri = await UploadImagesFromMobile({
                    mediaType: 'photo',
                    quality: 0.5,
                    selectionLimit: 10,
                  });
                  if (uri) {
                    // below code is the concept we use to merg two array and check if fileName has the same value, we pick only an old
                    /// one or new one, not both. Using this method , in order to make sure user can't add new doublicate image
                    const combined = [...imageUri, ...uri];
                    const merged = new Map(
                      combined.map(item => [item.fileName, item]),
                    );
                    const merge_arr = Array.from(merged.values());
                    if (merge_arr) {
                      setImageUri(() => [...merge_arr]);
                      handleReturnValueToParent(imageUri);
                    }
                  }
                }}
              />
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              gap: 10,
              paddingTop: 10,
            }}>
            {imageUri.length != 0 &&
              imageUri.map((item: any, index: number) => {
                return (
                  <ImageBackground
                    key={index}
                    source={{uri: item.url}}
                    children={
                      <View
                        style={{
                          width: 80,
                          height: 70,
                          justifyContent: 'flex-start',
                          alignItems: 'flex-end',
                          top: -12,
                          right: -12,
                        }}>
                        <IconCustom
                          iconName="close-sharp"
                          iconSize={20}
                          iconColor="red"
                          onClick={() => {
                            let _arr = [...imageUri];
                            _arr.splice(index, 1);
                            setImageUri(prev => [..._arr]);
                            handleReturnValueToParent(_arr);
                          }}
                        />
                      </View>
                    }
                  />
                );
              })}
          </View>
        </View>
      )}
    </View>
  );
};

export default memo(InsertImagesBlock);
