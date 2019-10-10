// Initial State
import {HANDLE_SIGNIN} from 'appstore/actions';

const initialState = {
  name: '',
  email: '',
  contact: '',
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case HANDLE_SIGNIN: {
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
export default userReducer;
