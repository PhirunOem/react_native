import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import IconCustom from './iconCustom';

interface Props {
  productType?: string;
  leftIconName?: string;
  onClick?(): void;
}
const ProductCategoryNavigator: React.FC<Props> = ({
  productType = 'SHOES',
  leftIconName = 'home',
  onClick,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContent}>
        <View>
          <Icon name={leftIconName} size={16} color={'black'} />
        </View>
        <View>
          <Text style={{color: 'black', fontSize: 14, fontWeight: 400}}>
            {productType}
          </Text>
        </View>
      </View>
      <View>
        <IconCustom
          iconName="arrow-forward"
          iconSize={20}
          iconColor="black"
          onClick={onClick}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingVertical: 24,
    paddingHorizontal: 28,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#F7F7F7',
  },
  leftContent: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
});
export default ProductCategoryNavigator;
