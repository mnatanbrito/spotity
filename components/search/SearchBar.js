/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

const styles = StyleSheet.create({
  searchBar: {
    height: 45,
    borderRadius: 5,
    backgroundColor: 'rgb(254, 254, 254)',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    paddingHorizontal: 15,
  },
  searchInput: {
    color: 'rgb(8, 8, 8)',
    fontFamily: 'Circular',
    fontSize: 14,
    flex: 1,
    fontWeight: '200',
  },
});

export default function SearchBar({ onFocus }) {
  return (
    <View style={styles.searchBar}>
      <FontAwesomeIcon
        icon={['fas', 'search']}
        size={22}
        color="rgb(104, 104, 105)"
        style={{
          alignSelf: 'center',
          marginRight: 10,
        }}
      />

      <TextInput
        style={styles.searchInput}
        placeholder="Artists, songs, or podcasts"
        placeholderTextColor="rgb(26, 26, 26)"
        onFocus={onFocus}
      />
    </View>
  );
}
