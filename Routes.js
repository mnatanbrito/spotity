import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Dashboard from './screens/Dashboard';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Tabs = () => (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Dashboard} />
    </Tab.Navigator>
);

export const Routes = ({ isAuthenticated }) => {
  return (
    <NavigationContainer>
      {isAuthenticated ? (
        <>
          <Stack.Screen name="TabNavigation" component={Tabs} />
        </>
      ) : null}
    </NavigationContainer>
  );
};
