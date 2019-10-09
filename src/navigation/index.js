/**
 * @flow
 * */
import React from 'react';
import {
  createSwitchNavigator,
  NavigationActions,
} from 'react-navigation';
import {
  createStackNavigator,
} from 'react-navigation-stack';
import {BackHandler} from 'react-native';
import {connect} from 'react-redux';
import {
  createReduxContainer,
  createReactNavigationReduxMiddleware,
  createNavigationReducer,
} from 'react-navigation-redux-helpers';
import Splash from 'screens/splash-screen';
import {authRoutes, mainRoutes} from './routes';

// const AuthStack = createStackNavigator(authRoutes, {
//   headerMode: 'none',
//   initialRouteName: 'UserDetails',
// });

const MainStack = createStackNavigator(mainRoutes, {
  headerMode: 'none',
  initialRouteName: 'Tab',
});

const AppNavigator = createSwitchNavigator(
  {
    Main: MainStack,
    Splash: {screen: Splash},
  },
  {
    headerMode: 'none',
    initialRouteName: 'Splash',
  },
);

export const navReducer = createNavigationReducer(AppNavigator);

// Note: createReactNavigationReduxMiddleware must be run before createReduxContainer
export const navMiddleware = createReactNavigationReduxMiddleware(
  state => state.nav,
  'root',
);

const AppWithNavigationState = createReduxContainer(AppNavigator, 'root');

type TNavigationAppProps = {
  nav: any,
  dispatch: any,
};
class NavigationApp extends React.Component<TNavigationAppProps> {
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
  }

  render() {
    const {nav, dispatch} = this.props;
    console.log(nav, 'nav')
    return <AppWithNavigationState state={nav} dispatch={dispatch} />;
  }

  onBackPress = () => {
    const {dispatch, nav} = this.props;
    if (nav.index === 0) {
      return false;
    }
    dispatch(NavigationActions.back());
    return true;
  };
}

const mapStateToProps = state => ({
  nav: state.nav,
});
export default connect(mapStateToProps)(NavigationApp);
