// @flow
import React, {createRef} from 'react';
import styles from './styles';
import {
  View,
  ActivityIndicator,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

import {TouchableText} from '../../../common-components/touchable-text';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {Colors} from 'shared/theme';

export default class ServiceCard extends React.Component {
  render() {
    const {service} = this.props;
    const {address} = service;
    return (
      <View style={styles.wrapper}>
        <View style={styles.container}>
          <View>
            <Text style={styles.name}>{service.name}</Text>
            <View style={styles.ratingView}>
              <MaterialIcon name="star" size={15} color={Colors.lightGrey} />
              <MaterialIcon name="star" size={15} color={Colors.lightGrey} />
              <MaterialIcon name="star" size={15} color={Colors.lightGrey} />
              <MaterialIcon
                name="star-border"
                size={15}
                color={Colors.lightGrey}
              />
              <View style={styles.ratingTextContainer}>
                <Text style={styles.ratingText}>4.2</Text>
              </View>
            </View>

            <View style={styles.locationView}>
              <FontAwesomeIcon size={16} name="map-marker" />

              <Text style={styles.locationText}>
                {address.address_line_1}, {address.city}
              </Text>
            </View>
            <View style={styles.priceView}>
              <FontAwesomeIcon size={18} color={'red'} name="rupee" />
              <Text style={styles.priceText}>700</Text>
              <Text style={styles.perPlateText}>per plate</Text>
            </View>
          </View>
          <View style={styles.imageView}>
            <ImageBackground
              source={{
                uri:
                  'https://www.stemsuk.com/upload/files/products/lg_20159082-babies-dummy.jpg',
              }}
              style={styles.imageStyle}
            />
          </View>
        </View>
      </View>
    );
  }
}
