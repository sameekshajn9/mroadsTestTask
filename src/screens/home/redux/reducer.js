// Initial State
import {GET_ALL_SERVICES} from 'appstore/actions';

const initialState = [];
const serviceTypeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ALL_SERVICES_SUCCESS': {
      console.log(action.payload, 'datat');
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
// Exports
export default serviceTypeReducer;
