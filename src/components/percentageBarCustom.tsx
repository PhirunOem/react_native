import React from 'react';
import {View} from 'react-native';
import {Text, StyleSheet} from 'react-native';
import {theme} from '../core';
interface Props {
  isPercentage?: boolean;
  percentage?: any;
  title?: string;
  leftSubTitle?: string;
  rightSubTitle?: string;
  middleSubTitle?: string;
}

const PercentageBarCustom: React.FC<Props> = ({
  isPercentage = false,
  percentage = 1,
  title = 'size',
  leftSubTitle = 'Too small',
  rightSubTitle = 'Too large',
  middleSubTitle = isPercentage ? '' : 'Perfect',
}) => {
  return (
    <View style={{flexDirection: 'column'}}>
      <View style={{paddingBottom: 11}}>
        <Text style={styles.title}>{title.toUpperCase()}</Text>
      </View>
      <View style={[styles.container, {height: 1}]}>
        <View
          style={{
            height: 4,
            width: isPercentage ? `${percentage}%` : 30,
            backgroundColor: theme.colors.background,
            left: isPercentage ? '0%' : `${percentage}%`,
          }}
        />
      </View>
      <View
        style={{
          paddingTop: 5,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View>
          <Text style={styles.subTitle}>{leftSubTitle}</Text>
        </View>
        <View>
          <Text style={styles.subTitle}>
            {isPercentage ? '' : middleSubTitle}
          </Text>
        </View>
        <View>
          <Text style={styles.subTitle}>{rightSubTitle}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#e0e0df',
    justifyContent: 'center',
  },
  filler: {
    backgroundColor: '#3b5998',
  },
  title: {
    fontSize: 11,
    fontWeight: '400',
    letterSpacing: 2,
    color: 'black',
  },
  subTitle: {
    fontSize: 9,
    fontWeight: '300',
    color: '#878585',
  },
});

export default PercentageBarCustom;
