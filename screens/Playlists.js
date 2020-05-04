import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import SearchBar from '../components/SearchBar';

const styles = StyleSheet.create({
  playlistsWrapper: {
    flex: 1,
    backgroundColor: 'rgb(18,18,18)',
    paddingHorizontal: 15,
    paddingTop: 15,
  },
});

const Playlists = () => {
  return (
    <View style={styles.playlistsWrapper}>
      <View>
        <SearchBar />
      </View>
    </View>
  );
};

export default Playlists;
