import React from 'react';
import {View, Text, StyleSheet,Button,ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Poppins from '../style/fonts';
import Header from '../components/Header';
import { useLinkTo,useTheme } from '@react-navigation/native';
import Map from './Map'

function Home({ navigation }) {
  const linkTo = useLinkTo();
  const {colors} = useTheme();

  return (
  <View style={{flex:1}}>
    <Header
      isDrawer
      title={'Accueil'}
      rightIcon={<Icon name="map-outline" size={40} color="#EF3E36" onPress={() => navigation.navigate('Map')}/>}
    />
    <ScrollView style={{flex:1}}>
      <View style={styles.container}>
        <Icon
            name="location-sharp"
            size={25}
            color={colors.primary}
          />
        <Text style={styles.text}>Title</Text>
        <Text style={styles.text}>SubTitle</Text>
        <Text style={styles.text}>29</Text>
        <Text style={styles.text}>Mars</Text>
        <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur 
          adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. Ut  
          dolore eu fugiat nulla pariatur. Excepteur sint 
          occaecat cupidatat non proident, sunt in culpa 
          qui officia deserunt mollit anim id est laborum.</Text>
        <Icon
            name="call"
            size={25}
            color={colors.primary}
          />
          <Icon
            name="globe-sharp"
            size={25}
            color={colors.primary}
          />


        <Button title="Go to Map" onPress={() => linkTo('/Map')}>
        </Button>
           <Icon
            name="location-sharp"
            size={25}
            color={colors.primary}
          />
        <Text style={styles.text}>Title</Text>
        <Text style={styles.text}>SubTitle</Text>
        <Text style={styles.text}>29</Text>
        <Text style={styles.text}>Mars</Text>
        <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur 
          adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. Ut  
          dolore eu fugiat nulla pariatur. Excepteur sint 
          occaecat cupidatat non proident, sunt in culpa 
          qui officia deserunt mollit anim id est laborum.</Text>
        <Icon
            name="call"
            size={25}
            color={colors.primary}
          />
          <Icon
            name="globe-sharp"
            size={25}
            color={colors.primary}
          />
        <Button title="Go to Map" onPress={() => linkTo('/Map')}>
        </Button>
      </View>
    </ScrollView>
   
  </View>
   
    
  );
}
const styles = StyleSheet.create({
  container: {
    flex:1
  },
  text: {
    fontFamily: Poppins.Bold,
    fontSize: 23,
    alignItems: 'center',
    color: '#636869',
    justifyContent:'center'
  },
});

export default Home;
