import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import {Text} from 'react-native-animatable';

const currentStatusHeight = StatusBar.currentHeight;
const ShoppingCartHeaderTitle = () => {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 17, color: 'white', letterSpacing: 2}}>
        {'shopping bag'.toUpperCase()}
      </Text>
    </View>
  );
};

export default React.memo(ShoppingCartHeaderTitle);

const styles = StyleSheet.create({
  container: {
    marginTop: currentStatusHeight,
  },
});
