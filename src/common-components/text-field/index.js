// @flow
import React, {useState} from 'react';
import {StyleSheet, View, TextInput, Text} from 'react-native';
import {Colors, FontSize} from 'shared/theme';
import {Left, Right, Body} from 'native-base';
import {getHeight, getWidth} from 'utils';

export const FloatingLabelTextInput = props => {
  const {
    style,
    labelStyle,
    textInputStyle,
    label,
    value,
    onChangeText,
    children,
    handleBlur,
    handleFocus,
    isFloatingTextInput,
    placeholder,
    password,
    left,
    right,
    body,
    ...otherProps
  } = props;
  const [isFocused, setFocus] = useState(false);

  let placeHolder = isFocused ? '' : placeholder;

  let focus = isFloatingTextInput ? () => setFocus(true) : () => {};
  let blur = isFloatingTextInput ? () => setFocus(false) : () => {};

  return (
    <View style={[styles.Wrapper, style]}>
      <View>
        {isFocused && <Text style={[styles.label, labelStyle]}>{label}</Text>}
        <Left>{left}</Left>
        <TextInput
          style={[styles.textInput, textInputStyle]}
          secureTextEntry={password}
          value={value}
          onChangeText={onChangeText}
          onFocus={focus}
          onBlur={blur}
          placeholder={placeHolder}
          {...otherProps}>
          {children}
        </TextInput>
        {/* <Right
          style={{
            backgroundColor: 'red',
            flex: 1,
          }}>
          <Text>Test</Text>
        </Right> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    color: Colors.white,
    // fontFamily: Fonts.TTNormsMedium,
    top: -8,
    zIndex: 1,
    paddingHorizontal: 0,
    paddingRight: 10,
    backgroundColor: Colors.lightGrey,
    position: 'absolute',
  },
  textInput: {
    fontSize: FontSize.base,
    color: Colors.black,
    borderBottomWidth: 1,
    borderRadius: getHeight(6.7),
    borderBottomColor: Colors.transparent,
    // fontFamily: Fonts.TTNormsRegular,
    padding: 10,
    paddingLeft: 0,
    // backgroundColor: 'red',
  },
  Wrapper: {
    // height: getHeight(59.96),
    width: getWidth(277),
    paddingTop: 10,
    marginTop: 10,
    alignSelf: 'center',
  },
});
