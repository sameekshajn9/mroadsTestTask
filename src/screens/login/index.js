// @flow
import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import TextInputForm from '../../common-components/login-form';

export default class LoginScreen extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      contact: '',
    };
  }

  onHandleChange = (key, value) => {
    this.setState({
      [key]: value,
    });
  };

  onHandlePressContinue = () => {
    console.log(this.state.contact);
  };

  render() {
    const {contact} = this.state;
    return (
      <View style={[styles.parentContainer, styles.horizontal]}>
        <Text style={styles.welcomeText}>Welcome!</Text>
        <Text style={styles.sloganText}>It Starts With Us</Text>
        <View style={styles.loginTextView}>
          <Text style={styles.loginText}>Log In</Text>
        </View>
        <TextInputForm
          onPressContinue={this.onHandlePressContinue}
          onHandleChange={this.onHandleChange}
          containerStyle={styles.containerStyle}
          fields={{
            contact: {
              label: 'Contact',
              value: contact,
            },
          }}
        />
        <View style={styles.skipButtonView}>
          <Text style={styles.skipButtonText}>SKIP</Text>
        </View>
      </View>
    );
  }
}
