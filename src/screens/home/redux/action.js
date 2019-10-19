import {GET_ALL_SERVICES, GET_ALL_AVAILABLE_CITIES} from 'appstore/actions';
export const getServices = () => ({
  type: GET_ALL_SERVICES.REQUEST,
});
export const getServicesSuccess = response => ({
  type: GET_ALL_SERVICES.SUCCESS,
  payload: response,
});
export const getAvailableCities = () => ({
  type: GET_ALL_AVAILABLE_CITIES.REQUEST,
});
export const getAvailableCitiesSuccess = response => ({
  type: GET_ALL_AVAILABLE_CITIES.SUCCESS,
  payload: response,
});
