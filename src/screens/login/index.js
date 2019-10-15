// @flow
import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import DetailsTextInput from '../../common-components/login-form';

export default class LoginScreen extends React.PureComponent<any, any> {
  render() {
    return (
      <View style={[styles.viewContainer, styles.horizontal]}>
        <Text
          style={{
            fontSize: 30,
            marginTop: 20,
            color: 'white',
            fontWeight: 'bold',
          }}>
          Welcome!
        </Text>
        <Text
          style={{
            fontSize: 20,
            marginTop: 10,
            color: 'white',
            fontWeight: '500',
          }}>
          It Starts With Us
        </Text>
        <View
          style={{
            marginTop: 150,
            borderTopWidth: 5,
            borderStyle: 'solid',
            borderTopColor: 'white',
          }}>
          <Text
            style={{
              marginTop: 10,
              fontSize: 30,
              color: 'white',
            }}>
            Log In
          </Text>
        </View>
        <DetailsTextInput
          detailsTextInputStyle={styles.detailsTextInputStyle}
          textInputStyle={styles.textInputStyle}
          labelStyle={styles.labelStyle}
          loginButton={styles.loginButton}
          textButtonStyle={styles.textButtonStyle}
          onPressContinue={(name, password) =>
            this.handleOnPressContinue(name, password)
          }
          containerStyle={{
            marginTop: 50,
          }}
        />
        <View
          style={{
            flex: 1,
            alignItems: 'flex-end',
            flexDirection: 'row',
            marginBottom: 10,
          }}>
          <Text
            style={{
              fontSize: 17,
              color: 'white',
            }}>
            SKIP
          </Text>
        </View>
      </View>
    );
  }
}
