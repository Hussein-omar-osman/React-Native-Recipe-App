import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../Screens/Restaurant/HomeScreen';

const Drawer = createDrawerNavigator();

export default function SideNavigation() {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      <Drawer.Screen name='Home' component={HomeScreen} />
    </Drawer.Navigator>
  );
}
