import React from 'react';
import {
  useColorScheme,
  useWindowDimensions,
  ImageBackground,
  Image,
} from 'react-native';
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
        drawerType={isLargeScreen ? 'permanent' : 'back'}
        drawerStyle={{
          width: isLargeScreen ? null : '100%',
        }}
        drawerContentOptions={{
          activeBackgroundColor: null,
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
              <Icon name="rocket" size={size} color={color} />
            ),
          }}
          component={Home}
        />
        <Screen name="EventDetails" component={EventDetails} />
        <Screen name="Map" options={{drawerLabel: 'Carte'}} component={Map} />
        <Screen
          name="Contact"
          options={{drawerLabel: 'Contact'}}
          component={Contact}
        />
        <Screen
          name="Search"
          options={{drawerLabel: 'Recherche'}}
          component={Search}
        />
        <Screen
          name="Settings"
          options={{drawerLabel: 'Paramètres'}}
          component={Settings}
        />
      </Navigator>
    </NavigationContainer>
  );
};

export default DrawerNavigation;
