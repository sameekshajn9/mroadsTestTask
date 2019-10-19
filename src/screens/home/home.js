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
} from 'react-native';
import SearchField from '../../common-components/search-field';

import {TouchableText} from '../../common-components/touchable-text';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {Colors} from 'shared/theme';

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
  }

  componentDidMount() {
    const {getServices, getCities} = this.props;
    getServices();
    getCities();
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

  render() {
    const {search, selectedItem} = this.state;

    const {logout, navigation, serviceTypes} = this.props;
    const resultText = selectedItem.count === 1 ? 'Result' : 'Results';
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
            {selectedItem.count} {resultText}
          </Text>
          <TouchableOpacity>
            <MaterialIcon name="filter-list" size={20} color={Colors.black} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
