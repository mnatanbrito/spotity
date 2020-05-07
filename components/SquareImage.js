import React from 'react';
import { Image } from 'react-native';

const SquareImage = ({ uri, width, height }) => {
  return (
    <Image
      source={{
        uri,
        width,
        height,
      }}
    />
  );
};

export default SquareImage;
