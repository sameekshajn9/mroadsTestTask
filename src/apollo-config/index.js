/* eslint-disable no-console */
import ApolloClient from 'apollo-client';
import {onError} from 'apollo-link-error';
import {setContext} from 'apollo-link-context';
import {createHttpLink} from 'apollo-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {ApolloLink} from 'apollo-link';
import config from './config';
// import store from '../store';
// console.log(store, 'aa');

// console.log(appStore());
// const {store, persistor} = appStore();
// console.log(store());
const getDefaultHeaders = (operationName: string) => {
  if (operationName === 'createUser') {
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
      return {message, locations, path};
    });
  }

  if (networkError) {
    console.log(`[Network error]: ${networkError}`);
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
  uri: config.togetherServer,
  // credentials: 'include',
});

const client = new ApolloClient({
  // uri: 'http://192.168.1.18:3000/graphql',
  link: ApolloLink.from([errorLink, bearerLink, httpLink]),
  // uri: 'http://192.168.1.11:3000/graphql',
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
