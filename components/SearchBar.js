import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import defaultStyles from '../styles';

const styles = StyleSheet.create({
  searchBarWrapper: {
    minHeight: 60,
    justifyContent: 'space-between',
    alignItems: 'stretch',
  },
  searchComponentsWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch',
  },

  searchField: {
    // width: '75%',
    minHeight: 45,
    flex: 4,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    paddingHorizontal: 15,
    backgroundColor: 'rgb(40, 40, 40)',
    borderRadius: 5,
  },
  searchButtonWrapper: {
    minHeight: 45,
    flex: 1,
    // width: '20%',
    paddingHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  searchInput: {
    flex: 1,
    color: 'rgb(151, 151, 151)',
    fontFamily: 'Circular',
    fontSize: 14,
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

const SearchBar = ({ onSearch = () => null }) => {
  const [hasFocus, setHasFocus] = useState(false);
  const [term, setTerm] = useState('');

  return (
    <View style={styles.searchBarWrapper}>
      <View style={styles.searchComponentsWrapper}>
        <View style={styles.searchField}>
          <FontAwesomeIcon
            icon={['fas', 'search']}
            size={16}
            color="rgb(151, 151, 151)"
            style={{
              alignSelf: 'center',
              marginRight: 10,
            }}
          />
          <TextInput
            placeholder="Find in playlists"
            placeholderTextColor="rgb(151, 151, 151)"
            style={styles.searchInput}
            value={term}
            onFocus={() => setHasFocus(true)}
            onBlur={() => setHasFocus(false)}
            onKeyPress={({ nativeEvent }) => {
              if (nativeEvent.key === 'Backspace') {
                setTerm(term.slice(0, -1));
              } else {
                setTerm(value => value + nativeEvent.key);
              }

              onSearch && onSearch(term);
            }}
          />
        </View>
        <View style={styles.searchButtonWrapper}>
          {!hasFocus && <SearchButton onPress={() => onSearch(term)} />}
          {hasFocus && (
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'stretch',
              }}>
              <TouchableOpacity
                onPress={() => {
                  console.log('BOOM');
                  setTerm('');

                  onSearch && onSearch('');
                }}>
                <Text
                  style={{
                    color: 'rgb(151, 151, 151)',
                    fontFamily: 'Circular',
                    fontSize: 14,
                  }}>
                  Cancel
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

export default SearchBar;
