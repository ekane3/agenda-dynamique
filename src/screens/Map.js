import React from 'react';
import { View,TextInput, Text,Image,StyleSheet,Button,ScrollView,Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Poppins from '../style/fonts';
import Header from '../components/Header';
import { useLinkTo,useTheme } from '@react-navigation/native';
import style from '../style/Map';


function Map({ navigation }) {
  const linkTo = useLinkTo();
  const {colors} = useTheme();
  const styles = style();

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


export default Map;
