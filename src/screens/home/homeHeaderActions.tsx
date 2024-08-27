import {ScrollView, View} from 'react-native';
import {allShoes} from '../../utils';
import {ButtonCustom} from '../../components';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {isClickProductType, setBooleanValue} from '../../redux/slice';
import {
  FilterCategoryPage,
  SignInPage,
  SignInWithPage,
} from '../../components/page';
{
  /* ::::: part of user action that they click to see what content they want::::: */
}
const HomeHeaderActions: React.FC = () => {
  const indexType = useSelector((state: any) => state.action.indexOfType);
  const filterValue = useSelector((state: any) => state.action.categoryType);
  const dispatch = useDispatch();
  const openFilter = () => {
    dispatch(setBooleanValue({type: 'FILTER', booleanValue: true}));
  };
  return (
    <View>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          gap: 5,
          paddingHorizontal: 15,
          paddingBottom: 10,
        }}>
        <View style={{paddingRight: 10}}>
          <ButtonCustom
            onPress={openFilter}
            title={filterValue + "'S"}
            backgroundColor="#EDEDED"
            textColor="black"
            isIcon={true}
            iconName="chevron-down"
            iconColor="black"
            iconSize={10}
            isSemiBoldText={true}></ButtonCustom>
        </View>
        {allShoes.map((item, index) => {
          return (
            <ButtonCustom
              onPress={() => dispatch(isClickProductType(index))}
              title={item.productType}
              backgroundColor={index == indexType ? '#00F0FF' : '#EDEDED'}
              textColor={'#000'}
              key={index}></ButtonCustom>
          );
        })}
      </ScrollView>
      <View>
        <FilterCategoryPage />
      </View>
      <View>
        <SignInPage />
        <SignInWithPage />
      </View>
    </View>
  );
};

export default HomeHeaderActions;
