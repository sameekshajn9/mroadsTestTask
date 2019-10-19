// @flow
import React from 'react';
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

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  //   {
  //     id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
  //     title: 'First Item',
  //   },
  //   {
  //     id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
  //     title: 'Second Item',
  //   },
  //   {
  //     id: '58694a0f-3da1-471f-bd96-145571e29d72',
  //     title: 'Third Item',
  //   },
  //   {
  //     id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
  //     title: 'First Item',
  //   },
  //   {
  //     id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
  //     title: 'Second Item',
  //   },
  //   {
  //     id: '58694a0f-3da1-471f-bd96-145571e29d72',
  //     title: 'Third Item',
  //   },
];
const Item = ({title}) => (
  <View
    style={[
      styles.item,
      {
        // backgroundColor: 'red',
        marginTop: 10,
        marginHorizontal: 1,
        borderBottomColor: 'black',
        borderBottomWidth: 10,
        // flex: 1,
        // flexDirection: 'row',
      },
    ]}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

export default class HomeScreen extends React.PureComponent<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
    };
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

  render() {
    const {search} = this.state;
    const {logout, navigation} = this.props;
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

        {/* <Text>Home</Text> */}
        {/* <FlatList
          style={{
            flex: 1,
            flexDirection: 'row',
            // backgroundColor: 'yellow',
          }}
          contentContainerStyle={{
            flexDirection: 'row',
          }}
          data={DATA}
          renderItem={({item}) => <Item title={item.title} />}
          keyExtractor={item => item.id}
        />
        <TouchableOpacity
          onPress={logout}
          style={[
            styles.item,
            {
              // backgroundColor: 'red',
              marginTop: 10,
              marginHorizontal: 1,
              borderBottomColor: 'black',
              borderBottomWidth: 10,
              // flex: 1,
              // flexDirection: 'row',
            },
          ]}>
          <Text style={styles.title}>{'Logout'}</Text>
        </TouchableOpacity> */}
      </View>
    );
  }
}
