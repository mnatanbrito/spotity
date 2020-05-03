import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import colors from '../colors';

const suggestions = [
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
  suggestionsWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    flexWrap: 'wrap',
  },
  suggestionBadge: {
    width: 185,
    height: 65,
    borderRadius: 5,
    backgroundColor: colors.suggestionsBadgeBackground,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    marginBottom: 10,
  },
  suggestionTitleWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    paddingHorizontal: 10,
  },
  suggestionImage: {
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  suggestionTitle: {
    color: 'rgb(255, 255, 255)',
    textAlign: 'left',
  },
});

const Suggestions = ({}) => {
  const navigation = useNavigation();

  const onSuggestionPressed = item => {
    navigation.navigate('DetalheObjeto', {
      item,
    });
  };

  return (
    <View style={styles.suggestionsWrapper}>
      {(suggestions || []).map(({ title, imageUrl }, index) => (
        <TouchableOpacity
          activeOpacity={.8}
          key={title}
          style={styles.suggestionBadge}
          onPress={() => onSuggestionPressed({ title, imageUrl })}>
          <Image
            style={styles.suggestionImage}
            width={65}
            height={65}
            source={{
              uri: imageUrl,
              width: 65,
              height: 65,
            }}
          />
          <View style={styles.suggestionTitleWrapper}>
            <Text style={styles.suggestionTitle}>{title}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Suggestions;
