/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { map } from 'lodash/collection';

import defaultStyles from '../../styles';

const styles = StyleSheet.create({
  searchResultContainer: {
    height: 65,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  mediaArt: {
    width: 48,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mediaMetadata: {
    flex: 8,
    paddingVertical: 5,
    justifyContent: 'space-around',
    alignItems: 'stretch',
    paddingHorizontal: 10,
  },
  actionContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  basicMedia: {},
  artistMedia: {
    borderRadius: 50,
  },
  mediaMetadataTitle: {
    // ...defaultStyles.withRedBorder,
    fontFamily: 'Circular',
    fontSize: 18,
    color: 'white',
    maxWidth: '90%',
  },
  mediaMetadataSubtitle: {
    fontFamily: 'Circular',
    fontSize: 14,
    color: 'rgb(179, 179, 179)',
    marginRight: 10,
  },
  artistsContainer: {
    maxWidth: '90%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
});

const styleMap = {
  Playlist: styles.basicMedia,
  Artist: styles.artistMedia,
};

export default function SearchResult({
  id,
  imageUrl,
  name,
  mediaType,
  artists,
  onClearResult,
  onResultSelected,
}) {
  return (
    <View style={styles.searchResultContainer}>
      <View style={styles.mediaArt}>
        <TouchableOpacity onPress={onResultSelected}>
          <Image
            style={styleMap[mediaType]}
            source={{ uri: imageUrl }}
            width={48}
            height={48}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.mediaMetadata}>
        <TouchableOpacity onPress={onResultSelected}>
          <Text
            style={styles.mediaMetadataTitle}
            ellipsizeMode="tail"
            numberOfLines={1}>
            {name}
          </Text>

          {mediaType !== 'Song' && (
            <Text style={styles.mediaMetadataSubtitle} ellipsizeMode="tail">
              {mediaType}
            </Text>
          )}
          {mediaType === 'Song' && (
            <View style={styles.artistsContainer}>
              {map(artists, artist => (
                <Text
                  key={artist.id}
                  style={styles.mediaMetadataSubtitle}
                  ellipsizeMode="tail">
                  {artist.name}
                </Text>
              ))}
            </View>
          )}
        </TouchableOpacity>
      </View>
      <View style={styles.actionContainer}>
        <TouchableOpacity onPress={onClearResult}>
          <FontAwesomeIcon
            icon={['fas', 'times']}
            size={18}
            color="rgb(179, 179, 179)"
            style={{
              alignSelf: 'center',
              marginRight: 10,
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
