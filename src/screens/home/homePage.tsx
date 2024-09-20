import {ButtonCustom, ScrollableCard} from '../../components';
import {FlatList, Pressable, Text, View, ScrollView} from 'react-native';
import {useEffect, useMemo, useRef} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {allShoes} from '../../utils';
import HomeHeaderActions from './homeHeaderActions';
import {CommonActions} from '@react-navigation/native';
export default function HomePage({navigation, route}: any) {
  const indexType = useSelector((state: any) => state.action.indexOfType);
  const listRef = useRef<FlatList>(null);
  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollToIndex({animated: false, index: indexType});
    }
  }, [indexType, listRef]);

  const pushToDetail = (index: number) => {
    navigation.navigate('Categories', {
      screen: 'Detail',
      initial: false,
      params: {
        productId: index,
      },
    });
  };
  const _renderitem = ({item, index}: any) => {
    return (
      <ScrollableCard
        title={item.productType}
        images={item.imagesCover}
        onPress={() => pushToDetail(index)}
        key={index}
      />
    );
  };
  const memoizedValue = useMemo(() => _renderitem, [allShoes]);
  return (
    <View>
      <View>
        <HomeHeaderActions {...navigation} />
      </View>
      <FlatList
        ref={listRef}
        data={allShoes}
        renderItem={memoizedValue}
        initialNumToRender={4}
        removeClippedSubviews={true}
        onScrollToIndexFailed={error => {
          listRef.current?.scrollToOffset({
            offset: error.averageItemLength * error.index,
            animated: true,
          });
          setTimeout(() => {
            if (listRef.current !== null) {
              listRef.current.scrollToIndex({
                index: error.index,
                animated: true,
              });
            }
          }, 100);
        }}
      />
    </View>
  );
}
