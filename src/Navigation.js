import React from 'react';
import {useColorScheme, useWindowDimensions, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Contact, EventDetails, Home, Map, Settings, Search} from './screens';
import {DrawerItem} from './components';
import * as Theme from './style/theme';

const {Navigator, Screen} = createDrawerNavigator(); // drawer navigator

const CustomDrawerContent = props => {
  const {navigation} = props;
  console.log(props);
  return (
    <View>
      <Text>Content</Text>
    </View>
  );
};

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
        drawerStyle={isLargeScreen ? null : {width: '100%'}}
        overlayColor="transparent">
        <Screen name="Home" component={Home} />
        <Screen name="EventDetails" component={EventDetails} />
        <Screen name="Map" component={Map} />
        <Screen name="Contact" component={Contact} />
        <Screen name="Search" component={Search} />
        <Screen name="Settings" component={Settings} />
      </Navigator>
    </NavigationContainer>
  );
};

export default DrawerNavigation;
