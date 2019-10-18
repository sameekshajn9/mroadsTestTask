import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Body, Left, Right} from 'native-base';
import {Metrics, getHeight, getWidth} from 'utils';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {IconButton} from '../buttons';
import {Colors} from 'shared/theme';

type THeaderProps = {
  container?: any,
  body: TElements,
  right?: TElements,
  bodyStyle: any,
  rightStyle: any,
  navigation: TNavigation,
  size?: number,
  iconStyle?: any,
  backIconStyle?: any,
};

export const BackNavigationHeader = (props: THeaderProps) => {
  const {
    container,
    body,
    right,
    bodyStyle,
    rightStyle,
    leftStyle,
    navigation,
    backIconStyle,
    size,
    iconStyle,
  } = props;
  return (
    <View style={[styles.container, container]}>
      <Left style={leftStyle}>
        <IconButton
          style={[styles.leftButton, backIconStyle]}
          icon={
            <MaterialIcon
              name="keyboard-arrow-left"
              size={size}
              color={Colors.red}
              style={iconStyle}
            />
          }
          onPress={() => {
            navigation.goBack();
          }}
        />
      </Left>
      {body && <Body style={bodyStyle}>{body}</Body>}
      {right && <Right style={rightStyle}>{right}</Right>}
    </View>
  );
};

BackNavigationHeader.defaultProps = {
  size: 35,
  iconStyle: null,
  container: null,
  right: <View />,
  backIconStyle: null,
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    minHeight: Metrics.navBarHeight,
    shadowColor: Colors.lightGrey,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowRadius: 2,
    shadowOpacity: 1,
  },
  leftButton: {
    height: getHeight(50),
    width: getHeight(50),
    marginLeft: getWidth(10),
    backgroundColor: Colors.transparent,
  },
});
