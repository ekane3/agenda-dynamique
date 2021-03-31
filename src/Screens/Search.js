import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {StyleSheet,View,Button,Text} from 'react-native';
import Home from './Home';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function Search({navigation}){
    return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Saerch</Text>
      <Button 
        title="Go to Home" 
        onPress={()=> navigation.navigate(Home) }
      />
       <Button 
        title="drawer" 
        onPress={()=> navigation.openDrawer() }
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
    );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  }
});

export default Search;