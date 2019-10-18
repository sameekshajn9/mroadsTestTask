// Initial State
import {GET_ALL_SERVICES, GET_ALL_AVAILABLE_CITIES} from 'appstore/actions';

const initialServiceState = [];
export const serviceTypeReducer = (state = initialServiceState, action) => {
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

const initialCitiesServiceState = [];
export const availableCityReducer = (
  state = initialCitiesServiceState,
  action,
) => {
  switch (action.type) {
    case GET_ALL_AVAILABLE_CITIES.SUCCESS: {
      console.log(action.payload, 'GET_ALL_AVAILABLE_CITIES');
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
