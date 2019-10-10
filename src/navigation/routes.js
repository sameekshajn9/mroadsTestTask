// @flow
// import UserDetails from 'screens/user-details';
import {BottomTabs} from './bottom-tabs';
import LoginScreen from 'screens/login';
import InspirationScreen from 'screens/inspirations';
import SavedServicesScreen from 'screens/saved-services';
import SettingsScreen from 'screens/settings';

export const authRoutes = {
  // UserDetails,
};
export const mainRoutes = {
  Tab: BottomTabs,
  Login: LoginScreen,
  Inspirations: InspirationScreen,
  SavedServices: SavedServicesScreen,
  Settings: SettingsScreen,
};
