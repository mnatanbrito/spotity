/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import defaultStyles from '../../styles';
import SearchBar from './SearchBar';
import BrowseAll from './BrowseAll';
import TopGenres from './TopGenres';
import PopularPodcasts from './PopularPodcasts';
import SearchPopup from './SearchPopup';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'rgb(18, 18, 18)',
    paddingHorizontal: 15,
  },
  screenTitle: {
    fontFamily: 'Circular',
    fontSize: 28,
    color: 'white',
    marginVertical: 20,
  },
});

export default function SearchHome({ navigation, route }) {
  const [searching, setSearching] = useState(false);

  const onGenreSelected = genre => {
    console.log(JSON.stringify(genre));
  };
  const onPodcastSelected = podcast => {
    console.log(JSON.stringify(podcast));
  };
  const onItemSelected = item => {
    console.log(JSON.stringify(item));
  };
  const onFocusSearchBar = () => {
    setSearching(true);
  };

  return searching ? (
    <SearchPopup
      onCancel={() => {
        setSearching(false);
      }}
    />
  ) : (
    <ScrollView
      style={{
        ...defaultStyles.container,
        backgroundColor: 'rgb(18, 18, 18)',
        overflow: 'hidden',
      }}>
      <View style={styles.wrapper}>
        <Text style={styles.screenTitle}>{route.name}</Text>
        <SearchBar onFocus={onFocusSearchBar} />
        <TopGenres
          genres={[
            { id: 1, name: 'Rock', imageUrl: 'https://placehold.it/365x205' },
            { id: 2, name: 'Pop', imageUrl: 'https://placehold.it/365x205' },
          ]}
          onGenreSelected={onGenreSelected}
        />
        <PopularPodcasts
          podcasts={[
            {
              id: 1,
              name: 'Society & Culture',
              imageUrl: 'https://placehold.it/365x205',
            },
            {
              id: 2,
              name: 'Business',
              imageUrl: 'https://placehold.it/365x205',
            },
          ]}
          onPodcastSelected={onPodcastSelected}
        />
        <BrowseAll
          items={[
            {
              id: 1,
              name: 'Podcasts',
              imageUrl: 'https://placehold.it/365x205',
            },
            {
              id: 2,
              name: 'Made for you',
              imageUrl: 'https://placehold.it/365x205',
            },
            {
              id: 3,
              name: 'COVID-19 Guide',
              imageUrl: 'https://placehold.it/365x205',
            },
            {
              id: 4,
              name: 'Charts',
              imageUrl: 'https://placehold.it/365x205',
            },
            {
              id: 5,
              name: 'New Releases',
              imageUrl: 'https://placehold.it/365x205',
            },
            {
              id: 6,
              name: 'Radio',
              imageUrl: 'https://placehold.it/365x205',
            },
          ]}
          onItemSelected={onItemSelected}
        />
      </View>
    </ScrollView>
  );
}
