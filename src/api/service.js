// @flow
import gql from 'graphql-tag';
import client from 'apollo';
import {toPromise, catchError} from 'utils';

console.log(client, 'd');

const getAllServicesQuery = gql`
  query getAllServices {
    getAllServices {
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
        variables: {},
      })
      .then(data => console.log(data, 'aata'))
      .catch(reject);
  });
