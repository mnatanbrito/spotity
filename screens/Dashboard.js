import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import SectionBlock from '../components/SectionBlock';
import Suggestions from '../components/Suggestions';
import Recents from '../components/Recents';

const styles = StyleSheet.create({
    scrollView: {
      flex: 1,
      backgroundColor: 'rgb(0, 0, 0)',
      paddingHorizontal: 15,
      paddingTop: 50,
    }
  });

const Dashboard = () => {
  return (
    <>
      <ScrollView style={styles.scrollView}>
        <SectionBlock title="Good evening">
          <Suggestions />
        </SectionBlock>
        <SectionBlock title="Recently played">
          <Recents />
        </SectionBlock>
        <SectionBlock title="Sleep">
          <Recents />
        </SectionBlock>
      </ScrollView>
    </>
  );
};

export default Dashboard;
