import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { map } from 'lodash/collection';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { useSafeArea } from 'react-native-safe-area-context';

const styles = StyleSheet.create({
  wrapper: {
    height: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    backgroundColor: 'rgb(40,40,40)',
  },
  tabContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
});

const tabBarIcons = {
  Home: ['fas', 'home'],
  Search: ['fas', 'search'],
  'Your Library': ['fas', 'layer-group'],
};

const tabColors = {
  focused: 'rgb(255,255,255)',
  notFocused: 'rgb(150,150,150)',
};

const BottomTab = ({ state, descriptors, navigation }) => {
  const insets = useSafeArea();
  return (
    <View style={{ ...styles.wrapper, paddingBottom: insets.bottom }}>
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

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityStates={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tabContainer}>
            <FontAwesomeIcon
              size={28}
              icon={tabBarIcons[label]}
              color={isFocused ? tabColors['focused'] : tabColors['notFocused']}
            />

            <Text
              style={{
                fontSize: 11,
                marginVertical: 5,
                color: isFocused
                  ? tabColors['focused']
                  : tabColors['notFocused'],
              }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default BottomTab;
