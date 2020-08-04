/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { SafeAreaView, useSafeArea } from 'react-native-safe-area-context';

import SearchHome from './SearchHome';

export default function Search(props) {
  const insets = useSafeArea();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'rgb(18, 18, 18)',
        paddingTop: insets.top,
      }}>
      <SearchHome {...props} />
    </SafeAreaView>
  );
}
