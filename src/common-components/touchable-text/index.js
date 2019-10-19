// @flow
import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Left, Right, Body} from 'native-base';
import {Colors} from 'shared/theme';

export const TouchableText = props => {
  const {
    containerStyle,
    touchableViewStyle,
    touchableTextStyle,
    children,
    leftIcon,
    leftStyle,
    bodyStyle,
    rightStyle,
    rightIcon,
    text,
    onHandlePress,
  } = props;

  return (
    <View style={[styles.container, containerStyle]}>
      {leftIcon && <Left style={leftStyle}>{leftIcon}</Left>}
      <Body style={bodyStyle}>
        <TouchableOpacity
          style={[styles.touchableContainer, touchableViewStyle]}
          onPress={onHandlePress}>
          <Text style={[styles.touchableText, touchableTextStyle]}>{text}</Text>
          {children}
        </TouchableOpacity>
      </Body>
      {rightIcon && <Right style={rightStyle}>{rightIcon}</Right>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 0,
    flexDirection: 'row',
    backgroundColor: Colors.white,
  },
  touchableContainer: {
    alignSelf: 'center',
    flexDirection: 'row',
    width: 110,
  },
  touchableText: {
    fontSize: 20,
    alignSelf: 'center',
    fontWeight: '500',
  },
});
