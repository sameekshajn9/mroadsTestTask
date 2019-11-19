import React, {Component} from 'react';
import {dimensionScreen, AppColors} from '../theme';
import {
  SafeAreaView,
  View,
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import {connect} from 'react-redux';
import {loginUser} from '../store/actions';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      password: '',
    };
  }

  render() {
    const {userName, password} = this.state;
    return (
      <SafeAreaView>
        <View style={styles.parentWrapper}>
          {/* <Image
            source={require('../../assets/background.png')}
            style={{height: 45, width: 45}}

            //   height={45}
            //   width={45}
          />{' '} */}
          <View style={styles.LoginCard}>
            <View style={styles.addDetailWrapper}>
              <Text style={styles.labelText}>USERNAME OR EMAIL</Text>
              <TextInput
                value={userName}
                onChangeText={value => this.setState({userName: value})}
                placeholder={'example@email.com'}
                style={styles.textInputWrapper}
              />
              <View style={styles.inputLine} />
            </View>
            <View style={styles.addDetailWrapper}>
              <Text style={styles.labelText}>PASSWORD</Text>
              <TextInput
                value={password}
                placeholder={'********'}
                style={styles.textInputWrapper}
                onChangeText={value => this.setState({password: value})}
              />
              <View style={styles.inputLine} />
            </View>
            <Text
              style={[
                styles.labelText,
                {fontSize: 10, alignSelf: 'center', marginTop: 19},
              ]}>
              FORGOT YOUR PASSWORD?{' '}
            </Text>
            <TouchableOpacity onPress={this.handleOnButtonClick}>
              <View style={styles.loginButton}>
                <Text style={styles.buttonText}>LOGIN</Text>
              </View>
            </TouchableOpacity>
            <View style={styles.connectWithWrapper}>
              <View style={styles.lineView} />
              <Text style={{fontSize: 10, color: '#737273'}}>
                {' '}
                OR CONNECT WITH{' '}
              </Text>
              <View style={styles.lineView} />
            </View>
            <View style={styles.signMethods}>
              <TouchableOpacity>
                <Image
                  source={require('../../assets/facebook.png')}
                  style={{height: 45, width: 45}}

                  //   height={45}
                  //   width={45}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  source={require('../../assets/google.png')}
                  style={{height: 45, width: 45, marginLeft: 10}}
                  //   height={45}
                  //   wid`th={45}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }

  handleOnButtonClick = () => {
    const {userName, password} = this.state;
    const {loginUserAction} = this.props;
    loginUserAction({userName, password});
  };
}

const mapActionToProps = dispatch => {
  //   const loginUserAction = payload => dispatch(loginUser(payload));
  return {
    loginUserAction: payload => dispatch(loginUser(payload)),
  };
};

// const mapDispatchToProps = dispatch => {
//     return {
//       addItem: () => {
//         dispatch(addItem())
//       }
//     };
//   };

export default connect(
  null,
  mapActionToProps,
)(Login);

const styles = StyleSheet.create({
  parentWrapper: {
    height: dimensionScreen.screenHeight,
    width: dimensionScreen.screenWidth,
    // flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  LoginCard: {
    height: 417,
    width: 319,
    backgroundColor: AppColors.white,
    borderRadius: 5,
    shadowColor: 'rgba(0,0,0,0.50)',
    shadowRadius: 4,
    paddingHorizontal: 20,
    justifyContent: 'flex-end',
    paddingBottom: 20,
  },
  labelText: {
    color: AppColors.labelColor,
    fontSize: 8,
    // fontFamily: 'OpenSans',
  },
  textInputWrapper: {
    fontSize: 18,
    paddingVertical: 3,
    // fontFamily: 'OpenSans',
  },
  addDetailWrapper: {
    height: 43,
  },
  loginButton: {
    height: 45,
    width: 180,
    borderRadius: 23,
    backgroundColor: AppColors.buttonColor,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 19,
  },
  buttonText: {
    color: AppColors.white,
    fontSize: 14,
  },
  connectWithWrapper: {
    marginTop: 39,
    alignSelf: 'center',
    flexDirection: 'row',
    height: 15,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signMethods: {
    marginTop: 10,
    alignSelf: 'center',
    flexDirection: 'row',
    height: 50,
    paddingHorizontal: 20,
    alignItems: 'center',
    // justifyContent: 'space-evenly',
  },
  lineView: {
    height: 1,
    // widthz: 100,
    flex: 1,
    backgroundColor: '#CCC9C9',
  },
  inputLine: {
    height: 1,
    // widthz: 100,
    backgroundColor: '#B6B6B5',
  },
});
