import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { SafeAreaView, useSafeArea } from 'react-native-safe-area-context';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import SectionBlock from '../components/SectionBlock';
import Suggestions from '../components/Suggestions';
import Recents from '../components/Recents';
import DashboardBackground from '../components/DashboardBackground';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    paddingTop: 50,
  },
  suggestionsWrapper: {
    flex: 1,
    paddingHorizontal: 15,
  },
  leftPaddingWrapper: {
    flex: 1,
    paddingLeft: 15,
  },
  settingsBarWrapper: {
    height: 25,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingRight: 15,
    marginBottom: 30,
  },
});

const SettingsBar = () => (
  <View style={styles.settingsBarWrapper}>
    <FontAwesomeIcon size={20} icon={['fas', 'cog']} color="rgb(255,255,255)" />
  </View>
);

const Dashboard = () => {
  const insets = useSafeArea();
  return (
    <DashboardBackground>
      <SafeAreaView
        style={{
          flex: 1,
          paddingTop: insets.top,
          paddingBottom: 0,
        }}>
        <ScrollView style={styles.scrollView}>
          <SettingsBar />
          <SectionBlock title="Good evening">
            <View style={styles.suggestionsWrapper}>
              <Suggestions />
            </View>
          </SectionBlock>
          <SectionBlock title="Recently played">
            <View style={styles.leftPaddingWrapper}>
              <Recents />
            </View>
          </SectionBlock>
          <SectionBlock title="Sleep">
            <View style={styles.leftPaddingWrapper}>
              <Recents />
            </View>
          </SectionBlock>
        </ScrollView>
      </SafeAreaView>
    </DashboardBackground>
  );
};

export default Dashboard;
