import React from 'react';
import { Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  roundImage: {
    borderRadius: 100,
  },
});

const RoundImage = ({ uri, width, height }) => {
  return (
    <Image
      style={styles.roundImage}
      source={{
        uri,
        width,
        height,
      }}
    />
  );
};

export default RoundImage;
