// @flow
import React, {useState} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {FloatingLabelTextInput} from '../text-field';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

const TextInputForm = props => {
  const {
    onPressContinue,
    detailsTextInputStyle,
    textInputStyle,
    children,
    labelStyle,
    loginButtonStyle,
    containerStyle,
    fields,
    onHandleChange,
    isFloatingTextInput = true,
    showButton = true,
  } = props;
  const fieldKeys = Object.keys(fields);
  return (
    <View style={[styles.alignItem, containerStyle]}>
      {fieldKeys &&
        fieldKeys.map(fieldKey => (
          <FloatingLabelTextInput
            children={children}
            key={fields[fieldKey].label}
            isFloatingTextInput={isFloatingTextInput}
            password={false}
            style={[styles.detailsTextInput, detailsTextInputStyle]}
            textInputStyle={textInputStyle}
            labelStyle={labelStyle}
            label={fields[fieldKey].label}
            placeholder={fields[fieldKey].label}
            value={fields[fieldKey].value}
            onChangeText={userInput => onHandleChange(fieldKey, userInput)}
          />
        ))}
      {showButton && (
        <TouchableOpacity
          style={[styles.loginButton, loginButtonStyle]}
          onPress={onPressContinue}>
          <Icon name="chevron-right" size={20} color="black" />
        </TouchableOpacity>
      )}
    </View>
  );
};

TextInputForm.defaultProps = {
  textInputStyle: null,
  labelStyle: null,
  loginButton: null,
  textButtonStyle: null,
};

// const handleUserDetails = (name: string, password: string, onPressContinue) => {
//   if (name === '' && password === '') {
//     Alert.alert(
//       'Warning!!',
//       'Name and Password can not be empty!!',
//       [{text: 'OK', onPress: () => {}}, {text: 'Cancel', onPress: () => {}}],
//       {cancelable: false},
//     );
//   } else if (name === '') {
//     Alert.alert(
//       'Warning!!',
//       'Name can not be empty!!',
//       [{text: 'OK', onPress: () => {}}, {text: 'Cancel', onPress: () => {}}],
//       {cancelable: false},
//     );
//   } else if (password === '') {
//     Alert.alert(
//       'Warning!!',
//       'Password can not be empty!!',
//       [{text: 'OK', onPress: () => {}}, {text: 'Cancel', onPress: () => {}}],
//       {cancelable: false},
//     );
//   } else {
//     onPressContinue(name, password);
//   }
// };

export default TextInputForm;
