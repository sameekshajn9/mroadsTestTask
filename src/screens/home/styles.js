import {StyleSheet} from 'react-native';
import {getHeight} from 'utils';
import {Colors, FontSize} from 'shared/theme';

export default StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  containerStyle: {
    paddingVertical: 5,
    shadowColor: Colors.lightGrey,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowRadius: 2,
    shadowOpacity: 1,
  },
});
