// @flow
// import UserDetails from 'screens/user-details';
import {BottomTabs} from './bottom-tabs';
import LoginScreen from 'screens/login';
import InspirationScreen from 'screens/inspirations';
import SavedServicesScreen from 'screens/saved-services';
import SettingsScreen from 'screens/settings';
import SelectCityScreen from 'screens/select-city-screen';

export const authRoutes = {
  Login: LoginScreen,
  // UserDetails,
};
export const mainRoutes = {
  Tab: BottomTabs,
  SelectCity: SelectCityScreen,
  // Inspirations: InspirationScreen,
  // SavedServices: SavedServicesScreen,
  // Settings: SettingsScreen,
};
