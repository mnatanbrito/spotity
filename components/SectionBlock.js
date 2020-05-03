import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import colors from '../colors';

const styles = StyleSheet.create({
  sectionBlockWrapper: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  sectionBlockTitle: {
    fontSize: 25,
    color: colors.sectionTitle,
    paddingHorizontal: 15,
  },
  sectionChildrenWrapper: {
    paddingVertical: 20,
    marginBottom: 20,
  },
});

const SectionBlock = ({ title, children }) => {
  return (
    <View style={styles.sectionBlockWrapper}>
      <Text style={styles.sectionBlockTitle}>{title}</Text>
      <View style={styles.sectionChildrenWrapper}>{children}</View>
    </View>
  );
};

export default SectionBlock;
