import {ModalCustomWithAction} from '../../../components';
import React, {useLayoutEffect, useRef} from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {allShoes} from '../../../utils';
import {useComplexStateWithReducer} from '../../../hooks';
import ShowAllColorsSection from './showAllColorsSection';
import SmallDecription from './smallDescription';
import {Divider} from '@rneui/base';
import Sizes from './size';
import Colors from './color';
import BigDescripion from './bigDescripion';
import RatingAndReview from './ratingAndReview';
import BottomDisplayProduct from './bottomDisplayProduct';
import TopBackground from './topBackground';
import {useDispatch, useSelector} from 'react-redux';
import {setBooleanValue} from '../../../redux/slice';
import AddToCartDetail from './addToCartDetail';
const {width, height} = Dimensions.get('screen');

const ProductDetailPage = ({navigation, route}: any) => {
  //ADD TO CARD SECTION HADNLING//
  const isAddToCart = useSelector((state: any) => state.action.isAddToCart);
  const dispatch = useDispatch();
  const handleCloseAddToCart = () => {
    dispatch(setBooleanValue({type: 'ADDTOCART', booleanValue: false}));
  };
  //________________________________________________________//
  const allColors: any[][] = [];
  const allKeysColors: string[] = [];
  const index = route.params == undefined ? 1 : route.params.productId;
  const scrollRef = useRef<ScrollView>(null);
  const data = allShoes[index];

  const [states, setProperty] = useComplexStateWithReducer({
    allColors: [],
    allKeysColors: [],
    focusIndex: 0,
    dataAddToCart: {
      image: null,
      description: 'Example',
      color: 'black',
      size: 19,
      price: 20,
    },
  });
  useLayoutEffect(() => {
    async function setColors() {
      const allColorsData = data.imagesByColors;
      const allKeys = Object.keys(allColorsData);
      allKeys.map(item => {
        const key = item as keyof typeof allColorsData;
        const dataOfEachColor = allColorsData[key];
        if (dataOfEachColor.length != 0) {
          allColors.push(dataOfEachColor);
          allKeysColors.push(key);
        }
      });
      setProperty('allColors', allColors);
      setProperty('allKeysColors', allKeysColors);
      const dataAddToCart = states.dataAddToCart;
      (dataAddToCart.description = data.description),
        (dataAddToCart.price = data.price);
      dataAddToCart.image = allColors[0][0];
      setProperty('dataAddToCart', {...dataAddToCart});
    }
    setColors();
  }, [data, index]);
  //this function call when we call onpress in child and child will return focusIndex via direct param
  const GetDataFromChild = (focusIndex: any) => {
    setProperty('focusIndex', focusIndex);
    scrollRef.current?.scrollTo({y: 0, animated: false});
    const dataAddToCart = states.dataAddToCart;
    (dataAddToCart.color = states.allKeysColors[focusIndex]),
      (dataAddToCart.image = states.allColors[focusIndex][0]),
      setProperty('dataAddToCart', {...dataAddToCart});
  };
  //get size from child via param size
  const handleGetSize = (size: number) => {
    const dataAddToCart = states.dataAddToCart;
    dataAddToCart.size = size;
    setProperty('dataAddToCart', {...dataAddToCart});
    console.log(states.dataAddToCart);
  };
  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      nestedScrollEnabled>
      <View style={styles.topSection}>
        {states.allColors.lenght == 0 ||
        states.allColors == undefined ||
        states.focusIndex == undefined ? (
          <Text>{'Loading...'}</Text>
        ) : (
          <TopBackground
            data={states.allColors}
            focusIndex={states.focusIndex}
          />
        )}
      </View>
      <View style={styles.showColorsSection}>
        <ShowAllColorsSection
          data={states.allColors}
          onPress={GetDataFromChild}
          focusIndex={states.focusIndex}
        />
      </View>
      <View>
        <View style={styles.bottomSection}>
          <SmallDecription />
        </View>
      </View>
      <Divider width={1} style={{paddingVertical: 10}} />
      <View style={[styles.bottomSection, {paddingTop: 15}]}>
        <Sizes clickSize={handleGetSize} />
      </View>
      <Divider width={1} style={{paddingVertical: 10}} />
      <View style={[styles.bottomSection, {paddingTop: 15}]}>
        <Colors data={states.allKeysColors} />
      </View>
      <Divider width={1} style={{paddingVertical: 10}} />
      <View style={[styles.bottomSection, {paddingRight: 20}]}>
        <BigDescripion />
      </View>
      <View style={[styles.bottomSection, {paddingRight: 20}]}>
        <RatingAndReview />
      </View>
      <View style={[styles.bottomSection, {paddingBottom: 20}]}>
        <BottomDisplayProduct />
      </View>
      <View>
        <ModalCustomWithAction
          isVisible={isAddToCart}
          title="added to bag"
          buttonTitle="View bag"
          iconName="close-outline"
          isBottomModal
          isHoverAndChagneBackgroundBotton={true}
          topAction={handleCloseAddToCart}
          bottomAction={() => {
            console.log('::: bottom action ::');
          }}>
          <View>
            <AddToCartDetail data={states.dataAddToCart} />
          </View>
        </ModalCustomWithAction>
      </View>
    </ScrollView>
  );
};
export default React.memo(ProductDetailPage);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingBottom: 20,
  },
  topSection: {
    // flex: 1,
    width: '100%',
    height: height / 3 + 50,
  },
  showColorsSection: {
    width: '100%',
    top: 1,
    // flex: 1,
  },
  bottomSection: {
    paddingLeft: 30,
    paddingTop: 20,
  },
});
