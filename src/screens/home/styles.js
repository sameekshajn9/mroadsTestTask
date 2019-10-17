import {StyleSheet} from 'react-native';
import {getHeight} from 'utils';
import {Colors, FontSize} from 'shared/theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});
