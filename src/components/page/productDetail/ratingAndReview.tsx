import {theme} from '../../../core';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {AirbnbRating} from 'react-native-ratings';
import {PercentageBarCustom} from '../../../components';

interface Props {
  productId?: number;
}
const RatingAndReview: React.FC<Props> = () => {
  return (
    <View style={styles.container}>
      <View></View>
      <View>
        <Text style={[styles.headerText, {fontWeight: 700}]}>
          {'RATING & REVIEWS'}
        </Text>
      </View>
      {/* ::::::::::::::: Rating Section ::::::::::::::::::::::*/}
      <View style={styles.ratingSection}>
        <View style={{alignItems: 'flex-start', alignContent: 'center'}}>
          <Text
            style={[
              styles.headerText,
              {
                fontSize: 47,
                color: theme.colors.background,
                fontStyle: 'italic',
              },
            ]}>
            {'4.7'}
          </Text>
          <RatingSection />
          <Text style={{textDecorationLine: 'underline', fontSize: 11}}>
            {'12743 REVIEWS'}
          </Text>
        </View>
        <View style={{alignItems: 'flex-end'}}>
          <Text
            style={[
              styles.headerText,
              {
                fontSize: 47,
                color: theme.colors.background,
                fontStyle: 'italic',
              },
            ]}>
            {'96%'}
          </Text>
          <Text
            style={[styles.headerText, {fontSize: 10, width: '70%'}]}
            numberOfLines={2}>
            {'of customers recommend this product'}
          </Text>
        </View>
      </View>
      <View style={{gap: 20}}>
        <View>
          <PercentageBarCustom percentage={55} isPercentage={false} />
        </View>
        <View>
          <PercentageBarCustom
            percentage={50}
            isPercentage={false}
            title="Width"
          />
        </View>
        <View>
          <PercentageBarCustom
            percentage={90}
            isPercentage={true}
            title="Comfort"
            leftSubTitle="Uncomfortable"
            rightSubTitle="Comfortable"
          />
        </View>
        <View>
          <PercentageBarCustom
            percentage={95}
            isPercentage={true}
            title="Quality"
            leftSubTitle="Poor"
            rightSubTitle="Perfect"
          />
        </View>
      </View>
    </View>
  );
};

const RatingSection = () => {
  const ratingCompleted = (rating: number) => {
    console.log('Rating is: ' + rating);
  };
  return (
    <AirbnbRating
      showRating={false}
      count={5}
      reviews={['Terrible', 'Bad', 'OK', 'Good', 'Very Good']}
      defaultRating={4}
      size={14}
      isDisabled
      selectedColor={theme.colors.background}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    gap: 20,
    paddingRight: 20,
  },
  headerText: {
    color: 'black',
    fontSize: 20,
  },
  ratingSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default React.memo(RatingAndReview);
