import React from 'react';
import {Text, View} from 'react-native';
import styles from './style';
import {ProductStatusScrollable} from '../../../components';
import {allShoes} from '../../../utils';

const ProductStatusPage: React.FC = () => {
  const productStatus = [
    'NEW ARRIVAL',
    'BEST SELLER',
    'SOCCER',
    'WALKING',
    'RUNNING',
  ];
  const clickToSeeAll = (status: string) => {
    console.log(':::::: you click :::: ', status);
  };
  return (
    <View style={styles.container}>
      {productStatus.map((item, index) => {
        return (
          <View key={index}>
            <ProductStatusScrollable
              productStatus={item}
              data={allShoes}
              onClickToSeeAll={() => clickToSeeAll(item)}
            />
          </View>
        );
      })}
    </View>
  );
};

export default ProductStatusPage;
