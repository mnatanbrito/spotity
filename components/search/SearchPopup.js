/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, { useState, useCallback, useRef, useEffect } from 'react';
import { View, StyleSheet, TextInput, ScrollView } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { filter } from 'lodash/collection';

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

const SearchInput = ({ onChange }) => {
  const inputRef = useRef();

  useEffect(() => {
    if (inputRef && inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
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
        onChangeText={onChange}
        maxLength={140}
        ref={inputRef}
      />
    </View>
  );
};

const SearchPopupBar = ({ onCancel, onChange }) => (
  <View style={styles.searchPopupBar}>
    <View
      style={{
        flex: 8,
      }}>
      <SearchInput onChange={onChange} />
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

const results = [
  {
    id: 1,
    name: 'Sertanejo 2020',
    mediaType: 'Playlist',
    imageUrl: 'https://www.placehold.it/48x48',
  },
  {
    id: 2,
    name: 'death bed (coffee for your head)',
    mediaType: 'Song',
    artists: [
      {
        id: 1,
        name: 'Powfu',
      },
      {
        id: 2,
        name: 'beabadoobee',
      },
    ],
    imageUrl: 'https://www.placehold.it/48x48',
  },
  {
    id: 3,
    name: 'money machine',
    mediaType: 'Song',
    artists: [
      {
        id: 3,
        name: '100 gecs',
      },
      {
        id: 4,
        name: 'Laura Les',
      },
    ],
    imageUrl: 'https://www.placehold.it/48x48',
  },
  {
    id: 4,
    name: 'Soft Pop Hits',
    mediaType: 'Playlist',
    imageUrl: 'https://www.placehold.it/48x48',
  },
  {
    id: 5,
    name: 'Royal Blood',
    mediaType: 'Artist',
    imageUrl: 'https://www.placehold.it/48x48',
  },
];

export default function SearchPopup({ onCancel }) {
  const [term, setTerm] = useState();

  const onChangeTerm = searchTerm => {
    setTerm(searchTerm);
  };

  const onClearResult = result => {
    console.log(`limpando resultado ${JSON.stringify(result)}`);
  };

  const onResultSelected = result => {
    console.log(`resultado selecionado ${JSON.stringify(result)}`);
  };

  const MemoizedRecentSearches = useCallback(
    () => (
      <RecentSearches
        searches={
          term
            ? filter(
                results,
                item =>
                  item.name.toLowerCase().indexOf(term.toLowerCase()) !== -1,
              )
            : results
        }
        onClearResult={onClearResult}
        onResultSelected={onResultSelected}
      />
    ),
    [term],
  );

  return (
    <View style={styles.searchPopupBarContainer}>
      <SearchPopupBar onCancel={onCancel} onChange={onChangeTerm} />
      <ScrollView style={{ ...styles.recentSearchesWrapper }}>
        <MemoizedRecentSearches />
      </ScrollView>
    </View>
  );
}
