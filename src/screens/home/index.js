// @flow
import HomeScreen from './home';
import {getServices, getAvailableCities} from './redux/action';
import {connect} from 'react-redux';

const mapStateToProps = state => ({
  serviceTypes: state.serviceTypes,
});

const mapDispatchToProps = dispatch => ({
  getServices: () => dispatch(getServices()),
  getCities: () => dispatch(getAvailableCities()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeScreen);
