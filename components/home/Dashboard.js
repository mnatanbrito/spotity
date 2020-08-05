/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  ScrollView,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import { SafeAreaView, useSafeArea } from 'react-native-safe-area-context';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import Animated, { interpolate, Extrapolate } from 'react-native-reanimated';

import SectionBlock from '../SectionBlock';
import Suggestions from '../Suggestions';
import Recents from '../Recents';
import DashboardBackground from '../DashboardBackground';

const styles = StyleSheet.create({
  dashboardContainer: {
    flex: 1,
    paddingBottom: 0,
  },
  scrollView: {
    flex: 1,
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
    zIndex: 999,
    width: '100%',
    height: 25,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingRight: 15,
  },
  aligner: {
    marginTop: 0,
    height: 20,
    width: '100%',
  },
});

const SettingsBar = ({ onPress, opacity }) => (
  <Animated.View style={{ ...styles.settingsBarWrapper, opacity }}>
    <TouchableWithoutFeedback
      onPress={onPress}
      hitSlop={{
        top: 30,
        right: 30,
        bottom: 30,
        left: 30,
      }}>
      <FontAwesomeIcon
        size={20}
        icon={['fas', 'cog']}
        color="rgb(255,255,255)"
      />
    </TouchableWithoutFeedback>
  </Animated.View>
);

const Aligner = () => <View style={styles.aligner} />;

const Dashboard = ({ navigation }) => {
  const insets = useSafeArea();
  const settingsOpacity = new Animated.Value(0);

  const onScroll = evt => {
    const {
      nativeEvent: {
        contentOffset: { y },
      },
    } = evt;

    settingsOpacity.setValue(y);
  };

  const onPressSettings = () => {
    navigation.navigate('Settings');
  };

  return (
    <DashboardBackground>
      <SafeAreaView
        style={{
          ...styles.dashboardContainer,
          paddingTop: insets.top,
        }}>
        <SettingsBar
          opacity={interpolate(settingsOpacity, {
            inputRange: [0, 65],
            outputRange: [1, 0],
            extrapolate: Extrapolate.CLAMP,
          })}
          onPress={onPressSettings}
        />
        <ScrollView
          style={styles.scrollView}
          onScroll={onScroll}
          scrollEventThrottle={16}>
          <Aligner />
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
