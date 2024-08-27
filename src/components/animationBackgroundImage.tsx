import React, {ReactNode, useEffect} from 'react';
import {
  Animated,
  Dimensions,
  ImageBackground,
  StyleSheet,
  View,
} from 'react-native';

const AnimationBackgroundImage: React.FC = () => {
  const IMAGES = [
    'https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/eced47a6a02f48638d48ba8fb65bca2a_9366/Graphic_Tee_White_IW3237_21_model.jpg',
    'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/2aa0f105bd3843119388f15bbaf600e5_9366/Adicolor_Neuclassics_Tee_White_JF9139_25_model.jpg',
  ];
  const opacity = new Animated.Value(0);
  const opacity1 = new Animated.Value(1);
  const DURATION = 2000;
  const DELAY = 500;
  useEffect(() => {
    const zeroToOne = Animated.timing(opacity, {
      toValue: 1,
      useNativeDriver: true,
      duration: DURATION,
      delay: DELAY,
    });
    const oneToZero = Animated.timing(opacity, {
      toValue: 0,
      duration: DURATION,
      delay: DELAY,
      useNativeDriver: true,
    });
    Animated.loop(Animated.sequence([zeroToOne, oneToZero])).start();
    const zeroToOne1 = Animated.timing(opacity1, {
      toValue: 0,
      useNativeDriver: true,
      duration: DURATION,
      delay: DELAY,
    });
    const oneToZero1 = Animated.timing(opacity1, {
      toValue: 1,
      duration: DURATION,
      delay: DELAY,
      useNativeDriver: true,
    });
    Animated.loop(Animated.sequence([zeroToOne1, oneToZero1])).start();
  }, [opacity, opacity1]);
  const AnimationBackground = Animated.createAnimatedComponent(ImageBackground);
  const ViewAnimate = Animated.createAnimatedComponent(View);
  return (
    <ViewAnimate>
      <AnimationBackground
        source={{uri: IMAGES[0]}}
        resizeMode={'cover'}
        style={[
          styles.background,
          {
            opacity: opacity,
          },
        ]}
      />
      <AnimationBackground
        source={{uri: IMAGES[1]}}
        resizeMode={'cover'}
        style={[
          styles.background,
          {
            opacity: opacity1,
          },
        ]}
      />
    </ViewAnimate>
  );
};
const {width, height} = Dimensions.get('screen');
const styles = StyleSheet.create({
  background: {
    position: 'absolute',
    width: width,
    height: height,
    top: 0,
    transform: [
      {
        translateX: 0,
      },
      {
        translateY: 0,
      },
    ],
  },
});

export default AnimationBackgroundImage;
