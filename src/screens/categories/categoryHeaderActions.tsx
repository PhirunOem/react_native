import React from 'react';
import {StyleSheet, Text, View, useWindowDimensions} from 'react-native';
import {TabView, TabBar, SceneMap} from 'react-native-tab-view';
import {CategoryTypePage} from '../../components/page/productCategoryPage';
import {theme} from '../../core';
const CategoryHeaderActions: React.FC = ({...navigation}: any) => {
  const renderScene = ({route}: any) => {
    switch (route.key) {
      case 'men':
        return (
          <CategoryTypePage
            categoryType={route.title}
            navigation={navigation}
          />
        );
      case 'women':
        return (
          <View style={{flex: 1}}>
            <CategoryTypePage
              categoryType={route.title}
              navigation={navigation}
            />
          </View>
        );
      case 'kid':
        return (
          <View style={{flex: 1}}>
            <CategoryTypePage
              categoryType={route.title}
              navigation={navigation}
            />
          </View>
        );
      default:
        return null;
    }
  };
  const layout = useWindowDimensions();

  const renderTabBar = (props: any) => (
    <TabBar
      {...props}
      android_ripple={{foreground: false, color: null}}
      renderLabel={({route, focused, color}) => (
        <Text
          style={{
            letterSpacing: 2,
            fontSize: 10,

            color: focused ? theme.colors.background : 'black',
          }}>
          {route.title}
        </Text>
      )}
      indicatorStyle={{
        backgroundColor: theme.colors.background,
        height: 2,
        left: 12,
      }}
      activeColor={theme.colors.background}
      inactiveColor={'black'}
      contentContainerStyle={{
        alignItems: 'center',
      }}
      style={{
        height: 32,
        width: '100%',
        backgroundColor: 'white',
      }}
      tabStyle={{width: 'auto', left: 12}}
      gap={0}
    />
  );
  const [index, setIndex] = React.useState(0);
  //note that :  key or title should not be changed , cuz it involve in fetching data in the furture
  const [routes] = React.useState([
    {key: 'men', title: 'MEN'},
    {key: 'women', title: 'WOMEN'},
    {key: 'kid', title: 'KID'},
  ]);

  const LazyPlaceholder = ({route}: any) => (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Loading {route.title}…</Text>
    </View>
  );
  return (
    <TabView
      lazy={({route}) => route.title === 'MEN'}
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      renderTabBar={renderTabBar}
      initialLayout={{width: layout.width}}
      animationEnabled={false}
      swipeEnabled={false}
      renderLazyPlaceholder={LazyPlaceholder}
    />
  );
};

export default React.memo(CategoryHeaderActions);
