import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import defaultStyles from '../../styles';
import Dashboard from './Dashboard';
import Settings from './Settings';

const Stack = createStackNavigator();

export default function HomeRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: defaultStyles.stackHeaderStyle,
        headerTitleStyle: defaultStyles.stackHeaderTitleStyle,
      }}>
      <Stack.Screen
        name="Home"
        component={Dashboard}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
}
