import {
  launchImageLibrary,
  MediaType,
  PhotoQuality,
} from 'react-native-image-picker';

interface Props {
  mediaType: MediaType;
  quality: PhotoQuality;
  selectionLimit: number;
}
const UploadImagesFromMobile = async (props: Props) => {
  const result = await launchImageLibrary({
    mediaType: props.mediaType || 'photo',
    quality: props.quality || 1,
    selectionLimit: props.selectionLimit || 5,
    includeExtra: true,
    presentationStyle: 'fullScreen',
  });
  console.log(':::::::::: called ::::::::::::;');
  if (result.didCancel) {
    console.log(
      '::::::::::::::::::::: User cancel upload ::::::::::::::::::::',
    );
    return null;
  } else if (result.errorMessage) {
    console.log(
      '::::::::::::::::::::: Error ::::::::::::::::::::',
      result.errorMessage,
    );
    return null;
  } else {
    // below code is handle return to user only fileName and uri property
    const uri = result.assets!;
    const setData = uri.map(async item => {
      return {fileName: item.fileName, url: item.uri};
    });
    // Promise.all : acts like array.push, mean that it will wait until map is completed and push all object return into one anonymous array
    const all_uri = await Promise.all(setData);
    return all_uri;
  }
};

export default UploadImagesFromMobile;
