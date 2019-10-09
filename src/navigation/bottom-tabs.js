// @flow
import React from 'react';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {Platform, Image, Text, View} from 'react-native';
import {
  BagIcon,
  SearchIcon,
  SettingsIcon,
  DiningIcon,
} from 'shared/assets/images';
import LoginScreen from 'screens/login';
import {Colors} from 'shared/theme';
import Splash from 'screens/splash-screen';
import {Metrics} from 'utils';
import styles from './styles';

const tabOptions = (tabScreen, iconName, iconTitle) => {
  return {
    screen: tabScreen,
    navigationOptions: {
      tabBarIcon: ({tintColor}) => (
        <View style={styles.bottomTabsContainer}>
          <Image
            source={iconName}
            style={{...styles.bottomTabsImage, tintColor}}
          />
          <Text style={{...styles.bottomTabsText, color: tintColor}}>
            {iconTitle}
          </Text>
        </View>
      ),
    },
  };
};

const tabRoutesConfig = {
  Order: tabOptions(LoginScreen, BagIcon, 'Order'),
  Business: tabOptions(LoginScreen, DiningIcon, 'Dine Out'),
  Redeem: tabOptions(LoginScreen, SearchIcon, 'Search'),
  Settings: tabOptions(LoginScreen, SettingsIcon, 'Settings'),
  Menu: tabOptions(LoginScreen, DiningIcon, 'Menu'),
};

let bottomTabs = createMaterialBottomTabNavigator(tabRoutesConfig, {
  labeled: false,
  activeTintColor: Colors.blueTint,
  inactiveTintColor: Colors.gray,
  barStyle: {backgroundColor: Colors.black},
});
if (Platform.OS === 'ios') {
  bottomTabs = createBottomTabNavigator(tabRoutesConfig, {
    tabBarOptions: {
      style: {
        width: Metrics.screenWidth,
        height: Metrics.tabBarHeight,
      },
      showIcon: true,
      showLabel: false,
      activeTintColor: Colors.blueTint,
      inactiveTintColor: Colors.gray,
    },
  });
}

export const BottomTabs = bottomTabs;
