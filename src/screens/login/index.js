// @flow
import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import ui from '../../shared/constants';
import TextInputForm from '../../common-components/login-form';

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contact: '',
      isOptSent: false,
      isVerified: false,
      code: '',
      name: '',
      email: '',
    };
  }

  onHandleChange = (key, value) => {
    this.setState({
      [key]: value,
    });
  };

  sendOtp = () => {
    this.setState({
      isOptSent: true,
    });
  };

  verifyOtp = () => {
    this.setState({
      isOptSent: false,
      isVerified: true,
    });
  };

  fillDetails = () => {
    this.props.navigation.navigate('Main');
  };

  getTextField = () => {
    const {isOptSent, contact, code, isVerified, name, email} = this.state;
    const prop = {
      containerStyle: styles.containerStyle,
      onHandleChange: this.onHandleChange,
    };
    if (isVerified) {
      prop.onPressContinue = this.fillDetails;
      prop.fields = {
        name: {
          label: 'Name',
          value: name,
        },
        email: {
          label: 'Email',
          value: email,
        },
      };
    } else if (!isOptSent) {
      prop.onPressContinue = this.sendOtp;
      prop.fields = {
        contact: {
          label: 'Contact',
          value: contact,
        },
      };
    } else {
      prop.onPressContinue = this.verifyOtp;
      prop.fields = {
        code: {
          label: 'Verify Otp',
          value: code,
        },
      };
    }
    return <TextInputForm {...prop} />;
  };

  render() {
    const {isOptSent, isVerified} = this.state;
    const {header, text, button} = ui.auth.login;
    const {text: verifyText} = ui.auth.verify;
    const textFields = this.getTextField();
    const loginText = isOptSent
      ? verifyText
      : isVerified
      ? 'Enter Details'
      : text;
    return (
      <View style={[styles.parentContainer, styles.horizontal]}>
        <Text style={styles.welcomeText}>{header.text}</Text>
        <Text style={styles.sloganText}>{header.sloganText}</Text>
        <View style={styles.loginTextView}>
          <Text style={styles.loginText}>{loginText}</Text>
        </View>
        {textFields}
        {!isOptSent && !isVerified && (
          <View style={styles.skipButtonView}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Main')}>
              <Text style={styles.skipButtonText}>{button.text}</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
  }
}
