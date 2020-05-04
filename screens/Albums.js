import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  albumsWrapper: {
    flex: 1,
    backgroundColor: 'rgb(18,18,18)',
    paddingHorizontal: 15,
    paddingTop: 15,
  },
});

const Albums = () => {
  return (
    <View style={styles.albumsWrapper}>
      <Text />
    </View>
  );
};

export default Albums;
