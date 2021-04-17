import React from 'react';
import {View, Text, StyleSheet,Button,ScrollView,Pressable,Image,Linking} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Poppins from '../style/fonts';
import Header from '../components/Header';
import { useLinkTo,useTheme } from '@react-navigation/native';
import Map from './Map';
import style from '../style/Contact';


function Contact({ navigation }) {
  const linkTo = useLinkTo();
  const {colors} = useTheme();
  const styles = style();
  
  return (
  <View style={{flex:1}}>
    <Header
      isDrawer
      title={'Contact'}
      rightIcon={<Icon name="map-outline" size={40} color="#EF3E36" onPress={() => navigation.navigate('Map')}/>}

    />
    <View style={styles.container}>
      <ScrollView style={styles.scrollview}>
        <View style={styles.cardslist}>
          <Pressable style={{flexDirection: 'row',justifyContent: 'flex-start'}} onPress={() => Linking.openURL('https://www.asso.info-limousin.com/association/adhesion')}>
            <Icon
                name="create"
                size={25}
                color={colors.primary}
              />
            <View style={{marginLeft:10,marginTop:-5,}}>
              <Text style={styles.textTitle}>Créer un compte de diffusion</Text>
            </View>
          </Pressable>
        </View>
        <View style={styles.cardslist}>
          <Pressable style={{flexDirection: 'row',justifyContent: 'flex-start'}} onPress={() => Linking.openURL('https://agenda-dynamique.com/adminf06132cd42effe0dcc1e256f3e7096b5d01fad08/evenement/event-form.php')}>
            <Icon
                name="clipboard"
                size={25}
                color={colors.primary}
              />
            <View style={{marginLeft:10,marginTop:-5,}}>
              <Text style={styles.textTitle}>Déposer une annonce</Text>
            </View>
          </Pressable>
        </View>
        <View style={styles.cardslist}>
          <Pressable style={{flexDirection: 'row',justifyContent: 'flex-start'}} onPress={() => Linking.openURL('mailto:contact@info-limousin.com?subject=Besoin d\'un accompagnement')}>
            <Icon
                name="location-sharp"
                size={25}
                color={colors.primary}
              />
            <View style={{marginLeft:10,marginTop:-5,}}>
              <Text style={styles.textTitle}>Besoin d'un accompagnement</Text>
            </View>
          </Pressable>
        </View>
        <View style={styles.cardslist}>
          <Pressable style={{flexDirection: 'row',justifyContent: 'flex-start'}} onPress={() => Linking.openURL('mailto:contact@info-limousin.com?subject=Bug application mobile')}>
            <Icon
                name="bug"
                size={25}
                color={colors.primary}
              />
            <View style={{marginLeft:10,marginTop:-5,}}>
              <Text style={styles.textTitle}>Reporter un bug</Text>
            </View>
          </Pressable>
        </View>
        <View style={styles.cardslist}>
           <View>
              <Text numberOfLines={20} style={styles.textdescrip}>
                L'association Info Limousin relaie 
                sur internet les informations annonçant des 
                evènements sur tout le Limousin, et l'Aquitaine.
                Les adhérents saisissent en ligne leurs agendas
                , l'association les optimise et les diffuse.Elle genère 
                de nombreux flux d'inforamtions en usage libre, utilisés 
                sur de nombreux sites internet et outils de flux.
              </Text>
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

export default Contact;
