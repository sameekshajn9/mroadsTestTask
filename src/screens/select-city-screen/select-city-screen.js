// @flow
import React, {Component} from 'react';
import {BackNavigationHeader} from '../../common-components/header';
import {View, Text, TouchableOpacity, Picker} from 'react-native';
import {Left, Body} from 'native-base';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {styles} from './styles';
import {Colors} from 'shared/theme';
import {TouchableText} from '../../common-components/touchable-text';

export default class SelectCityScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityName: '',
    };
  }
  render() {
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

        <TouchableText
          onHandlePress={() => navigation.navigate('SelectCity')}
          text="Use Current Location"
          leftIcon={
            <MaterialIcon name="gps-fixed" size={22} color={Colors.red} />
          }
          leftStyle={styles.gpsLeftStyle}
          bodyStyle={styles.gpsBodyStyle}
          touchableTextStyle={styles.touchableTextStyle}
          containerStyle={styles.currentLocation}
          touchableViewStyle={styles.touchableViewStyle}
        />
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
              <Picker.Item
                key={city.id}
                label={city.name}
                value={city.cityCode}
              />
            ))}
        </Picker>
      </View>
    );
  }
}
