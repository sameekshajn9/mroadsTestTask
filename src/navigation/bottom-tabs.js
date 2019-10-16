// @flow
import React from 'react';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {
  Platform,
  Image,
  Text,
  View,
  TouchableWithoutFeedback,
} from 'react-native';
import {
  BagIcon,
  SearchIcon,
  SettingsIcon,
  DiningIcon,
  HeartIcon,
} from 'shared/assets/images';
import LoginScreen from 'screens/login';
import InspirationScreen from 'screens/inspirations';
import SavedServicesScreen from 'screens/saved-services';
import SettingsScreen from 'screens/settings';
import {Colors} from 'shared/theme';
// import Splash from 'screens/splash-screen';
import {Metrics} from 'utils';
import styles from './styles';

const tabOptions = (tabScreen, iconName, iconTitle, backgroundColor) => {
  return {
    screen: tabScreen,
    navigationOptions: {
      // tabBarLabel: 'Profile',

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
      tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      },
      barStyle: {backgroundColor},
      animationEnabled: true,
      swipeEnabled: true,
    },
  };
};

const tabRoutesConfig = {
  Order: tabOptions(InspirationScreen, BagIcon, 'Home', 'red'),
  Business: tabOptions(InspirationScreen, DiningIcon, 'Inspirations', 'yellow'),
  // Redeem: tabOptions(LoginScreen, SearchIcon, 'VR'),
  Settings: tabOptions(SavedServicesScreen, HeartIcon, 'Saved', 'pink'),
  Menu: tabOptions(SettingsScreen, SettingsIcon, 'Settings', 'blue'),
};

let bottomTabs = createMaterialBottomTabNavigator(tabRoutesConfig, {
  labeled: false,
  activeTintColor: Colors.blueTint,
  inactiveTintColor: Colors.gray,
  barStyle: {backgroundColor: Colors.black},
});
if (Platform.OS === 'ios') {
  bottomTabs = createMaterialBottomTabNavigator(tabRoutesConfig, {
    tabBarOptions: {
      labeled: false,
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
