import userReducer from 'screens/login/redux/reducer';
import availableCitiesReducer from 'screens/home/redux/reducers/cities-reducer';
import serviceTypesReducer from 'screens/home/redux/reducers/service-type-reducer';
import servicesReducer from './services-reducer';
import {navReducer} from '../../navigation';
import {combineReducers} from 'redux';

export default combineReducers({
  userDetails: userReducer,
  serviceTypes: serviceTypesReducer,
  availableCities: availableCitiesReducer,
  services: servicesReducer,
  nav: navReducer,
});
