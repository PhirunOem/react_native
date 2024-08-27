import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';
import {useSelector, useDispatch} from 'react-redux';
import {filterCategory, setBooleanValue} from '../../../redux/slice';
import {Divider} from '@rneui/themed';
import Icon from 'react-native-vector-icons/Ionicons';
import {ButtonCustom, IconCustom} from '../../../components';
import {categoryData} from '../../../utils';
import {styles} from './style';
interface filterCategoryProps {
  isOpen?: boolean;
  onClose?: () => void;
}
export default function FilterCategoryPage(props: filterCategoryProps) {
  const isOpenFiler = useSelector((state: any) => state.action.isFilter);
  const filterValue = useSelector((state: any) => state.action.categoryType);
  const [category, setCategory] = useState(filterValue);

  const dispatch = useDispatch();
  const closeModal = () => {
    dispatch(setBooleanValue({type: 'FILTER', booleanValue: false}));
    setCategory(filterValue);
  };
  const clickFilter = (item: any, index: number) => {
    setCategory(item.name);
  };
  const saveFilter = () => {
    dispatch(filterCategory(category));
    dispatch(setBooleanValue({type: 'FILTER', booleanValue: false}));
  };
  return (
    <Modal
      statusBarTranslucent
      isVisible={isOpenFiler}
      swipeDirection={['up', 'left', 'right', 'down']}
      style={styles.view}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.contentTitle}>FILTER BY CATEGORY</Text>
          <IconCustom
            iconName="close-outline"
            iconSize={24}
            iconColor={'#000'}
            onClick={closeModal}
          />
        </View>
        <Divider width={1} color="#E5E5E5" />
        <View style={styles.containerAction}>
          {categoryData.map((item, index) => {
            const isUserClick = category == item.name;
            return (
              <View style={styles.action} key={index}>
                <ButtonCustom
                  onPress={() => clickFilter(item, index)}
                  title={item.name}
                  backgroundColor={isUserClick ? '#03A1AB' : '#EFEFEF'}
                  paddingVertical={6}
                  fontSize={16}
                  isSemiBoldText={true}
                  isCenter
                  textColor={isUserClick ? '#00F0FF' : 'black'}
                />
              </View>
            );
          })}
        </View>
        <View style={styles.bottom}>
          <ButtonCustom
            onPress={saveFilter}
            title={'SAVE'}
            backgroundColor="#03A1AB"
            paddingVertical={10}
            fontSize={16}
            isIcon={true}
            iconName="arrow-forward"
            iconColor="#00F0FF"
            textColor="#00F0FF"
            isJustifyTextAndIcon={true}
            paddingHorizontal={20}
            isSemiBoldText={true}
          />
        </View>
      </View>
    </Modal>
  );
}
