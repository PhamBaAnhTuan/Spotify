import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer} from 'expo-router/drawer';
import { DrawerActions } from '@react-navigation/native';
// icons
import { AntDesign } from '@expo/vector-icons';
// context
import { useTheme } from '@/Context/ThemeContext';

export default function Layout() {
   const { theme } = useTheme();
   return (
      <GestureHandlerRootView style={{ flex: 1 }}>
         <Drawer
            screenOptions={{
               drawerStyle: {
                  
               },
               headerShown: false,
               // headerTitleStyle:{
               //    fontSize: 0
               // }
               drawerPosition: 'right',
               drawerType: 'front',
               drawerActiveTintColor: theme.bgc,
               // drawerActiveBackgroundColor: 'black',
               drawerInactiveTintColor: 'gray',
            }}
         >
            <Drawer.Screen
               name="Profile"
               options={{
                  drawerLabel: 'Profile',
                  title: 'Profile',
                  drawerIcon: () => (
                     <AntDesign name="profile" size={24} color={theme.bgc} />
                  )
               }}
            />
            <Drawer.Screen
               name="Setting"
               options={{
                  drawerLabel: 'Setting',
                  title: 'Setting',
                  drawerIcon: () => (
                     <AntDesign name="setting" size={24} color={theme.bgc} />
                  )
               }}
            />
         </Drawer>
      </GestureHandlerRootView>
   );
}
