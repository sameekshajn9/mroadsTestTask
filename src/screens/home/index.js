// @flow
import HomeScreen from './home';
import {resetStore} from 'appstore/actions';
import {
  getServicesRequest,
  getAvailableCities,
  getServiceTypes,
} from './redux/action';
import {connect} from 'react-redux';

const mapStateToProps = state => ({
  serviceTypes: state.serviceTypes,
});

const mapDispatchToProps = dispatch => ({
  getServiceTypes: () => dispatch(getServiceTypes()),
  getCities: () => dispatch(getAvailableCities()),
  logout: () => dispatch(resetStore()),
  getServices: payload => dispatch(getServicesRequest(payload)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeScreen);
