import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Body, Left, Right} from 'native-base';
import {Metrics} from 'utils';

type THeaderProps = {
  container: any,
  body: TElements,
  left: TElements,
  right: TElements,
  bodyStyle: any,
  leftStyle: any,
  rightStyle: any,
};

export const Header = (props: THeaderProps) => {
  const {
    container,
    body,
    left,
    right,
    bodyStyle,
    leftStyle,
    rightStyle,
  } = props;

  return (
    <View style={[styles.container, container]}>
      {left && <Left style={leftStyle}>{left}</Left>}
      {body && <Body style={bodyStyle}>{body}</Body>}
      {right && <Right style={rightStyle}>{right}</Right>}
    </View>
  );
};

// const statusbarHeight = utility.getStatusBarHeight();

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    minHeight: Metrics.navBarHeight,
  },
});
