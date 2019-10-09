import counterReducer from './dumy-reducer';
import {navReducer} from '../../navigation';
import {combineReducers} from 'redux';

export default combineReducers({
  counterL: counterReducer,
  nav: navReducer,
});
