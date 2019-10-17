import {GET_ALL_SERVICES} from 'appstore/actions';
export const getServices = () => ({
  type: GET_ALL_SERVICES,
});
export const getServicesSuccess = () => ({
  type: 'GET_ALL_SERVICES_SUCCESS',
});
