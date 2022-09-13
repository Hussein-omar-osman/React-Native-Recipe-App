import { createDrawerNavigator } from '@react-navigation/drawer';
import AuthPage from '../Screens/Restaurant/AuthPage';
import HomeScreen from '../Screens/Restaurant/HomeScreen';
import CustomDrawer from './CustomDrawer';

const Drawer = createDrawerNavigator();

export default function SideNavigation() {
  return (
    <Drawer.Navigator
      screenOptions={{ headerShown: false }}
      drawerContent={(props) => <CustomDrawer {...props} />}
    >
      <Drawer.Screen name='Home' component={HomeScreen} />
      <Drawer.Screen name='Auth' component={AuthPage} />
    </Drawer.Navigator>
  );
}
