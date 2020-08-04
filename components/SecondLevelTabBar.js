/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { map } from 'lodash/collection';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';

import colors from '../colors';

const styles = StyleSheet.create({
  tabBarContainer: {
    height: 40,
    backgroundColor: 'rgb(18, 18, 18)',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    paddingHorizontal: 15,
  },
  tabTextWrapper: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  tabText: {
    fontSize: 16,
    fontFamily: 'Circular',
  },
});

export default function SecondLevelTabBar({
  state,
  descriptors,
  navigation,
  position,
}) {
  return (
    <View style={styles.tabBarContainer}>
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
            <View
              style={{
                ...styles.tabTextWrapper,
                borderBottomColor: isFocused
                  ? colors.pallete.green
                  : 'transparent',
                borderBottomWidth: isFocused ? 2 : 0,
                marginRight: index === state.routes.length - 1 ? 0 : 10,
              }}>
              <Animated.Text
                style={{
                  color: isFocused ? 'white' : 'rgb(127, 127, 127)',
                  ...styles.tabText,
                }}>
                {label}
              </Animated.Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
