import {StyleSheet, Platform} from 'react-native';
import {Metrics, getHeight, getWidth} from 'utils';
import {Colors, Fonts, FontSize} from 'shared/theme';

export default StyleSheet.create({
  container: {
    height: Metrics.screenHeight,
    width: Metrics.screenWidth,
  },
  cityBackground: {
    width: Metrics.screenWidth,
    height: getHeight(280),
    opacity: 0.08,
  },
  scooterImage: {
    height: getHeight(200.3),
    width: getWidth(237.3),
    position: 'absolute',
    top: getHeight(143),
    left: getWidth(68),
  },
  foodClubLogo: {
    height: getHeight(61),
    width: getWidth(173),
    marginTop: getHeight(88),
    alignSelf: 'center',
    marginBottom: getHeight(39),
  },
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
    height: getHeight(38),
    width: Metrics.screenWidth * 0.74,
    marginTop: getHeight(33),
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
  innerSwitchStyle: {
    alignItems: 'center',
    borderWidth: 2,
    borderColor: Colors.lightWhite,
    justifyContent: 'center',
  },
  switchMainView: {
    width: getWidth(Metrics.screenWidth),
    flexDirection: 'row',
    position: 'absolute',
    bottom: -60,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  switchServerText: {
    marginHorizontal: 10,
    fontSize: 14,
    color: Colors.lightGrey,
  },
});
