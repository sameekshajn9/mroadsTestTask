// @flow
import React from 'react';
import {BackNavigationHeader} from '../../common-components/header';
import {View, Text, TouchableOpacity} from 'react-native';
import {Left, Body, Right} from 'native-base';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import {styles} from './styles';
import {Colors} from 'shared/theme';

export default props => {
  const {navigation} = props;
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
          <MaterialIcon
            name="gps-fixed"
            size={22}
            color={Colors.ultramarineBlue}
          />
        </Left>
        <Body style={styles.gpsBodyStyle}>
          <Text style={styles.gpsBodyTextStyle}>Use Current Location</Text>
        </Body>
      </TouchableOpacity>
    </View>
  );
};
