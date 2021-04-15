import React from 'react';
import {View,TextInput, Text, StyleSheet,Button,ScrollView,Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Poppins from '../style/fonts';
import Header from '../components/Header';
import { useLinkTo,useTheme } from '@react-navigation/native';

function EventCard({navigation}){
  return (
    <Pressable style={styles.cardslist} onPress={() => navigation.navigate('EventDetails')} >
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
              <Text style={{ fontFamily: Poppins.Bold,fontSize: 23,color: '#EF3E36'}}>29</Text>
              <Text style={{ fontFamily: Poppins.Bold,fontSize: 23,color: '#636869',marginTop:-15}}>Mars</Text>
            </View>
          </View>
          <Text numberOfLines={1} style={styles.textsubtitre}>SubTitle is a boooooooooooooooooooooooooooooooooooooooooooooooooooooo</Text>
          <View style={{flexDirection: 'row',justifyContent: 'space-between',marginLeft:5}}>
            <View style={{marginRight:10,width:290}}>
              <Text numberOfLines={5} style={styles.textdescrip}>
                Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut  
                dolore eu fugiat nulla pariatur. Excepteur sint 
                occaecat cupidatat non proident, sunt in culpa 
                qui officia deserunt mollit anim id est laborum.
              </Text>
            </View>
            <View style={{flexDirection: 'column',width:30,alignItems: 'flex-end',justifyContent: 'space-around',}}>
                <Icon
                  name="call"
                  size={30}
                  color={colors.primary}
                />
                <Icon
                  name="globe-sharp"
                  size={30}
                  color={colors.primary}
                />
            </View>
          </View>
        </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: "#f2f2f2",
    borderRadius: 25,
  },
  scrollview:{
    padding: 20,   
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
    borderRadius: 10,
    borderColor:'#EF3E36',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 10,
    shadowOpacity: 1.0,
    elevation: 5,
  }
  ,
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
    width:200,
    justifyContent:'center',
    marginTop:-30,
    marginLeft:5,
    marginBottom:10,
  
  },
  textdescrip:{
    fontSize:12,
    color:'#636869',
    textAlign:'justify'
  },
  
});

export default EventCard;
