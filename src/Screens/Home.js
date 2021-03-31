import React,{Component} from 'react';
import { Icon,Button} from 'native-base';
import {StyleSheet,View,Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//Component a afficher dans l'accueil
function HomeScreen(params) {
   return(
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button 
        title="drawer" 
        onPress={()=> navigation.openDrawer() }
      />
       <Button transparent>
              <Icon name='heart' />
        </Button>
         <Button iconLeft light>
          <Icon name='home' />
            <Text>Back</Text>
          </Button>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
    );
}

const Stack = createStackNavigator();

function Home({navigation}){
    return(
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ 
                    title: 'Accueil',
                    headerTitleAlign: 'center',
                    headerTitleStyle:{
                      fontSize: 26,
                      color:"#ef3e36"
                    },
                    headerRight:() => (
                      <Text style={{ fontFamily: 'poppins', fontSize: 26, fontWeight: "bold",marginRight: 16,color:"#ef3e36", }}>
                        Accueil
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
    flex: 1, 
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default Home;