import {StyleSheet, Text, View} from 'react-native';

export default function SmallDecription({
  title = 'MESSI F50 PRO FIRM GROUND SOCCER CLEATS',
  proCategory = 'Men',
  proType = 'Soccer',
  price = 100,
}) {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 20, fontWeight: 700, color: 'black'}}>
        {title.toUpperCase()}
      </Text>
      <Text style={{color: 'rgba(0,0,0,.95)'}}>
        {proCategory + "'s " + proType}
      </Text>
      <Text style={{fontSize: 16, color: 'black'}}>
        {'$' + price.toFixed(2)}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flexDirection: 'column', gap: 15},
});
