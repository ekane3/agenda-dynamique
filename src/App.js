import 'react-native-gesture-handler';
import React from 'react';
import {  StyleSheet,Text,Button,View, useWindowDimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator,DrawerContentScrollView,DrawerItemList,DrawerItem }from '@react-navigation/drawer';
import Home from './Screens/Home';
import Search from './Screens/Search';
import Contact from './Screens/Contact';
import Settings from './Screens/Settings';
import Maps from './Screens/Maps';
import Quitter from './Screens/Quitter';

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props){
  return(
    <DrawerContentScrollView>
      <DrawerItemList {...props}/>
      <DrawerItem label="Quitter" onPress={() => alert('Quitter ?')}/>
    </DrawerContentScrollView>
  );
}

function App() {
  //To have the users phone dimension for the drawer type
  const dimensions = useWindowDimensions();

  return (
    <NavigationContainer> 
      <Drawer.Navigator 
        drawerContent={props=> <CustomDrawerContent {...props} /> }
        initialRouteName="Accueil"
        drawerType={dimensions.width >= 768 ? 'permanent':'slide'}
        drawerStyle={{backgroundColor:'#fffffa'}}
      >
        <Drawer.Screen name="Accueil" component={Home} />
        <Drawer.Screen name="Rechercher" component={Search} />
        <Drawer.Screen name="Contact" component={Contact} />
        <Drawer.Screen name="Settings" component={Settings} />
        <Drawer.Screen name="Carte" component={Maps} />
        <Drawer.Screen name="Infos" component={Quitter} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};


const styles = StyleSheet.create({
  continer:{
    flex: 1,
    backgroundColor:"#fff",
    alignItems:"center",
    justifyContent:"center"
  },
  text: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  }
});

export default App;
