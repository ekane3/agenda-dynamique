import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {StyleSheet,View,Button,Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


//Component a afficher dans l'accueil
function MapsScreen({navigation}) {
   return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button 
        title="drawer" 
        onPress={()=> navigation.openDrawer() }
      />
      <Icon.Button name="facebook" backgroundColor="#3b5998">
        <Text style={{ fontFamily: 'Arial', fontSize: 15 }}>
          Login with Facebook
        </Text>
      </Icon.Button>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
    );
}

const Stack = createStackNavigator();

function Maps({navigation}){
    return(
      <Stack.Navigator>
        <Stack.Screen
          name="Maps"
          component={MapsScreen}
          options={{ 
                    title: 'Carte',
                    headerTitleAlign: 'center',
                    headerTitleStyle:{
                      fontSize: 26,
                      color:"#ef3e36",
                      fontWeight: ""
                    },
                    headerRight:() => (
                      <Text style={{ fontFamily: 'poppins', fontSize: 26, fontWeight: "bold",marginRight: 16,color:"#ef3e36", }}>
                        Carte
                      </Text>
                    )
             }}
        />
      </Stack.Navigator>
    );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  }
});

export default Maps;