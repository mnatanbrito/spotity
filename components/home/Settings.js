import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { useSafeArea } from 'react-native-safe-area-context';

import defaultStyles from '../../styles';
import colors from '../../colors';

const styles = StyleSheet.create({
  settingsContainer: {
    ...defaultStyles.container,
    backgroundColor: colors.pallete.black,
  },
});

export default function Settings() {
  const insets = useSafeArea();

  return (
    <View
      style={{
        ...styles.settingsContainer,
        paddingTop: insets.top,
      }}>
      <ScrollView style={defaultStyles.container} />
    </View>
  );
}
