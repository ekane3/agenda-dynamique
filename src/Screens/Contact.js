import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {StyleSheet,View,Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function Contact(){
    return(
        <View>
            <Text>Contact</Text>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  }
});

export default Contact;