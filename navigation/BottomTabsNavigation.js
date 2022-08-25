import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import HomeStack from './homeStack';
import SearchStack from './searchStack';
import CategoryStack from './categoryStack';
import CountryStack from './countryStack';
const Tab = createBottomTabNavigator();

function BottomTabsNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'grey',
        headerShown: false,
      }}
    >
      <Tab.Screen
        name='HomeTab'
        component={HomeStack}
        options={{
          tabBarBadge: 1,
          title: 'Home',
          tabBarIcon: ({ focused, size, color }) => (
            <MaterialIcons name='home' size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='SearchTab'
        component={SearchStack}
        options={{
          title: 'Search',
          tabBarIcon: ({ focused, size, color }) => (
            <MaterialIcons name='search' size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='CategoryTab'
        component={CategoryStack}
        options={{
          title: 'Meals',
          tabBarIcon: ({ focused, size, color }) => (
            <MaterialCommunityIcons
              name='microsoft-xbox-controller-menu'
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name='CountryTab'
        component={CountryStack}
        options={{
          title: 'Origin',
          tabBarIcon: ({ focused, size, color }) => (
            <Entypo name='location-pin' size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabsNavigation;
