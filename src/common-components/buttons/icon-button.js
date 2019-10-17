// @flow
import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Colors} from 'shared/theme';

type TIconButtonProps = {
  style: any,
  icon: TElement,
};

export const IconButton = (props: TIconButtonProps) => {
  const {style, icon, ...otherProps} = props;
  return (
    <TouchableOpacity style={[styles.button, style]} {...otherProps}>
      {icon}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 10.7,
    height: 50,
    backgroundColor: Colors.ultramarineLowOpacity,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
