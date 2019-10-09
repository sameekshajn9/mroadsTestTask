import counterReducer from './dumy-reducer';
import {combineReducers} from 'redux';

export default combineReducers({
  counterL: counterReducer,
});
