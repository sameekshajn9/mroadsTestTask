/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import appStore from './src/store';
const {store, persistor} = appStore();

import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
));
