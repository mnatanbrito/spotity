import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import defaultStyles from '../../styles';

const styles = StyleSheet.create({
  recentSearchesText: {
    fontFamily: 'Circular',
    fontSize: 16,
    color: 'rgb(255, 255, 255)',
    marginBottom: 20,
  },
});

export default function RecentSearches({ searches }) {
  return (
    <View style={defaultStyles.container}>
      <Text style={styles.recentSearchesText}>Recent searches</Text>
    </View>
  );
}
