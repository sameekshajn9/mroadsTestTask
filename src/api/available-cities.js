// @flow
import gql from 'graphql-tag';
import client from 'services';
import {toPromise, catchError} from 'utils';

const getAllAvailableCitiesQuery = gql`
  query getAllAvailableCities {
    response: getAllAvailableCities {
      cities {
        id
        name
        cityCode
      }
      status
      message
    }
  }
`;

export const getAllAvailableCities = () =>
  toPromise((resolve, reject) => {
    client
      .query({
        query: getAllAvailableCitiesQuery,
        fetchPolicy: 'no-cache',
        // variables: {},
      })
      .then(catchError(resolve, reject))
      .catch(reject);
  });
