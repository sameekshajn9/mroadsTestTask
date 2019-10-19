// @flow
import React, {Component} from 'react';
import {BackNavigationHeader} from '../../common-components/header';
import {View, Text, TouchableOpacity, Picker} from 'react-native';
import {Left, Body} from 'native-base';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {styles} from './styles';
import {Colors} from 'shared/theme';

export default class SelectCityScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityName: 'fwef',
    };
  }
  render() {
    console.log(this.props, 'this.props');
    const {cityName} = this.state;
    const {navigation, availableCities} = this.props;
    return (
      <View style={styles.bodyStyle}>
        <BackNavigationHeader
          navigation={navigation}
          container={{
            backgroundColor: Colors.white,
          }}
          bodyStyle={styles.bodyStyle}
          body={<Text style={styles.bodyTextStyle}>Select City</Text>}
        />

        <TouchableOpacity style={styles.currentLocation}>
          <Left style={styles.gpsLeftStyle}>
            <MaterialIcon name="gps-fixed" size={22} color={Colors.red} />
          </Left>
          <Body style={styles.gpsBodyStyle}>
            <Text style={styles.gpsBodyTextStyle}>Use Current Location</Text>
          </Body>
        </TouchableOpacity>
        <View style={styles.availabilityView}>
          <Text style={styles.availabilityViewText}>
            Currently Available in
          </Text>
        </View>
        <Picker
          style={styles.pickerStyle}
          selectedValue={cityName}
          onValueChange={city => this.setState({cityName: city})}>
          {availableCities &&
            availableCities.length > 0 &&
            availableCities.map(city => (
              <Picker.Item label={city.name} value={city.cityCode} />
            ))}
        </Picker>
      </View>
    );
  }
}
