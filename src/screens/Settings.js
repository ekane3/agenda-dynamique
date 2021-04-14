import React,{useState} from 'react';
import {View, Text, StyleSheet,Button,ScrollView,Pressable,Image,TouchableOpacity,Switch} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Poppins from '../style/fonts';
import Header from '../components/Header';
import { useLinkTo,useTheme } from '@react-navigation/native';
import Map from './Map'

function Settings({ navigation }) {
  const linkTo = useLinkTo();
  const {colors} = useTheme();
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

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
          <View style={{flexDirection: 'row',justifyContent: 'space-between'}}>
            <View style={{marginLeft:10,marginTop:-5,}}>
              <Text style={styles.textTitle2}>Afficher les communes</Text>
            </View>
               <Switch
                trackColor={{ false: colors.notification, true: colors.primary }}
                thumbColor={isEnabled ? colors.background : colors.background}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
          </View>
        </View>
        <Text style={styles.textTitle}>Choisir lieux</Text>
        <View style={styles.cardslist}>
          <View style={{flexDirection: 'row',justifyContent: 'space-between'}}>
            <View style={{marginLeft:10,marginTop:-5,}}>
              <Text style={styles.textTitle2}>Tous les lieux</Text>
            </View>
            <Icon
                name="filter"
                size={25}
                color={colors.primary}
              />
          </View>
        </View>
        <Text style={styles.textTitle}>Définir thème</Text>
        <View style={styles.cardslist}>
          <View style={{flexDirection: 'row',justifyContent: 'space-between'}}>
            <View style={{marginLeft:10,marginTop:-5,}}>
              <Text style={styles.textTitle2}>Choisissez un thème</Text>
            </View>
            <Icon
                name="filter"
                size={25}
                color={colors.primary}
              />
          </View>
        </View>
        <Text style={styles.textTitle}>Une date</Text>
        <View style={styles.cardslist}>
          <View style={{flexDirection: 'row',justifyContent: 'space-between'}}>
            <View style={{marginLeft:10,marginTop:-5,}}>
              <Text style={styles.textTitle2}>Selectionnez une date</Text>
            </View>
            <Icon
                name="calendar"
                size={25}
                color={colors.primary}
              />
          </View>
        </View>
         
        <View style={{flexDirection:'column',marginVertical:20}}>
            <TouchableOpacity style={styles.button} >
              <Icon
                name="add"
                size={25}
                color={colors.background}
              />
              <Text style={styles.buttonText}>Sauvegarder</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} >
              <Icon
                name="remove"
                size={25}
                color={colors.background}
              />
              <Text style={styles.buttonText}>Reinitialiser</Text>
            </TouchableOpacity>
        </View>
         <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginVertical: 35,
        }}>
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
  button:{
    borderRadius:30,
    marginVertical:10,
    paddingTop:10,
    paddingBottom:10,
    marginHorizontal:100,
    backgroundColor:'#EF3E36',
    elevation:3,
    alignItems:'center',
    flexDirection:'row',
    justifyContent: 'center',
  },
  buttonText:{
    fontFamily: Poppins.Regular,
    color:'#FFFFFF',
    fontSize:16,
    marginLeft:10,
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
   textTitle2: {
    fontFamily: Poppins.Medium,
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
