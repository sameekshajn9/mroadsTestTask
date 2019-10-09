// @flow
// roboto
import {Platform} from 'react-native';

export const Fonts = {
  robotoRegular: 'Roboto-Regular',
  robotoBold: 'Roboto-Bold',
  latoBlack: 'Lato-Black',
  latoBold: 'Lato-Bold',
  latoHeavy: 'Lato-Heavy',
  latoLight: 'Lato-Light',
  latoMedium: 'Lato-Medium',
  latoRegular: 'Lato-Regular',
  latoSemibold: 'Lato-Semibold',
  TTNormsBlack: 'TTNorms-Black',
  TTNormsBold: 'TTNorms-Bold',
  TTNormsExtraBold: 'TTNorms-ExtraBold',
  TTNormsExtraLight: 'TTNorms-ExtraLight',
  TTNormsHeavy: 'TTNorms-Heavy',
  TTNormsLight: 'TTNorms-Light',
  TTNormsMedium: 'TTNorms-Medium',
  TTNormsRegular: 'TTNorms-Regular',
  TTNormsThin: 'TTNorms-Thin',
  baseFont: Platform.OS === 'ios' ? 'Avenir' : 'Product_Sans_Regular',
};
