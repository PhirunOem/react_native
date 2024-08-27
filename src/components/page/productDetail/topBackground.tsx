import React, {useEffect, useRef} from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  ScrollView,
  View,
} from 'react-native';
import LeftStyle from './leftStyle';
import {useComplexStateWithReducer} from '../../../hooks';
import {Text} from 'react-native-animatable';

interface Props {
  focusIndex: number;
  data: any;
}
const TopBackground: React.FC<Props> = ({focusIndex = 0, data = []}) => {
  const [states, setProperty] = useComplexStateWithReducer({
    focusIndex: 0,
    data: [],
  });

  const {width, height} = Dimensions.get('screen');
  const scrollRef = useRef<ScrollView>(null);
  useEffect(() => {
    setProperty('data', data);
    setProperty('focusIndex', focusIndex);
    scrollRef.current?.scrollTo({y: 0, animated: false});
  }, [data, focusIndex]);
  return (
    <View>
      {states.data[states.focusIndex] == undefined ? (
        <Text>{'Loading ...'}</Text>
      ) : (
        <View
          style={{
            width: width,
            height: height / 3 + 50,
            position: 'relative',
          }}>
          <View
            style={{
              position: 'absolute',
              height: 100,
              width: 10,
              top: height / 3 - 150,
              right: 20,
              zIndex: 1,
            }}>
            <LeftStyle />
          </View>
          <View
            style={{
              width: '100%',
              height: '100%',
              position: 'absolute',
              zIndex: 0,
            }}>
            <ScrollView
              ref={scrollRef}
              nestedScrollEnabled
              showsVerticalScrollIndicator={false}>
              {states.data[states.focusIndex].map((item: any, index: any) => {
                const resolveImg = Image.resolveAssetSource(item).uri;
                return (
                  <ImageBackground
                    key={index}
                    source={{uri: resolveImg}}
                    resizeMode="cover"
                    children={
                      <View
                        style={{
                          width: width,
                          height: height / 3 + 50,
                        }}></View>
                    }
                  />
                );
              })}
            </ScrollView>
          </View>
        </View>
      )}
    </View>
  );
};

export default React.memo(TopBackground);
