import userReducer from 'screens/login/redux/reducer';
import {navReducer} from '../../navigation';
import {combineReducers} from 'redux';

export default combineReducers({
  userDetails: userReducer,
  nav: navReducer,
});
