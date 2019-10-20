// @flow
import React, {createRef} from 'react';
import styles from './styles';
import {
  View,
  ActivityIndicator,
  StyleSheet,
  Text,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import SearchField from '../../common-components/search-field';

import {TouchableText} from '../../common-components/touchable-text';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {Colors} from 'shared/theme';
import ServiceCard from './components/service-card-view';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      indexType: 0,
      selectedItem: '',
    };
    this.flatList = createRef();
  }

  static getDerivedStateFromProps(props, state) {
    const {serviceTypes} = props;
    const {selectedItem} = state;
    if (!selectedItem) {
      return {
        ...state,
        selectedItem: serviceTypes[0],
      };
    }
    return state;
  }

  componentDidMount() {
    const {getServiceTypes, getCities, getServices} = this.props;
    const {selectedItem} = this.state;
    // getServiceTypes();
    // getCities();
    getServices({
      serviceTypeId: selectedItem.id,
      userId: 1,
    });
  }

  onHandleChange = (key, value) => {
    this.setState({
      [key]: value,
    });
  };

  onPress = (item, index) => {
    if (this.flatList) {
      this.flatList.scrollToIndex({
        animated: true,
        index,
      });
      this.setState({
        indexType: index,
        selectedItem: item,
      });
    }
  };

  renderServiceType = (item, index) => {
    const {indexType} = this.state;
    return (
      <TouchableOpacity
        style={
          index === indexType
            ? styles.serviceFlatlistTouchSelected
            : styles.serviceFlatlistTouch
        }
        onPress={() => this.onPress(item, index)}>
        <Text
          style={
            indexType === index
              ? styles.serviceTextSelected
              : styles.serviceText
          }>
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  };

  renderServiceCard = () => {
    const {selectedItem} = this.state;
    const {services} = this.props;
    const selectedTypeServices = services[selectedItem.id];
    if (selectedTypeServices && selectedTypeServices.length > 0) {
      return (
        <ScrollView>
          {selectedTypeServices.map(service => (
            <ServiceCard service={service} />
          ))}
        </ScrollView>
      );
    }
    return (
      <View style={styles.notFound}>
        <Text style={styles.notFoundText}>No Service Found</Text>
      </View>
    );
  };

  render() {
    const {search, selectedItem} = this.state;

    const {logout, navigation, serviceTypes, services} = this.props;
    const resultText =
      !!selectedItem && selectedItem.count === 1 ? 'Result' : 'Results';
    return (
      <View style={styles.wrapper}>
        <TouchableText
          onHandlePress={() => navigation.navigate('SelectCity')}
          text="Location"
          children={
            <MaterialIcon
              name="arrow-drop-down"
              size={30}
              color={Colors.black}
            />
          }
          containerStyle={styles.containerStyle}
        />
        <SearchField
          clearSearchData={'clearSearch'}
          searchText={'searchText'}
          handleSearchCallback={() => {}}
          onHandleChange={this.onHandleChange}
          search={search}
        />
        <View style={styles.flatListView}>
          <FlatList
            ref={ref => (this.flatList = ref)}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.serviceFlatlist}
            data={serviceTypes}
            listKey={(item2, index) =>
              `D${(index.toString(), item2.toString())}`
            }
            horizontal
            bounces={false}
            renderItem={({item, index}) => this.renderServiceType(item, index)}
          />
        </View>
        <View style={styles.resultView}>
          <Text style={styles.resultViewText}>
            Showing {!!selectedItem && selectedItem.count} {resultText}
          </Text>
          <TouchableOpacity>
            <MaterialIcon name="filter-list" size={25} color={Colors.black} />
          </TouchableOpacity>
        </View>
        {this.renderServiceCard()}
      </View>
    );
  }
}
