// @flow

// file needs to be checked with status code
import {Alert} from 'react-native';

let isAlertVisible = false;

export const catchError = (onSuccess: Function, onError: Function) => (
  obj: any,
) => {
  if (obj) {
    const {data} = obj;
    const {status} = data.response;
    if (status === 200 || status === 304) {
      onSuccess(data.response);
    } else {
      console.log('onError', onError);
      let message = status === 401 ? 'Unauthorised Request' : 'Unknown Error';
      // Logout user now if status is 401
      // if (status === 401) {
      //   store.dispatch(NavigationActions.navigate({ routeName: 'Auth' }));
      // }
      // eslint-disable-next-line prefer-destructuring
      if (data.response.message) {
        message = data.response.message;
      }
      if (status === 400 && !isAlertVisible) {
        // isAlertVisible = true;
        Alert.alert('Error', message, [
          {
            text: 'OK',
            onPress: () => {
              isAlertVisible = false;
            },
            style: 'cancel',
          },
        ]);
      }
      onError(message);
    }
  }
};
