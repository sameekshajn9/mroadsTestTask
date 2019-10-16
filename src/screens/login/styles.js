import {StyleSheet} from 'react-native';
import {getHeight} from 'utils';
import {Colors, FontSize} from 'shared/theme';

export default StyleSheet.create({
  parentContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.lightGrey,
  },
  containerStyle: {
    marginTop: getHeight(50),
  },
  welcomeText: {
    fontSize: FontSize.mediumSmall * 2,
    marginTop: 20,
    color: Colors.white,
    fontWeight: 'bold',
  },
  sloganText: {
    fontSize: FontSize.large,
    marginTop: 10,
    color: Colors.white,
    fontWeight: '500',
  },
  loginTextView: {
    marginTop: getHeight(150),
    borderTopWidth: 5,
    borderStyle: 'solid',
    borderTopColor: Colors.white,
  },
  loginText: {
    marginTop: 10,
    fontSize: FontSize.mediumSmall * 2,
    color: Colors.white,
  },
  skipButtonView: {
    flex: 1,
    alignItems: 'flex-end',
    flexDirection: 'row',
    marginBottom: 10,
  },
  skipButtonText: {
    fontSize: FontSize.mediumlarge,
    color: Colors.white,
  },
  horizontal: {
    padding: 10,
  },
});
