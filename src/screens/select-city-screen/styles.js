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
    marginTop: getHeight(15),
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
  availabilityView: {
    width: '100%',
    backgroundColor: Colors.red,
    marginVertical: 10,
    paddingVertical: 10,
  },
  availabilityViewText: {
    fontSize: 20,
    fontWeight: '500',
    flexDirection: 'row',
    alignSelf: 'center',
    textAlign: 'center',
    color: Colors.white,
  },
  pickerStyle: {
    width: '100%',
    flex: 1,
  },
  // picker,
});
