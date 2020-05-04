import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  artistsWrapper: {
    flex: 1,
    backgroundColor: 'rgb(18,18,18)',
    paddingHorizontal: 15,
    paddingTop: 15,
  },
});

const Artists = () => {
  return (
    <View style={styles.artistsWrapper}>
      <Text>Artists</Text>
    </View>
  );
};

export default Artists;
