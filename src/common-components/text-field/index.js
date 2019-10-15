// @flow
import React from 'react';
import {StyleSheet, View, TextInput, Text} from 'react-native';
import {Colors, Fonts, FontSize} from 'shared/theme';
import {getHeight, getWidth} from 'utils';

type TTextInputProps = {
  style: any,
  labelStyle: any,
  textInputStyle: any,
  label: string,
  placeholder: string,
  value: any,
  password: boolean,
  onChangeText: (text: any) => void,
  handleBlur: () => void,
  handleFocus: () => void,
  isFloatingTextInput: boolean,
  isFocused: boolean,
};

export const FloatingLabelTextInput = (props: TTextInputProps) => {
  const {
    style,
    labelStyle,
    textInputStyle,
    label,
    value,
    onChangeText,
    handleBlur,
    handleFocus,
    isFloatingTextInput,
    placeholder,
    isFocused,
    password,
    ...otherProps
  } = props;

  let placeHolder = '';
  if (isFocused) {
    placeHolder = '';
  } else {
    placeHolder = placeholder;
  }

  let focus = '';
  let blur = '';
  if (isFloatingTextInput) {
    blur = handleBlur;
    focus = handleFocus;
  } else {
    blur = () => {};
    focus = () => {};
  }

  return (
    <View style={[styles.Wrapper, style]}>
      <View>
        {isFocused && <Text style={[styles.label, labelStyle]}>{label}</Text>}
        <TextInput
          style={[styles.textInput, textInputStyle]}
          secureTextEntry={password}
          value={value}
          onChangeText={onChangeText}
          onFocus={focus}
          onBlur={blur}
          placeholder={placeHolder}
          {...otherProps}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    color: Colors.ultramarineBlue,
    // fontFamily: Fonts.TTNormsMedium,
    top: -8,
    zIndex: 1,
    paddingHorizontal: 0,
    paddingRight: 10,
    backgroundColor: 'lightgrey',
    position: 'absolute',
  },
  textInput: {
    fontSize: FontSize.base,
    color: Colors.black,
    borderBottomWidth: 1,
    borderRadius: getHeight(6.7),
    borderBottomColor: Colors.ultramarineBlue,
    // fontFamily: Fonts.TTNormsRegular,
    padding: 10,
    paddingLeft: 0,
    // backgroundColor: 'red',
  },
  Wrapper: {
    height: getHeight(59.96),
    width: getWidth(277),
    paddingTop: 10,
    alignSelf: 'center',
  },
});
