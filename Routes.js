import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Dashboard from './screens/Dashboard';
import Search from './components/search/Search';
import SignIn from './screens/SignIn';
import BottomTab from './BottomTab';
import LibraryHome from './screens/Library';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Tabs = () => (
  <Tab.Navigator tabBar={props => <BottomTab {...props} />}>
    <Tab.Screen name="Home" component={Dashboard} icon />
    <Tab.Screen name="Search" component={Search} />
    <Tab.Screen name="Your Library" component={LibraryHome} />
  </Tab.Navigator>
);

export const Routes = ({ isAuthenticated }) => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator headerMode="none">
          {isAuthenticated ? (
            <>
              <Stack.Screen name="TabNavigation" component={Tabs} />
            </>
          ) : (
            <>
              <Stack.Screen name="SignIn" component={SignIn} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
