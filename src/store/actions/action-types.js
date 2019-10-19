const generateActionTypes = type => ({
  REQUEST: `${type}_REQUEST`,
  SUCCESS: `${type}_SUCCESS`,
  FAILURE: `${type}_FAILURE`,
  IN_PROGRESS: `${type}_IN_PROGRESS`,
});

export const HANDLE_SIGNIN = generateActionTypes('HANDLE_SIGNIN');
export const GET_ALL_SERVICES = generateActionTypes('GET_ALL_SERVICES');
export const RESET_STORE = 'RESET_STORE';
export const GET_ALL_AVAILABLE_CITIES = generateActionTypes(
  'GET_ALL_AVAILABLE_CITIES',
);
