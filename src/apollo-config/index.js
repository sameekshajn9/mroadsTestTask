/* eslint-disable no-console */
import ApolloClient from 'apollo-client';
import {onError} from 'apollo-link-error';
import {setContext} from 'apollo-link-context';
import {createHttpLink} from 'apollo-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {ApolloLink} from 'apollo-link';
import {Alert} from 'react-native';
import {store} from 'appstore';
import apiConfig from './config';

const getDefaultHeaders = (operationName: string) => {
  if (
    operationName === 'createUser' ||
    operationName === 'checkIfUserExistsOrNot'
  ) {
    return {
      authorization: '',
    };
  }
  // const state = store.getState();
  return {
    // authorization: `Bearer ${state.session.accessToken}`,
  };
};

const errorLink = onError(({operation, graphQLErrors, networkError}) => {
  console.log(
    `[Apollo Client]: Processing operation: ${operation.operationName}`,
  );

  if (graphQLErrors) {
    graphQLErrors.map(({message, locations, path}) => {
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      );
      Alert.alert('Alert', message);
      return {message, locations, path};
    });
    // Alert.alert('Alert', 'Some technical issue at server side');
  }

  if (networkError) {
    console.log(`[Network error]: ${networkError}`);
    Alert.alert('Warning', 'Network error in apollo client');
  }
});

const bearerLink = setContext((request, previousContext) => {
  const {operationName} = request;
  const {bearerToken, ...restContext} = previousContext;
  const defaultHeaders = getDefaultHeaders(operationName);
  return {
    ...restContext,
    headers: {
      operation: operationName,
      key: 'foodClubIsAmazing',
      ...defaultHeaders,
    },
  };
});

const httpLink = createHttpLink({
  uri: apiConfig.togetherServer.apiUrl,
  credentials: 'include',
});

const client = new ApolloClient({
  link: ApolloLink.from([errorLink, bearerLink, httpLink]),
  cache: new InMemoryCache(),
  // request: async operationName => {
  //   const { operationName: operation } = operationName;
  //   const defaultHeaders = await getDefaultHeaders(operation);
  //   const headers = {
  //     ...defaultHeaders,
  //     operation,
  //   };
  //   operationName.setContext({ headers });
  // },
});

export default client;
