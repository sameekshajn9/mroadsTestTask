// Initial State
import {GET_ALL_SERVICES_TYPES} from 'appstore/actions';
import {composeResetReducer} from 'appstore/reducers/reset-reducer';

const initialState = [];
const serviceTypesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_SERVICES_TYPES.SUCCESS: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

export default composeResetReducer(serviceTypesReducer, initialState);
