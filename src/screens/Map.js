import React from 'react';
import { View,TextInput, Text,Image,StyleSheet,Button,ScrollView,Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Poppins from '../style/fonts';
import Header from '../components/Header';
import { useLinkTo,useTheme } from '@react-navigation/native';

function Map({ navigation }) {
  const linkTo = useLinkTo();
  const {colors} = useTheme();

  return (
  <View style={{flex:1}}>
    <Header
      isDrawer
      title={'Carte'}
    />
    <View style={styles.container}>
      <TextInput
          style={styles.searchBar}
          placeholder="Recherche"
          keyboardType="default"
          selectionColor={"#EF3E36"}
        />
      <ScrollView style={styles.scrollHorizontal} showsHorizontalScrollIndicator={false} horizontal>
        <View style={styles.eventList} onPress={() => navigation.navigate('EventDetails')} >
          <Image
          style={styles.eventImage}
          source={require('../../assets/images/musique.png')}
          />
          <Text style={styles.textTitleEvent}>Musique</Text>
        </View>
        <View style={styles.eventList} onPress={() => navigation.navigate('EventDetails')} >
          <Image
          style={styles.eventImage}
          source={require('../../assets/images/musique.png')}
          />
          <Text style={styles.textTitleEvent}>Musée</Text>
        </View>
        <View style={styles.eventList} onPress={() => navigation.navigate('EventDetails')} >
          <Image
          style={styles.eventImage}
          source={require('../../assets/images/musique.png')}
          />
          <Text style={styles.textTitleEvent}>Musique</Text>
        </View>
        <View style={styles.eventList} onPress={() => navigation.navigate('EventDetails')} >
          <Image
          style={styles.eventImage}
          source={require('../../assets/images/musique.png')}
          />
          <Text style={styles.textTitleEvent}>Musique</Text>
        </View>
        <View style={styles.eventList} onPress={() => navigation.navigate('EventDetails')} >
          <Image
          style={styles.eventImage}
          source={require('../../assets/images/musique.png')}
          />
          <Text style={styles.textTitleEvent}>Musique</Text>
        </View>
        <View style={styles.eventList} onPress={() => navigation.navigate('EventDetails')} >
          <Image
          style={styles.eventImage}
          source={require('../../assets/images/musique.png')}
          />
          <Text style={styles.textTitleEvent}>Musique</Text>
        </View>
        <View style={styles.eventList} onPress={() => navigation.navigate('EventDetails')} >
          <Image
          style={styles.eventImage}
          source={require('../../assets/images/musique.png')}
          />
          <Text style={styles.textTitleEvent}>Musique</Text>
        </View>
      </ScrollView>
    </View>
    
   
  </View>
   
    
  );
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: "#f2f2f2",
    borderRadius: 25,
  },
  scrollHorizontal:{
    paddingLeft: 20, 
    height:205,
  },
  searchBar:{
    fontFamily: Poppins.Medium,
    fontSize: 15,
    height: 55,
    marginTop: -10,
    textAlign: 'center',
    alignContent: 'center',
    marginHorizontal: 20,
    backgroundColor: "#FFFFFF",
    borderRadius: 25,
    borderColor:'#EF3E36',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 10,
    shadowOpacity: 1.0,
    elevation: 5,
  }
  ,
  eventList:{
    padding: 20,
    flexDirection: 'column',
    marginVertical:15,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    borderColor:'#EF3E36',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 10,
    shadowOpacity: 1.0,
    elevation: 5,
    height:125,
    justifyContent: 'center',
    width:120,
    marginRight:10 
  },
  eventImage:{
    resizeMode: 'contain', width: 60,marginLeft: 8,
  },
  textTitleEvent: {
    fontFamily: Poppins.Bold,
    fontSize: 18,
    color: '#636869',
    marginTop: 7,
  },
  
});

export default Map;
