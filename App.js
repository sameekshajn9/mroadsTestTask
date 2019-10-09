/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import appStore from './src/store';
import NavigationApp from './src/navigation';
import SplashScreen from 'react-native-splash-screen';

const {store, persistor} = appStore();

class App extends React.Component {

  componentDidMount() {
    SplashScreen.hide();
  }
  render() {

    return (
      <>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView style={styles.safeAreaView}>
              <NavigationApp />
            </SafeAreaView>
          </PersistGate>
        </Provider>
      </>
    );
  }
}


const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1
  }
});

export default App;
