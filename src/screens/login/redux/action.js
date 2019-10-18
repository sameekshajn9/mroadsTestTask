import {HANDLE_SIGNIN} from 'appstore/actions';
export const signIn = data => ({
  type: HANDLE_SIGNIN.REQUEST,
  payload: data,
});
