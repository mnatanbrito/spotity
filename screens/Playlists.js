import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { map, filter } from 'lodash/collection';

import SearchBar from '../components/SearchBar';
import SquareImage from '../components/SquareImage';
import RoundImage from '../components/RoundImage';

const styles = StyleSheet.create({
  playlistsWrapper: {
    flex: 1,
    backgroundColor: 'rgb(18,18,18)',
    paddingHorizontal: 15,
    paddingTop: 15,
  },
});

const imageMap = {
  artist: RoundImage,
  playlist: SquareImage,
};

const PlaylistItem = ({ type, title, songsCount }) => {
  const ImageComponent = imageMap[type];
  return (
    <View
      style={{
        height: 70,
        marginVertical: 5,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
      }}>
      <ImageComponent
        uri={'https://www.placehold.it/65x65'}
        width={65}
        height={64}
      />
      {/* <Image
      source={{
        uri: 'https://www.placehold.it/65x65',
        width: 65,
        height: 65,
      }}
    /> */}
      <View
        style={{
          flexGrow: 1,
          justifyContent: 'center',
          alignItems: 'flex-start',
          paddingHorizontal: 15,
        }}>
        <Text
          style={{
            fontFamily: 'Circular',
            color: 'white',
            fontSize: 16,
          }}>
          {title}
        </Text>
        <Text
          style={{
            fontFamily: 'Circular',
            color: 'rgb(151, 151, 151)',
            fontSize: 14,
          }}>
          {`${songsCount} songs`}
        </Text>
      </View>
    </View>
  );
};

const List = ({ playlists }) => (
  <>
    {map(playlists || [], playlist => (
      <PlaylistItem key={playlist.id} {...playlist} />
    ))}
  </>
);

const Playlists = () => {
  const [term, setTerm] = useState();

  const data = [
    {
      id: 1,
      title: 'Liked songs',
      songsCount: 146,
      type: 'artist',
    },
    {
      id: 2,
      title: 'Peaceful Piano',
      songsCount: 1546,
      type: 'playlist',
    },
    {
      id: 3,
      title: 'Treino Hip-Hop',
      songsCount: 445,
      type: 'playlist',
    },
  ];

  const onSearch = text => {
    setTerm(text);
  };

  return (
    <View style={styles.playlistsWrapper}>
      <ScrollView>
        <SearchBar onSearch={onSearch} />
        <List
          playlists={
            term
              ? filter(
                  data || [],
                  item =>
                    item.title.toLowerCase().indexOf(term.toLowerCase()) !== -1,
                )
              : data
          }
        />
      </ScrollView>
    </View>
  );
};

export default Playlists;
