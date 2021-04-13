import React from 'react';
import {View, Text, StyleSheet,Button,ScrollView,Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Poppins from '../style/fonts';
import Header from '../components/Header';
import { useLinkTo,useTheme } from '@react-navigation/native';
import Map from './Map'

function EventDetails({ navigation }) {
  const linkTo = useLinkTo();
  const {colors} = useTheme();

  return (
  <View style={{flex:1}}>
    <Header
      title={'Détails Evènements'}
    />
    <View style={styles.container}>
      <ScrollView style={styles.scrollview}>
        <View style={styles.cardslist}>
          <View style={{flexDirection: 'row',justifyContent: 'space-between'}}>
            <View style={{flexDirection: 'row',}}>
              <Icon
                name="location-sharp"
                size={25}
                color={colors.primary}
              />
              <View style={{marginLeft:10,marginTop:-10,}}>
                <Text style={styles.textTitle}>Title(19)</Text>
              </View>
            </View>
            <View style={{flexDirection: 'column',alignItems: 'flex-end',justifyContent: 'space-evenly'}}>
              <Text style={{ fontFamily: Poppins.Bold,fontSize: 23,color: '#EF3E36'}}>19</Text>
              <Text style={{ fontFamily: Poppins.Bold,fontSize: 23,color: '#636869',marginTop:-15}}>Décembre</Text>
            </View>
          </View>
          <Text numberOfLines={4} style={styles.textsubtitre}>SubTitle is a boooooooooooooooooooooooooooooooooooooooooooooooooooooo</Text>
            <View>
              <Text numberOfLines={20} style={styles.textdescrip}>
                Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut  
                dolore eu fugiat nulla pariatur. Excepteur sint 
                occaecat cupidatat non proident, sunt in culpa 
                qui officia deserunt mollit anim id est laborum.
                Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut  
                dolore eu fugiat nulla pariatur. Excepteur sint 
                occaecat cupidatat non proident, sunt in culpa 
                qui officia deserunt mollit anim id est laborum.
                Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut  
                dolore eu fugiat nulla pariatur. Excepteur sint 
                occaecat cupidatat non proident, sunt in culpa 
                qui officia deserunt mollit anim id est laborum.
                Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut  
                dolore eu fugiat nulla pariatur. Excepteur sint 
                occaecat cupidatat non proident, sunt in culpa 
                qui officia deserunt mollit anim id est laborum.
                Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut  
                dolore eu fugiat nulla pariatur. Excepteur sint 
                occaecat cupidatat non proident, sunt in culpa 
                qui officia deserunt mollit anim id est laborum.
              </Text>
            </View>
            <View style={{flexDirection: 'row',justifyContent: 'flex-end',marginTop:10,}}>
                <Icon
                  name="call"
                  size={30}
                  color={colors.primary}
                  style={{marginRight:50}}
                />
                <Icon
                  name="globe-sharp"
                  size={30}
                  color={colors.primary}
                />
            </View>
         
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
    borderRadius: 20,
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
    fontSize: 23,
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


export default EventDetails;
