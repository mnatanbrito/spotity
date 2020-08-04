import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  textLinkContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  textLinkText: {
    color: 'rgb(151, 151, 151)',
    fontFamily: 'Circular',
    fontSize: 14,
  },
});

export default function TextLink({ onPress, children }) {
  return (
    <View style={styles.textLinkContainer}>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.textLinkText}>{children}</Text>
      </TouchableOpacity>
    </View>
  );
}
