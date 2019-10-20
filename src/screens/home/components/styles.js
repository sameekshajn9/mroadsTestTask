import {StyleSheet} from 'react-native';
import {getHeight} from 'utils';
import {Colors, FontSize} from 'shared/theme';

export default StyleSheet.create({
  wrapper: {
    marginHorizontal: 15,
    marginVertical: 7,
    padding: 15,
    // paddingBottom: 10,
    //   borderWidth: 1,
    //   borderColor: 'grey',
    backgroundColor: 'white',
    shadowColor: Colors.lightGrey,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowRadius: 2,
    shadowOpacity: 1,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  name: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  ratingView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  ratingTextContainer: {
    marginLeft: 3,
    backgroundColor: 'green',
    opacity: 0.6,
    padding: 2,
    // borderRadius: 10,
  },
  ratingText: {
    color: 'white',
    fontSize: 12,
  },
  locationView: {
    flexDirection: 'row',
    alignItems: 'center',
    // marginLeft: 3,
    marginBottom: 3,
    // marginTop: 8,
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 1,
    paddingBottom: 4,
  },
  locationText: {
    // marginLeft: 3,
    padding: 3,
    paddingBottom: 0,
    fontSize: 13,
    color: '#3e414d',
  },
  priceView: {
    marginTop: 6,
    flexDirection: 'row',
    alignItems: 'center',
  },
  priceText: {
    fontSize: 15,
    marginHorizontal: 4,
    fontWeight: 'bold',
    color: 'red',
  },
  perPlateText: {
    fontSize: 12,
    fontWeight: '300',
    color: 'red',
  },
  imageView: {
    alignItems: 'flex-end',
  },
  imageStyle: {
    width: 100,
    height: 100,
  },
});
