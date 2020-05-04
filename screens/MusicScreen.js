import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import SecondLevelTabBar from '../components/SecondLevelTabBar';
import Playlists from './Playlists';
import Artists from './Artists';
import Albums from './Albums';

const Tab = createMaterialTopTabNavigator();

const MusicScreen = () => {
  return (
    <Tab.Navigator tabBar={props => <SecondLevelTabBar {...props} />}>
      <Tab.Screen name="Playlists" component={Playlists} />
      <Tab.Screen name="Artists" component={Artists} />
      <Tab.Screen name="Albums" component={Albums} />
    </Tab.Navigator>
  );
};

export default MusicScreen;
