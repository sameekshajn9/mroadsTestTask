// Initial State
import {GET_ALL_AVAILABLE_CITIES} from 'appstore/actions';
import {composeResetReducer} from 'appstore/reducers/reset-reducer';

const initialState = [];
const availableCitiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_AVAILABLE_CITIES.SUCCESS: {
      console.log(action.payload, 'GET_ALL_AVAILABLE_CITIES');
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

export default composeResetReducer(availableCitiesReducer, initialState);
