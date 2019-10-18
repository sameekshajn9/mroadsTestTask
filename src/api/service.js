// @flow
import gql from 'graphql-tag';
import client from 'services';
import {toPromise, catchError} from 'utils';

console.log(client, 'd');

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
    console.log(client, 'client');
    client
      .query({
        query: getAllServicesQuery,
        fetchPolicy: 'no-cache',
        // variables: {},
      })
      .then(data => console.log(data, 'aata'))
      .catch(data => console.log(data, 'asdaaaa'));
  });
