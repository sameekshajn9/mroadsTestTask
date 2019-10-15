// @flow
import React, {useState} from 'react';
import {View, Alert, TouchableOpacity} from 'react-native';
import {FloatingLabelTextInput} from '../text-field';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

// type TDetailsProps = {
//   onPressContinue: (name: string, password: string) => void,
//   detailsTextInputStyle: any,
//   textInputStyle?: any,
//   labelStyle?: any,
//   loginButton?: any,
//   textButtonStyle?: any,
// };

const DetailsTextInput = props => {
  const {
    onPressContinue,
    detailsTextInputStyle,
    textInputStyle,
    labelStyle,
    loginButton,
    textButtonStyle,
    containerStyle,
  } = props;
  const [nameFocus, setNameFocus] = useState(false);
  const [name, setName] = useState('');
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [password, setPassword] = useState('');
  return (
    <View
      style={{
        alignItems: 'center',
        ...containerStyle,
      }}>
      <FloatingLabelTextInput
        isFloatingTextInput
        password={false}
        style={[styles.detailsTextInput, detailsTextInputStyle]}
        textInputStyle={textInputStyle}
        labelStyle={labelStyle}
        isFocused={nameFocus}
        label="Contact"
        placeholder="Contact"
        value={name}
        onChangeText={userInput => setName(userInput)}
        handleFocus={() => setNameFocus(true)}
        handleBlur={() => setNameFocus(false)}
      />
      <TouchableOpacity
        style={{
          alignContent: 'center',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 60,
          width: 60,
          height: 60,
          borderRadius: 30,
          backgroundColor: 'white',
        }}>
        <Icon name="chevron-right" size={20} color="black" />
      </TouchableOpacity>
    </View>
  );
};

DetailsTextInput.defaultProps = {
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

export default DetailsTextInput;
