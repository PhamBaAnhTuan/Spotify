import React from 'react';
// Router
import { Stack, Tabs } from 'expo-router';
// Icons
import { Ionicons } from '@expo/vector-icons';
// Context
import { useTheme } from '@/Context/ThemeContext';

const Layout = () => {
  const {theme} = useTheme();
  interface TabBarProps {
    focused: boolean;
    color: string;
    size: number;
    // name: string;
  }
  return (

    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveBackgroundColor: theme.bgc,
        tabBarInactiveBackgroundColor: theme.bgc,
        tabBarInactiveTintColor: 'gray',
        tabBarLabelStyle:{
          fontSize: 10,
          fontWeight: 'bold',
          marginBottom: 3,
        },
        tabBarActiveTintColor: theme.textColor,
        tabBarStyle:{
          height: 50,
          borderColor: theme.bgc
        }
      }}
    >
      <Tabs.Screen
        name='home'
        options={{
          title: 'Home',
          tabBarIcon(props: TabBarProps) {
            return (
              <Ionicons
                name={'home'}
                size={24}
                color={props.focused ? theme.textColor : 'gray'}
              />
            );
          }
        }}
      />
      <Tabs.Screen
        name='search'
        options={{
          title: 'Search',
          tabBarIcon(props: TabBarProps) {
            return (
              <Ionicons
                name={'search'}
                size={24}
                color={props.focused ? theme.textColor : 'gray'}
              />
            );
          }
        }}
      />
      <Tabs.Screen
        name='library'
        options={{
          title: 'Library',
          tabBarIcon(props: TabBarProps) {
            return (
              <Ionicons
                name={'library'}
                size={24}
                color={props.focused ? theme.textColor : 'gray'}
              />
            );
          }
        }}
      />
    </Tabs>
  )
}

export default Layout;