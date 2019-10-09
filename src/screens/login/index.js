// @flow
import React from 'react';
import {View, ActivityIndicator, StyleSheet, Text} from 'react-native';

export default class LoginScreen extends React.PureComponent<any, any> {
  render() {
    return (
      <View style={[styles.container, styles.horizontal]}>
        <Text>Login</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'red',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});
