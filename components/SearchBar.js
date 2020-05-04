import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import defaultStyles from '../styles';

const styles = StyleSheet.create({
  searchBarWrapper: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'stretch',
    paddingHorizontal: 5,
  },
  searchComponentsWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch',
  },
  button: {
    backgroundColor: 'rgb(40, 40, 40)',
    borderRadius: 5,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'rgb(151, 151, 151)',
    fontFamily: 'Circular',
    fontSize: 14,
  },
});

const SearchButton = ({ onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.button}>
      <Text style={styles.buttonText}>Filters</Text>
    </View>
  </TouchableOpacity>
);

const SearchBar = ({ onPress = () => null }) => {
  return (
    <View style={styles.searchBarWrapper}>
      <View style={styles.searchComponentsWrapper}>
        <View
          style={{
            width: '75%',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'stretch',
            paddingHorizontal: 15,
            backgroundColor: 'rgb(40, 40, 40)',
            borderRadius: 5,
          }}>
          <View />
        </View>
        <View
          style={{
            width: '20%',
            justifyContent: 'center',
          }}>
          <SearchButton onPress={onPress} />
        </View>
      </View>
    </View>
  );
};

export default SearchBar;
