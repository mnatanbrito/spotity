/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { map } from 'lodash/collection';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useSafeArea } from 'react-native-safe-area-context';
import Animated from 'react-native-reanimated';

import MusicScreen from './MusicScreen';
import PodcastsScreen from './PodcastsScreen';

const Tab = createMaterialTopTabNavigator();

const styles = StyleSheet.create({
  tabContainer: {
    height: 120,
    backgroundColor: 'rgb(18, 18, 18)',
    justifyContent: 'center',
  },
  tabWrapper: {
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
});

function TopTabBar({ state, descriptors, navigation, position }) {
  const insets = useSafeArea();

  return (
    <View style={styles.tabContainer}>
      <View style={[styles.tabWrapper, { paddingTop: insets.top }]}>
        {map(state.routes || [], (route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          const inputRange = map(state.routes, (_, i) => i);
          const opacity = Animated.interpolate(position, {
            inputRange,
            outputRange: inputRange.map(i => (i === index ? 1 : 0)),
          });

          return (
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityStates={isFocused ? ['selected'] : []}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}>
              <Animated.Text
                style={{
                  color: isFocused ? 'white' : 'rgb(127, 127, 127)',
                  fontSize: 28,
                  fontWeight: 'bold',
                  marginRight: index === state.routes.length - 1 ? 0 : 20,
                  fontFamily: 'Circular',
                }}>
                {label}
              </Animated.Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

const LibraryHome = () => (
  <Tab.Navigator
    tabBar={props => <TopTabBar {...props} />}
    initialRouteName="Music">
    <Tab.Screen name="Music" component={MusicScreen} />
    <Tab.Screen name="Podcasts" component={PodcastsScreen} />
  </Tab.Navigator>
);

export default LibraryHome;
