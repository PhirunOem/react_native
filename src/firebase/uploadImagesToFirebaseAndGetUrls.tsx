import storage from '@react-native-firebase/storage';

interface UriProps {
  fileName: string;
  url: string;
}
const UploadImagesToFirebaseAndGetUrls = async (imageUri: Array<UriProps>) => {
  if (!imageUri) {
    return null;
  }
  try {
    if (imageUri) {
      const promises = imageUri.map(async (image: any, index: any) => {
        const reference = storage().ref(`${image.fileName}`);
        const fileName = `${image.fileName}`;
        const task = reference.putFile(image.url);
        await task;
        const url = await reference.getDownloadURL();
        return {fileName, url};
      });
      const uploadedImages = await Promise.all(promises);
      return uploadedImages;
    }
  } catch (error) {
    console.log('::::::::::: error ::::::::::::', error);
    return null;
  }
};

export default UploadImagesToFirebaseAndGetUrls;
