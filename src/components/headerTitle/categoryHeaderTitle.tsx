import {StyleSheet, Text, View, StatusBar} from 'react-native';
import {useDispatch} from 'react-redux';
import {setBooleanValue} from '../../redux/slice';
import React, {useEffect} from 'react';
import {IconCustom} from '../../components';
import {checkValidKeyInObject} from '../../core';
import {useComplexStateWithReducer} from '../../hooks';

const CategoryHeaderTitle = (props: any) => {
  const dispatch = useDispatch();
  const [state, setProperty] = useComplexStateWithReducer({
    screen: undefined,
    categoryType: undefined,
    productType: undefined,
  });
  const params = props.route;
  const navigation = props;
  useEffect(() => {
    if (params !== undefined) {
      const validScreen = checkValidKeyInObject(params, 'screen');
      const validCategoryType = checkValidKeyInObject(
        params.params,
        'categoryType',
      );
      const validProductType = checkValidKeyInObject(
        params.params,
        'productType',
      );
      if (validScreen == true) setProperty('screen', params.screen);
      if (validCategoryType == true)
        setProperty('categoryType', params.params.categoryType);
      if (validProductType == true)
        setProperty('productType', params.params.productType);
    }
  }, [params, state.screen]);

  const ClickAddToCart = () => {
    dispatch(setBooleanValue({type: 'ADDTOCART', booleanValue: true}));
  };
  //back to previous screen
  const OnBack = () => {
    if (navigation.canGoBack()) {
      navigation.navigate('Categories', {
        screen: 'Category',
      });
    }
  };
  const OnBackAction = () => {
    if (navigation.canGoBack()) {
      if (state.screen == 'ListProductOfType') {
        navigation.navigate('Categories', {
          screen: 'ListTypeOfProductType',
          params: {
            categoryType: state.categoryType,
            productType: state.productType,
          },
        });
      }
      if (state.screen == 'Detail') {
        navigation.navigate('Categories', {
          screen: 'ListProductOfType',
          params: {
            categoryType: state.categoryType,
            productType: state.productType,
          },
        });
      }
    }
  };
  return (
    <View>
      {state.screen !== undefined && state.screen == 'ListTypeOfProductType' ? (
        <ListTypeProductHeader
          productType={
            state.productType == undefined ? 'NONE' : state.productType
          }
          onBack={OnBack}
        />
      ) : state.screen !== undefined && state.screen == 'ListProductOfType' ? (
        <ListProductOfTypeHeader
          title={state.categoryType + ' • ' + state.productType}
          subTitle={'13 RESULTS'}
          onBack={OnBackAction}
          rightIconName="search"
        />
      ) : state.screen !== undefined && state.screen == 'Detail' ? (
        <ListProductOfTypeHeader
          title={state.productType}
          subTitle={'$100.00'}
          rightIconName="cart-outline"
          onBack={OnBackAction}
          onClickIcon={ClickAddToCart}
        />
      ) : (
        <DefaultHeader
          onClickSearch={() => {
            console.log(':::: search will be available soon ::::');
          }}
        />
      )}
    </View>
  );
};

export default CategoryHeaderTitle;

interface defaultHeaderProps {
  onClickSearch?(): void;
}
const DefaultHeader = (props: defaultHeaderProps) => {
  return (
    <View style={styles.container}>
      <View>
        <Text
          style={{
            fontSize: 17,
            fontWeight: 'medium',
            color: 'white',
            letterSpacing: 2,
          }}>
          SHOP
        </Text>
      </View>
      <View>
        <IconCustom
          iconName={'search'}
          iconSize={20}
          onClick={props.onClickSearch}
        />
      </View>
    </View>
  );
};

interface listTypeProductProps {
  productType: string;
  onBack?(): void;
}
const ListTypeProductHeader = (props: listTypeProductProps) => {
  return (
    <View style={styles.headerContainer}>
      <View>
        <IconCustom
          iconName="chevron-back-sharp"
          iconSize={20}
          iconColor="white"
          onClick={props.onBack}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{props.productType}</Text>
      </View>
    </View>
  );
};
interface listProductOfTypeProps {
  subTitle?: string;
  title?: string;
  onBack?(): void;
  onClickIcon?(): void;
  rightIconName: string;
}
const ListProductOfTypeHeader = (props: listProductOfTypeProps) => {
  return (
    <View style={styles.listProductContainer}>
      <View>
        <IconCustom
          iconName="chevron-back-sharp"
          iconSize={20}
          iconColor="white"
          onClick={props.onBack}
        />
      </View>
      <View style={styles.listProductTextSection}>
        <Text style={styles.listProductText}>{props.title}</Text>
        <Text
          style={[styles.listProductText, {fontSize: 10, letterSpacing: 2}]}>
          {props.subTitle}
        </Text>
      </View>
      <View>
        <IconCustom
          iconName={props.rightIconName}
          iconSize={20}
          iconColor="white"
          onClick={props.onClickIcon}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 18,
    marginTop: StatusBar.currentHeight! / 2 || 25,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerContainer: {
    paddingHorizontal: 18,
    marginTop: StatusBar.currentHeight! / 2 || 25,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
    right: 18,
  },
  text: {
    fontSize: 13,
    fontWeight: '600',
    color: 'white',
  },
  listProductContainer: {
    marginTop: StatusBar.currentHeight! / 2 || 25,
    width: '100%',
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 5,
  },
  listProductTextSection: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  listProductText: {
    color: 'white',
    fontSize: 14,
  },
});
