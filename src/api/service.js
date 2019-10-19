// @flow
import gql from 'graphql-tag';
import client from 'services';
import {toPromise, catchError} from 'utils';

const getAllServicesQuery = gql`
  query getAllServices {
    response: getAllServices {
      type
      count
      status
      message
    }
  }
`;

export const getAllServices = () =>
  toPromise((resolve, reject) => {
    client
      .query({
        query: getAllServicesQuery,
        fetchPolicy: 'no-cache',
        // variables: {},
      })
      .then(catchError(resolve, reject))
      .catch(reject);
  });
