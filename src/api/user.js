// @flow
import gql from 'graphql-tag';
import client from 'apollo';
import {toPromise, catchError} from 'utils';

// Create user
const createUserMutation = gql`
  mutation createUser($name: String!, $email: String, $contact: String!) {
    response: createUser(name: $name, email: $email, contact: $contact) {
      id
      name
      contact
      email
      token
      message
      status
    }
  }
`;

export const createUser = (params: TUserData) =>
  toPromise((resolve, reject) => {
    client
      .mutate({
        mutation: createUserMutation,
        variables: params,
      })
      .then(catchError(resolve, reject))
      .catch(reject);
  });
