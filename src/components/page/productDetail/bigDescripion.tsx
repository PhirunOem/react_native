import React from 'react';
import {Text, View} from 'react-native';

interface Props {
  headerTitle?: string;
  description?: string;
}

const BigDescription: React.FC<Props> = ({
  headerTitle = 'MESSI-STYLE F50 CLEATS FOR FIRM GROUND, MADE IN PART WITH RECYCLED MATERIALS.',
  description = "F50 speed, Messi style. In 2024, Lionel Messi's range of adidas soccer cleats are crafted to match his preferences even more closely. The flexible HybridTouch upper on these F50 Pro cleats offers a comfortable fit. Underneath, a specialist outsole supports agility on firm ground.  This product features at least 20% recycled materials. By reusing materials that have already been created, we help to reduce waste and our reliance on finite resources and reduce the footprint of the products we make",
}) => {
  const texStyle = {color: 'black'};
  return (
    <View style={{flexDirection: 'column', gap: 14}}>
      <View>
        <Text style={[texStyle, {fontSize: 20, fontWeight: 700}]}>
          {headerTitle}
        </Text>
      </View>
      <View>
        <Text style={[texStyle, {fontSize: 11, fontWeight: 400}]}>
          {description}
        </Text>
      </View>
    </View>
  );
};

export default React.memo(BigDescription);
