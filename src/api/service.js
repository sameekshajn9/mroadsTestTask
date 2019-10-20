// @flow
import gql from 'graphql-tag';
import client from 'services';
import {toPromise, catchError} from 'utils';

const getServicesQuery = gql`
  query getService($serviceTypeId: Int!, $userId: Int!) {
    response: getService(serviceTypeId: $serviceTypeId, userId: $userId) {
      serviceTypeId
      data {
        id
        name
        contact
        isAvailable
        noOfBookings
        address {
          latitude
          longitude
          address_line_1
          address_line_2
          pincode
          city
          state
        }
        isFavourite
      }
      status
      message
    }
  }
`;

export const getServices = params =>
  toPromise((resolve, reject) => {
    client
      .query({
        query: getServicesQuery,
        fetchPolicy: 'no-cache',
        variables: params,
      })
      .then(catchError(resolve, reject))
      .catch(reject);
  });
