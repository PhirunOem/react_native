import React from 'react';
import {allShoes} from '../../../utils';
import {View} from 'react-native';
import {ProductStatusScrollable} from '../../../components';
//we need this two thing in order to filter product in the furture via product user click
interface Props {
  productType: string;
  producCategory: string;
}

const BottomDisplayProduct: React.FC = () => {
  return (
    <View>
      <View>
        <ProductStatusScrollable
          productStatus={'completed the look'}
          data={allShoes}
          isSimilarProduct
        />
      </View>
      <View>
        <ProductStatusScrollable
          productStatus={'You may also like'}
          data={allShoes}
          isSimilarProduct
        />
      </View>
    </View>
  );
};

export default React.memo(BottomDisplayProduct);
