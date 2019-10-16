// @flow
import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

export default class LoginScreen extends React.PureComponent<any, any> {
  render() {
    return (
      <View style={[styles.container, styles.horizontal]}>
        <Text>Inspirations</Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Auth')}>
          <Text>Login Again</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});
