import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import { map } from 'lodash/collection';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    marginTop: 20,
  },
  genreTitle: {
    fontFamily: 'Circular',
    fontSize: 16,
    color: 'rgb(255, 255, 255)',
    marginBottom: 20,
  },
  genreCards: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    minHeight: 100,
  },
  genreCard: {
    borderRadius: 5,
    marginBottom: 15,
  },
  genreCardTitle: {
    position: 'absolute',
    top: 10,
    left: 10,
    maxWidth: '80%',
    zIndex: 999,
    fontFamily: 'Circular',
    fontSize: 16,
    color: 'rgb(255, 255, 255)',
  },
  genreCardImage: {
    borderRadius: 5,
  },
});

export default function CardList({ title, items, onItemSelected }) {
  const { width } = useWindowDimensions();

  return (
    <View style={styles.container}>
      <Text style={styles.genreTitle}>{title}</Text>
      <View style={styles.genreCards}>
        {map(items, (genre, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.7}
            onPress={() => onItemSelected(genre)}>
            <View style={styles.genreCard}>
              <Text style={styles.genreCardTitle}>{genre.name}</Text>
              <Image
                source={{
                  uri: genre.imageUrl,
                }}
                style={styles.genreCardImage}
                width={Math.floor(width / 2 - 22)}
                height={100}
              />
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
