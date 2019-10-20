import {
  GET_ALL_SERVICES_TYPES,
  GET_ALL_AVAILABLE_CITIES,
  GET_SERVICES,
} from 'appstore/actions';
export const getServiceTypes = () => ({
  type: GET_ALL_SERVICES_TYPES.REQUEST,
});
export const getServiceTypesSuccess = response => ({
  type: GET_ALL_SERVICES_TYPES.SUCCESS,
  payload: response,
});
export const getAvailableCities = () => ({
  type: GET_ALL_AVAILABLE_CITIES.REQUEST,
});
export const getAvailableCitiesSuccess = response => ({
  type: GET_ALL_AVAILABLE_CITIES.SUCCESS,
  payload: response,
});
export const getServicesRequest = payload => ({
  type: GET_SERVICES.REQUEST,
  payload,
});
export const getServicesSuccess = response => ({
  type: GET_SERVICES.SUCCESS,
  payload: response,
});
