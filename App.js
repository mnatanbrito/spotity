import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, StatusBar } from 'react-native';

import SectionBlock from './components/SectionBlock';
import Suggestions from './components/Suggestions';
import Recents from './components/Recents';
import { Routes } from './Routes';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.wrapper}>
        <Routes />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: 'rgb(0, 0, 0)',
    paddingHorizontal: 15,
    paddingTop: 50,
  },
  wrapper: {
    flex: 1,
  },
});

export default App;
