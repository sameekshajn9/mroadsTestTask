// @flow
import React from 'react';
import HomeScreen from './home';
import {getServices} from './redux/action';
import {connect} from 'react-redux';

const mapStateToProps = state => ({
  serviceTypes: state.serviceTypes,
});

const mapDispatchToProps = dispatch => ({
  getServices: () => dispatch(getServices()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeScreen);
