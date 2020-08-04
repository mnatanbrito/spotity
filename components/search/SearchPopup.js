/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, StyleSheet, TextInput, ScrollView } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import defaultStyles from '../../styles';
import TextLink from '../shared/TextLink';
import RecentSearches from './RecentSearches';

const styles = StyleSheet.create({
  searchPopupBarContainer: {
    ...defaultStyles.container,
    backgroundColor: 'rgb(25, 25, 25)',
    paddingHorizontal: 15,
    paddingTop: 15,
  },
  searchPopupBar: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  searchInput: {
    backgroundColor: 'rgb(36, 36, 36)',
    height: 35,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  searchInputText: {
    fontFamily: 'Circular',
    color: 'rgb(218, 218, 218)',
    fontSize: 12,
    flex: 1,
  },
  cancelButton: {
    fontFamily: 'Circular',
    color: 'rgb(238, 238, 238)',
    fontSize: 12,
  },
  recentSearchesWrapper: {
    ...defaultStyles.container,
    paddingTop: 20,
  },
});

const SearchInput = () => (
  <View style={styles.searchInput}>
    <FontAwesomeIcon
      icon={['fas', 'search']}
      size={18}
      color="rgb(104, 104, 105)"
      style={{
        alignSelf: 'center',
        marginRight: 10,
      }}
    />
    <TextInput
      placeholderTextColor="rgb(218, 218, 218)"
      style={styles.searchInputText}
    />
  </View>
);

const SearchPopupBar = ({ onCancel }) => (
  <View style={styles.searchPopupBar}>
    <View
      style={{
        flex: 8,
      }}>
      <SearchInput />
    </View>
    <View
      style={{
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <TextLink onPress={onCancel}>Cancel</TextLink>
    </View>
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <FontAwesomeIcon
        icon={['fas', 'camera']}
        size={22}
        color="rgb(104, 104, 105)"
        style={{
          alignSelf: 'center',
          marginRight: 10,
        }}
      />
    </View>
  </View>
);

export default function SearchPopup({ onCancel }) {
  return (
    <View style={styles.searchPopupBarContainer}>
      <SearchPopupBar onCancel={onCancel} />
      <ScrollView style={{ ...styles.recentSearchesWrapper }}>
        <RecentSearches />
      </ScrollView>
    </View>
  );
}
