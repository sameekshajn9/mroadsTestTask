// @flow
import gql from 'graphql-tag';
import client from 'services';
import {toPromise, catchError} from 'utils';

const getAllAvailableCitiesQuery = gql`
  query getAllAvailableCities {
    response: getAllAvailableCities {
      cities {
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
    console.log(client, 'client');
    client
      .query({
        query: getAllAvailableCitiesQuery,
        fetchPolicy: 'no-cache',
        // variables: {},
      })
      .then(data => console.log(data, 'aata'))
      .catch(data => console.log(data, 'asdaaaa'));
  });
