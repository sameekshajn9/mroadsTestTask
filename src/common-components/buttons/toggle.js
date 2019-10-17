/* eslint-disable react-native/no-inline-styles */
// @flow
import React, {useState} from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import {Colors, Fonts, FontSize} from '../../theme';

type TToggleProps = {
  style: any,
  textStyle: any,
  text: string,
  activeColor: string,
  inActiveColor: string,
  ontoggle: (active: boolean) => void,
  defaultActive?: boolean,
};

export const Toggle = (props: TToggleProps) => {
  const {
    style,
    textStyle,
    text,
    activeColor,
    inActiveColor,
    ontoggle,
    defaultActive,
    ...otherProps
  } = props;
  const [checked, setChecked] = useState(defaultActive || false);
  const active = activeColor || Colors.ultramarineBlue;
  const inActive = inActiveColor || Colors.white;
  return (
    <TouchableOpacity
      style={[styles.button, style]}
      onPress={() => {
        ontoggle(!checked);
        setChecked(!checked);
      }}
      {...otherProps}>
      <View
        style={[
          styles.toggleView,
          {backgroundColor: checked ? active : inActive},
        ]}
      />
      <Text style={[styles.buttonText, textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
};

Toggle.defaultProps = {
  defaultActive: false,
};

const styles = {
  button: {
    alignItems: 'center',
    flexDirection: 'row',
    height: 22,
  },
  buttonText: {
    color: Colors.black,
    fontSize: FontSize.base,
    fontFamily: Fonts.LatoMedium,
    marginLeft: 5,
  },
  toggleView: {
    height: 13,
    width: 13,
    borderWidth: 1,
    borderColor: Colors.lightGrey,
  },
};
