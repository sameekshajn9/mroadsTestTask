import {StyleSheet, View, TextInput, Text} from 'react-native';
import {Colors, FontSize} from 'shared/theme';
import {getHeight, getWidth} from 'utils';

export const styles = StyleSheet.create({
  bodyStyle: {
    flex: 3,
    alignItems: 'flex-start',
  },
  bodyTextStyle: {
    fontSize: 20,
  },
  currentLocation: {
    marginHorizontal: 20,
    marginTop: getHeight(12),
    backgroundColor: Colors.white,
    flexDirection: 'row',
  },
  gpsLeftStyle: {
    flex: 0,
  },
  gpsBodyStyle: {
    // flex: ,
    alignItems: 'flex-start',
    marginHorizontal: 20,
  },

  gpsBodyTextStyle: {
    fontSize: 15,
    fontWeight: '300',
  },
});
