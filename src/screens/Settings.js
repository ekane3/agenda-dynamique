import React from 'react';
import {View, Text, StyleSheet,Button,ScrollView,Pressable,Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Poppins from '../style/fonts';
import Header from '../components/Header';
import { useLinkTo,useTheme } from '@react-navigation/native';
import Map from './Map'

function Settings({ navigation }) {
  const linkTo = useLinkTo();
  const {colors} = useTheme();

  return (
  <View style={{flex:1}}>
    <Header
      isDrawer
      title={'Paramètres'}
      rightIcon={<Icon name="map-outline" size={40} color="#EF3E36" onPress={() => navigation.navigate('Map')}/>}

    />
    <View style={styles.container}>
      <ScrollView style={styles.scrollview}>
        <Text style={styles.textTitle}>Mes favoris</Text>
        <View style={styles.cardslist}>
          <View style={{flexDirection: 'row',justifyContent: 'flex-start'}}>
            <View style={{marginLeft:10,marginTop:-5,}}>
              <Text style={styles.textTitle}>Afficher les communes</Text>
            </View>
             <Icon
                name="create"
                size={25}
                color={colors.primary}
              />
          </View>
        </View>
        <Text style={styles.textTitle}>Choisir lieux</Text>
        <View style={styles.cardslist}>
          <View style={{flexDirection: 'row',justifyContent: 'flex-start'}}>
            <Icon
                name="clipboard"
                size={25}
                color={colors.primary}
              />
            <View style={{marginLeft:10,marginTop:-5,}}>
              <Text style={styles.textTitle}>Déposer une annonce</Text>
            </View>
          </View>
        </View>
        <Text style={styles.textTitle}>Définir thème</Text>
        <View style={styles.cardslist}>
          <View style={{flexDirection: 'row',justifyContent: 'flex-start'}}>
            <Icon
                name="location-sharp"
                size={25}
                color={colors.primary}
              />
            <View style={{marginLeft:10,marginTop:-5,}}>
              <Text style={styles.textTitle}>Besoin d'un accompagnement</Text>
            </View>
          </View>
        </View>
        <Text style={styles.textTitle}>Une date</Text>
        <View style={styles.cardslist}>
          <View style={{flexDirection: 'row',justifyContent: 'flex-start'}}>
            <Icon
                name="bug"
                size={25}
                color={colors.primary}
              />
            <View style={{marginLeft:10,marginTop:-5,}}>
              <Text style={styles.textTitle}>Reporter un bug</Text>
            </View>
          </View>
        </View>
        <View style={styles.cardslist}>
           <View>
            <Button
              title="Sauvegarder"
              onPress={() => Alert.alert('Simple Button pressed')}
            />
            <Button
              title="Reinitialiser"
              onPress={() => Alert.alert('Simple Button pressed')}
            />
            </View>
        </View>
         <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginVertical: 35,
        }}>
        <Image
          style={{resizeMode: 'contain', width: 250}}
          source={require('../../assets/images/logo_avec_texte.png')}
        />
      </View>
      </ScrollView>
    </View>
    
   
  </View>
   
    
  );
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: "#f1f1f1",
    borderRadius: 30,
  },
  scrollview:{
    padding: 20,   
  },
  cardslist:{
    padding: 20,
    marginVertical:15,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    borderColor:'#EF3E36',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 10,
    shadowOpacity: 1.0,
    elevation: 5,
  },
  textTitle: {
    fontFamily: Poppins.Bold,
    fontSize: 18,
    alignItems: 'center',
    color: '#636869',
    justifyContent:'center',
    marginTop: 7,
  },
  textsubtitre:{
    fontFamily: Poppins.Regular,
    fontSize: 16,
    alignItems: 'center',
    color: '#636869',
    justifyContent:'center',
    marginTop:-3,
    marginLeft:5,
    marginBottom:10,
  
  },
  textdescrip:{
    fontSize:12,
    color:'#636869',
    marginLeft:5,
    marginBottom:10,
    textAlign:'justify'
  },
  
});

export default Settings;
