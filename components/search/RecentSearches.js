import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { map } from 'lodash/collection';

import defaultStyles from '../../styles';
import SearchResult from './SearchResult';

const styles = StyleSheet.create({
  recentSearchesText: {
    fontFamily: 'Circular',
    fontSize: 18,
    color: 'rgb(255, 255, 255)',
    marginBottom: 20,
  },
});

export default function RecentSearches({
  searches,
  onClearResult,
  onResultSelected,
}) {
  return (
    <View style={defaultStyles.container}>
      <Text style={styles.recentSearchesText}>Recent searches</Text>
      {map(searches, (result, index) => (
        <SearchResult
          key={index}
          {...result}
          onClearResult={() => onClearResult(result)}
          onResultSelected={() => onResultSelected(result)}
        />
      ))}
    </View>
  );
}
