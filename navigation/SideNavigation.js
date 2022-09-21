import { useContext } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AuthPage from '../Screens/Restaurant/AuthPage';
import HomeScreen from '../Screens/Restaurant/HomeScreen';
import CustomDrawer from './CustomDrawer';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { UserContext } from '../context/UserContext';
import Profile from '../Screens/Restaurant/Profile';
const Drawer = createDrawerNavigator();

export default function SideNavigation() {
  const { user } = useContext(UserContext);
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: 'tomato',
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#333',
        drawerLabelStyle: { marginLeft: -25, fontSize: 15 },
      }}
      drawerContent={(props) => <CustomDrawer {...props} />}
    >
      <Drawer.Screen
        name='Home'
        component={HomeScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name='md-home-sharp' size={size} color={color} />
          ),
        }}
      />
      {user == null ? (
        <Drawer.Screen
          name='Login'
          component={AuthPage}
          options={{
            drawerIcon: ({ color, size }) => (
              <Entypo name='login' size={size} color={color} />
            ),
          }}
        />
      ) : (
        <Drawer.Screen
          name='Profile'
          component={Profile}
          options={{
            drawerIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name='account'
                size={size}
                color={color}
              />
            ),
          }}
        />
      )}
    </Drawer.Navigator>
  );
}
