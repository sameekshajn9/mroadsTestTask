import {StyleSheet} from 'react-native';
import {getHeight} from 'utils';
import {Colors, FontSize} from 'shared/theme';

export default StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#f7faf9',
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
  serviceText: {
    color: Colors.gray,
    // fontFamily: Fonts.LatoRegular,
    fontSize: FontSize.mediumSmall,
    marginHorizontal: 20,
    textTransform: 'capitalize',
  },
  serviceTextSelected: {
    color: Colors.black,
    // fontFamily: Fonts.LatoBold,
    fontSize: FontSize.mediumSmall,
    textTransform: 'capitalize',
    marginHorizontal: 20,
  },
  serviceFlatlist: {
    marginTop: getHeight(14),
    height: 30,
    marginBottom: 10,
    justifyContent: 'center',
  },
  serviceFlatlistTouch: {
    height: 40,
    alignItems: 'center',
    borderBottomWidth: 4,
    borderBottomColor: Colors.white,
  },
  serviceFlatlistTouchSelected: {
    alignItems: 'center',
    borderBottomWidth: 4,
    borderBottomColor: Colors.red,
  },
  bottomStyle: {marginBottom: getHeight(25)},
  flatListView: {
    height: getHeight(50),
    borderTopColor: 'lightgrey',
    borderTopWidth: 1,
  },
  resultView: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginHorizontal: 10,
    marginVertical: 10,
  },
  resultViewText: {
    fontSize: FontSize.base,
    fontWeight: 'bold',
    marginHorizontal: 4,
    color: Colors.lightGray,
  },
});
