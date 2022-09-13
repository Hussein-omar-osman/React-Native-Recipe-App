import { createDrawerNavigator } from '@react-navigation/drawer';
import AuthPage from '../Screens/Restaurant/AuthPage';
import HomeScreen from '../Screens/Restaurant/HomeScreen';
import CustomDrawer from './CustomDrawer';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
const Drawer = createDrawerNavigator();

export default function SideNavigation() {
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
      <Drawer.Screen
        name='Auth'
        component={AuthPage}
        options={{
          drawerIcon: ({ color, size }) => (
            <Entypo name='login' size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
