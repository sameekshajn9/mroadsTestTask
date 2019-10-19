// Initial State
import {GET_ALL_SERVICES} from 'appstore/actions';
import {composeResetReducer} from 'appstore/reducers/reset-reducer';

const initialState = [];
const serviceTypesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_SERVICES.SUCCESS: {
      console.log(action.payload, 'GET_ALL_SERVICES');
      return {
        ...state,
        ...action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default composeResetReducer(serviceTypesReducer, initialState);
