import {ImageBackground, Modal, StatusBar, View} from 'react-native';
import {Text} from 'react-native-elements';
import React, {useState, useEffect, useRef, useCallback} from 'react';
import {Animated, Image, Easing} from 'react-native';
import {TouchableOpacity, StyleSheet} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {BackgroundImage} from '@rneui/base';

export default function FavoritePage() {
  return (
    <View>
      <Modal visible={false} statusBarTranslucent={true}>
        <View style={{height: '100%', backgroundColor: 'red'}}>
          <MicAnimation />
        </View>
      </Modal>
    </View>
  );
}

const IMAGES = [
  // add your images here
  'https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/eced47a6a02f48638d48ba8fb65bca2a_9366/Graphic_Tee_White_IW3237_21_model.jpg',
  'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/9b6009017a9d4b71a5f53bb3fdbfdd96_9366/Adicolor_SST_Track_Top_Kids_Pink_IY7451_21_model.jpg',
  'https://assets.adidas.com/images/w_500,h_500,f_auto,q_auto,fl_lossy,c_fill,g_auto/f6da502e5c094b40b2df6c1b7097e594_9366/ALL_SZN_Snack_Attack_French_Terry_Shorts_Green_IW6677_21_model.jpg',
];

interface isProps {
  isAnimate: boolean;
}
const MicAnimation = () => {
  const opacity = new Animated.Value(0);
  const opacity1 = new Animated.Value(1);
  useEffect(() => {
    const zeroToOne = Animated.timing(opacity, {
      toValue: 1,
      useNativeDriver: true,
      duration: 1000,
      delay: 300,
    });
    const oneToZero = Animated.timing(opacity, {
      toValue: 0,
      duration: 1000,
      delay: 300,
      useNativeDriver: true,
    });
    Animated.loop(Animated.sequence([zeroToOne, oneToZero])).start();
    const zeroToOne1 = Animated.timing(opacity1, {
      toValue: 0,
      useNativeDriver: true,
      duration: 1000,
      delay: 300,
    });
    const oneToZero1 = Animated.timing(opacity1, {
      toValue: 1,
      duration: 1000,
      delay: 300,
      useNativeDriver: true,
    });
    Animated.loop(Animated.sequence([zeroToOne1, oneToZero1])).start();
  }, [opacity, opacity1]);
  return (
    <Animated.Text style={{position: 'relative'}}>
      <Animated.View
        children={
          <ImageBackground source={{uri: IMAGES[0]}} resizeMode="cover">
            <Text></Text>
          </ImageBackground>
        }
        style={{
          width: 200,
          height: 300,
          backgroundColor: 'orange',
          opacity: opacity,
        }}
      />{' '}
      <Animated.View
        // source={{uri: IMAGES[1]}}
        children={<Text style={{color: 'white'}}>Hi</Text>}
        style={{
          width: 300,
          height: 200,
          backgroundColor: 'black',

          opacity: opacity1,
        }}
      />
    </Animated.Text>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    // flex: 1,
    width: '100%',
    height: '100%',
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: '#7b1b1b',
  },
  card: {
    width: '100%',
    backgroundColor: 'white',
    padding: 20,
    // borderRadius: 10,
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 5,
    alignItems: 'center',
    height: '100%',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'green',
  },
  paragraph: {
    fontSize: 14,
    textAlign: 'center',
    paddingHorizontal: 20,
    color: 'gray',
  },
  button: {
    marginTop: 20,
    backgroundColor: 'green',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 16,
    paddingVertical: 10,
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
});
