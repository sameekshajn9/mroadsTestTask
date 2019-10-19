// @flow
import React, {useState, useEffect} from 'react';
import {View, TextInput} from 'react-native';
import {LinkButton} from '../buttons';
import TextInputForm from '../login-form';
import {Colors} from 'shared/theme';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';

export default props => {
  const {onHandleChange, search} = props;
  return (
    <View style={styles.searchView}>
      <View style={styles.searchBox}>
        <MaterialIcon name="search" size={20} color={Colors.lightGrey} />
        <TextInputForm
          fields={{
            search: {
              label: 'Search',
              value: search,
            },
          }}
          onHandleChange={onHandleChange}
          showButton={false}
          isFloatingTextInput={false}
          textInputStyle={styles.textInputStyle}
          detailsTextInputStyle={styles.detailsTextInputStyle}
        />
      </View>
      {!!search && search.length > 0 && (
        <MaterialIcon
          onPress={() => onHandleChange('search', '')}
          name="close"
          size={20}
          color={Colors.black}
        />
      )}
    </View>
  );
};
