import {StyleSheet, Platform} from 'react-native';
import {Colors, Fonts, FontSize} from 'shared/theme';
import {Metrics, getHeight, getWidth} from 'utils';

const deliveryAndDine = {
  flex: 1,
  flexDirection: 'row',
  paddingHorizontal: getWidth(18),
  justifyContent: 'space-between',
};
const isIOs = Platform.OS === 'ios';
export default StyleSheet.create({
  searchView: {
    paddingHorizontal: getWidth(20),
    marginTop: 3,
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderBottomColor: Colors.lineGrey,
    alignItems: 'center',
    backgroundColor: Colors.lightGray,
  },
  searchBox: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },

  searchInput: {
    marginLeft: getWidth(8),
    paddingVertical: 0,
  },
  textInputStyle: {
    borderRadius: 0,
    borderBottomColor: Colors.transparent,
    paddingLeft: 6,
    flexDirection: 'row',
    alignContent: 'flex-end',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  detailsTextInputStyle: {
    width: '100%',
    marginTop: 0,
    paddingTop: 0,
  },
});
