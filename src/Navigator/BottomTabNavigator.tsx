import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from '../Screens/Home';
import { Profile } from '../Screens/Profile';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Anime } from '../Screens/Anime';

const Tab = createBottomTabNavigator();

export const BottomTabNavigator = () => {

  return (
    <Tab.Navigator initialRouteName='Home'
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline'; // Cambia el icono según si está enfocado o no
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline'; // Cambia el icono según si está enfocado o no
          }
          else if (route.name === 'Anime') {
            iconName = focused ? 'library' : 'person-outline'; // Cambia el icono según si está enfocado o no
          }

          // Retorna el ícono correspondiente de Ionicons
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',  // Cambia el color del ícono cuando la pestaña está activa
        tabBarInactiveTintColor: 'gray',
      }
      )}
    >
      <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Tab.Screen name="Anime" component={Anime} options={{ headerShown: false, }} />
      <Tab.Screen name="Profile" component={Profile} options={{ headerShown: false, }} />
    </Tab.Navigator>
  );
}