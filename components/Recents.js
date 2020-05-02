import React from 'react';
import { View, Image, Text, StyleSheet, FlatList } from 'react-native';

const recents = [
  {
    title: 'Perfect combination',
    imageUrl: 'https://www.placehold.it/65x65',
  },
  {
    title: 'Disturbed',
    imageUrl: 'https://www.placehold.it/65x65',
  },
  {
    title: 'Sam Smith',
    imageUrl: 'https://www.placehold.it/65x65',
  },
  {
    title: 'V',
    imageUrl: 'https://www.placehold.it/65x65',
  },
  {
    title: 'Foo Fighters',
    imageUrl: 'https://www.placehold.it/65x65',
  },
  {
    title: 'Charlie Brown Jr.',
    imageUrl: 'https://www.placehold.it/65x65',
  },
];
const styles = StyleSheet.create({
  recentsWrapper: {
    height: 165,
  },
  recentWrapper: {
    justifyContent: 'space-between',
    alignItems: 'stretch',
    paddingHorizontal: 15
  },
  recentImage: {
    borderRadius: 100,
  },
  recentTitleWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  recentTitle: {
    color: 'rgb(255, 255, 255)',
  },
});

const Recent = ({ title, imageUrl }) => (
  <View style={styles.recentWrapper}>
    <Image
      style={styles.suggestionImage}
      width={128}
      height={128}
      source={{
        uri: imageUrl,
        width: 128,
        height: 128,
      }}
      borderRadius={100}
    />
    <View style={styles.recentTitleWrapper}>
      <Text style={styles.recentTitle}>{title}</Text>
    </View>
  </View>
);

const Recents = () => {
  return (
    <View style={styles.recentsWrapper}>
      <FlatList
        contentContainerStyle={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'stretch'
        }}
        style={{
          flex: 1,
        }}
        horizontal
        data={recents}
        renderItem={({ item }) => <Recent {...item} />}
        keyExtractor={item => item.title}
      />
    </View>
  );
};

export default Recents;
