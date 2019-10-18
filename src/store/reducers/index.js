import userReducer from 'screens/login/redux/reducer';
import {
  serviceTypeReducer,
  availableCityReducer,
} from 'screens/home/redux/reducer';
import {navReducer} from '../../navigation';
import {combineReducers} from 'redux';

export default combineReducers({
  userDetails: userReducer,
  serviceTypes: serviceTypeReducer,
  availableCities: availableCityReducer,
  nav: navReducer,
});
