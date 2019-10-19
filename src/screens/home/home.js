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
  componentDidMount() {
    const {getServices, getCities} = this.props;
    // getServices();
    getCities();
  }
  render() {
    const {logout} = this.props;
    return (
      <View style={[styles.container, styles.horizontal]}>
        {/* <Text>Home</Text> */}
        <FlatList
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
          onPress={() => this.props.navigation.navigate('SelectCity')}
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
          <Text style={styles.title}>{'Location'}</Text>
        </TouchableOpacity>
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
        </TouchableOpacity>
      </View>
    );
  }
}