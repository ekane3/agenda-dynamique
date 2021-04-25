import React, {useEffect, useState} from 'react';
import {
  useColorScheme,
  useWindowDimensions,
  ImageBackground,
  Image,
  View,
  ActivityIndicator,
  PermissionsAndroid,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {useSelector, useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import {Contact, EventDetails, Home, Map, Settings, Search} from './screens';
import {CustomDrawerContent} from './components';
import api from './utils/api';
import * as Theme from './style/theme';
import Poppins from './style/fonts';
import {actions} from './store';

const {Navigator, Screen} = createDrawerNavigator();

const DrawerNavigation = () => {
  const dispatch = useDispatch();
  const {setDarkTheme, setOptions, setUseGeoLocation} = actions.settings;
  const [isReady, setReady] = useState(false);
  const [isErrored, setErrored] = useState(false);
  const loadInitialdata = async () => {
    try {
      const data = await api.getOptions();
      const {groupe_lieu, lieu, theme} = data.data;
      dispatch(setOptions({groupe_lieu, lieu, theme}));
      const granted = await PermissionsAndroid.check(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        dispatch(setUseGeoLocation(true));
      } else {
        dispatch(setUseGeoLocation(false));
      }
    } catch (e) {
      setErrored(true);
    } finally {
      setReady(true);
    }
  };
  const {darkTheme} = useSelector(state => state.settings);
  const colorScheme = useColorScheme();

  useEffect(() => {
    dispatch(setDarkTheme(colorScheme === 'dark'));
    loadInitialdata();
  }, []);

  const dimensions = useWindowDimensions();
  const isLargeScreen = dimensions.width >= 768;

  if (!isReady) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size={'large'} color={'#EF3E36'} />
      </View>
    );
  }

  return (
    <NavigationContainer
      theme={darkTheme ? Theme.Dark : Theme.Light}
      backBehavior="none">
      <Navigator
        initialRouteName="Home"
        drawerType={isLargeScreen ? 'permanent' : 'slide'}
        drawerStyle={{
          width: isLargeScreen ? null : '87%',
          backgroundColor: darkTheme ? '#111421' : '#fff',
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
