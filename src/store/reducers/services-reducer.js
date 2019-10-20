// Initial State
import {GET_SERVICES} from 'appstore/actions';
import {composeResetReducer} from 'appstore/reducers/reset-reducer';

const initialState = {};
const servicesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SERVICES.SUCCESS: {
      const {serviceTypeId, data} = action.payload;
      const hasServiceData = state[serviceTypeId];
      if (!hasServiceData) {
        state[serviceTypeId] = data;
      }
      return state;
    }
    default:
      return state;
  }
};

export default composeResetReducer(servicesReducer, initialState);
