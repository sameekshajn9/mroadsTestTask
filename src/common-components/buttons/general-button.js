// @flow
import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Colors, Fonts, FontSize} from 'shared/theme';
import {getHeight, getWidth} from 'utils';

type TGeneralButtonProps = {
  style: any,
  buttonHolderStyle: any,
  textStyle: any,
  text: string,
  gradientColor?: any,
  isDisabled?: boolean,
};

export const GeneralButton = (props: TGeneralButtonProps) => {
  const {
    style,
    text,
    buttonHolderStyle,
    textStyle,
    gradientColor,
    isDisabled,
    ...otherProps
  } = props;
  return (
    <View style={styles.shadow}>
      <LinearGradient
        colors={gradientColor}
        start={{x: 0, y: 0}}
        end={{x: 1.8, y: 0}}
        style={[styles.buttonWrapper, style]}>
        <TouchableOpacity
          style={[styles.buttonHolder, buttonHolderStyle]}
          {...otherProps}
          disabled={isDisabled}>
          <Text style={[styles.buttonText, textStyle]}>{text}</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

GeneralButton.defaultProps = {
  gradientColor: [Colors.ultramarineBlue, Colors.pictonBlue],
  isDisabled: false,
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: Colors.blueShadow,
    shadowOffset: {
      height: 1.2,
      width: 2,
    },
    backgroundColor: Colors.transparent,
    shadowRadius: 1,
    shadowOpacity: getHeight(10),
  },
  buttonWrapper: {
    height: getHeight(50),
    width: getWidth(277),
    borderRadius: getHeight(25),
    elevation: 2,
    alignSelf: 'center',
  },
  buttonHolder: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: Colors.white,
    textAlign: 'center',
    letterSpacing: 0.867,
    fontSize: FontSize.mediumSmall,
    fontFamily: Fonts.LatoBold,
  },
});
