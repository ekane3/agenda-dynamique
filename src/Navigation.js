import React from 'react';
import { useColorScheme, useWindowDimensions, ImageBackground, Image } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';
import {Contact, EventDetails, Home, Map, Settings, Search} from './screens';
import {CustomDrawerContent} from './components';
import * as Theme from './style/theme';
import Poppins from './style/fonts';

const {Navigator, Screen} = createDrawerNavigator();

const DrawerNavigation = () => {
  const colorScheme = useColorScheme();
  const dimensions = useWindowDimensions();
  const isLargeScreen = dimensions.width >= 768;
  return (
    <NavigationContainer
      theme={colorScheme === 'dark' ? Theme.Dark : Theme.Light}
      backBehavior="none">
      <Navigator
        initialRouteName="Home"
        drawerType={isLargeScreen ? 'permanent' : 'slide'}
        drawerStyle={{
          width: isLargeScreen ? null : '87%',
          backgroundColor: colorScheme === 'dark' ? '#111421' : '#fff',
        }}
        drawerContentOptions={{
          activeBackgroundColor:null,
          labelStyle: {
            fontFamily: Poppins.SemiBold,
            fontSize: 20,
          },
        }}
        drawerContent={props => (
          <CustomDrawerContent
            props={props}
            colorScheme={colorScheme}
            Theme={Theme}
          />
        )}>
        <Screen
          name="Home"
          options={{
            drawerLabel: 'Accueil',
            drawerIcon: ({focused, color, size}) => (
              <Icon name="home" size={size} color={color} />
            ),
          }}
          component={Home}
        />
       
        <Screen 
          name="Map" 
          options={{
            drawerLabel: 'Carte',
            drawerIcon: ({focused, color, size}) => (
              <Icon name="map" size={size} color={color} />
            ),
          }}
          component={Map} 
        />
        <Screen
          name="Search"
          options={{
            drawerLabel: 'Recherche',
            drawerIcon: ({focused, color, size}) => (
              <Icon name="search" size={size} color={color} />
            ),
          }}
          component={Search}
        />
        <Screen
          name="Contact"
          options={{
            drawerLabel: 'Contact',
            drawerIcon: ({focused, color, size}) => (
              <Icon name="call" size={size} color={color} />
            ),
          }}
          component={Contact}
        />
        <Screen
          name="Settings"
          options={{
            drawerLabel: 'Paramètres',
            drawerIcon: ({focused, color, size}) => (
              <Icon name="settings" size={size} color={color} />
            ),
          }}
          component={Settings}
        />
         <Screen 
          name="EventDetails" 
          component={EventDetails} 
          options={{
            drawerLabel: 'Accueil',
            drawerIcon: ({focused, color, size}) => (
              <Icon name="home" size={size} color={color} />
            ),
          }}
          />
      </Navigator>
    </NavigationContainer>
  );
};

export default DrawerNavigation;
