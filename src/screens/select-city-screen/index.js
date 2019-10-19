// @flow
import SelectCityScreen from './select-city-screen';
// import {getServices, getAvailableCities} from './redux/action';
import {connect} from 'react-redux';

const mapStateToProps = state => ({
  serviceTypes: state.serviceTypes,
  availableCities: state.availableCities,
});

// const mapDispatchToProps = dispatch => ({
//   getServices: () => dispatch(getServices()),
//   getCities: () => dispatch(getAvailableCities()),
// });

export default connect(
  mapStateToProps,
  null,
)(SelectCityScreen);
