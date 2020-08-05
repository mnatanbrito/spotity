import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Animated,
  Easing,
} from 'react-native';
import { TapGestureHandler, State } from 'react-native-gesture-handler';

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
    paddingHorizontal: 15,
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

const Recent = ({ title, imageUrl }) => {
  let animatedValue = new Animated.Value(0);

  return (
    <TapGestureHandler
      minPointers={1}
      onHandlerStateChange={({ nativeEvent }) => {
        if (nativeEvent.state === State.BEGAN) {
          Animated.timing(animatedValue, {
            toValue: 1,
            duration: 300,
            easing: Easing.linear,
            useNativeDriver: true,
          }).start();
        } else {
          Animated.timing(animatedValue, {
            toValue: 0,
            duration: 300,
            easing: Easing.linear,
            useNativeDriver: true,
          }).start();
        }
      }}>
      <View style={styles.recentWrapper}>
        <Animated.Image
          style={{
            ...styles.suggestionImage,
            opacity: animatedValue.interpolate({
              inputRange: [0, 1],
              outputRange: [1, 0.7],
            }),
            transform: [
              {
                scale: animatedValue.interpolate({
                  inputRange: [0, 1],
                  outputRange: [1, 0.95],
                }),
              },
            ],
          }}
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
    </TapGestureHandler>
  );
};

const Recents = () => {
  return (
    <View style={styles.recentsWrapper}>
      <FlatList
        contentContainerStyle={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'stretch',
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
