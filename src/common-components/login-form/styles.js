import {StyleSheet, Platform} from 'react-native';
import {Metrics, getHeight, getWidth} from 'utils';
import {Colors, FontSize} from 'shared/theme';

export default StyleSheet.create({
  detailsTextInputStyle: {
    height: getHeight(50),
    width: getWidth(277),
    marginBottom: getHeight(9.3),
  },
  textInputStyle: {
    borderColor: Colors.lightGrey,
    borderRadius: getHeight(6.7),
    height: getHeight(45),
    width: Metrics.screenWidth * 0.74,
    // fontFamily: Fonts.TTNormsMedium,
    fontSize: FontSize.small,
    lineHeight: Platform.OS === 'android' ? getHeight(20) : getHeight(0),
    paddingHorizontal: 20,
    paddingVertical: 0,
  },
  labelStyle: {
    color: Colors.lightGrey,
    // fontFamily: Fonts.TTNormsMedium,
    fontSize: FontSize.small,
    top: -6,
  },
  loginButton: {
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 60,
    width: getHeight(70),
    height: getHeight(70),
    borderRadius: getHeight(35),
    backgroundColor: 'white',
  },
  textButtonStyle: {
    width: Metrics.screenWidth * 0.74,
    // fontFamily: Fonts.TTNormsMedium,
    fontSize: FontSize.small + 1,
    letterSpacing: 0.65,
    lineHeight: getHeight(50),
    bottom: Platform.OS === 'ios' ? 5 : 0,
  },
  safeAreaView: {
    flex: 1,
  },
  alignItem: {
    alignItems: 'center',
  },
});
