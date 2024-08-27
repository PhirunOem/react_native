import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import {Text} from 'react-native-animatable';

const currentStatusHeight = StatusBar.currentHeight;
const FavoriteHeaderTitle = () => {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 17, color: 'white', letterSpacing: 2}}>
        {'favorite'.toUpperCase()}
      </Text>
    </View>
  );
};

export default React.memo(FavoriteHeaderTitle);

const styles = StyleSheet.create({
  container: {
    marginTop: currentStatusHeight,
  },
});
