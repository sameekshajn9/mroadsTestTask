// @flow
import gql from 'graphql-tag';
import client from 'services';
import {toPromise, catchError} from 'utils';

const getAllServicesTypesQuery = gql`
  query getAllServiceTypes {
    response: getAllServiceTypes {
      types {
        id
        name
        count
        image
      }
      status
      message
    }
  }
`;

export const getAllServicesTypes = () =>
  toPromise((resolve, reject) => {
    client
      .query({
        query: getAllServicesTypesQuery,
        fetchPolicy: 'no-cache',
        // variables: {},
      })
      .then(catchError(resolve, reject))
      .catch(reject);
  });
