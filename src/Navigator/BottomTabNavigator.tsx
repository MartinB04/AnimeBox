import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from '../Screens/Home';
import { Profile } from '../Screens/Profile';

const Tab = createBottomTabNavigator();

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator initialRouteName='Home'>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}