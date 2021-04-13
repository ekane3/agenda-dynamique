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
    <ScrollView style={styles.container}>
      <View style={styles.cardslist}>
        <Icon
            name="location-sharp"
            size={25}
            color={colors.primary}
          />
        <Text style={styles.text}>Title</Text>
        <Text style={styles.text}>SubTitle</Text>
        <Text style={styles.text}>29</Text>
        <Text style={styles.text}>Mars</Text>
        <Text style={styles.textdescrip}>Lorem ipsum dolor sit amet, consectetur 
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
      </View>

      <View style={styles.cardslist}>
        <View style={{flexDirection: 'row',justifyContent: 'space-between'}}>
          <View style={{flexDirection: 'row',}}>
            <Icon
              name="location-sharp"
              size={25}
              color={colors.primary}
            />
            <View style={{marginLeft:10,marginTop:-10,}}>
              <Text style={styles.text}>Title(19)</Text>
            </View>
          </View>
          <View style={{flexDirection: 'column',}}>
            <Text style={styles.text}>29</Text>
            <Text style={styles.text}>Mars</Text>
          </View>
        </View>
        <Text style={styles.text}>SubTitle</Text>
        <View style={{flexDirection: 'row',justifyContent: 'space-between',}}>
          <View style={{marginRight:10,width:290}}>
            <Text style={styles.textdescrip}>
              Lorem ipsum dolor sit amet, consectetur 
              adipiscing elit, sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut  
              dolore eu fugiat nulla pariatur. Excepteur sint 
              occaecat cupidatat non proident, sunt in culpa 
              qui officia deserunt mollit anim id est laborum.
            </Text>
          </View>
          <View style={{flexDirection: 'column',marginRight:10,width:30}}>
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
          </View>
        </View>
      </View>
    </ScrollView>
   
  </View>
   
    
  );
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    marginHorizontal: 20,
  },
  text: {
    fontFamily: Poppins.Bold,
    fontSize: 23,
    alignItems: 'center',
    color: '#636869',
    justifyContent:'center'
  },
  textsubtitre:{
    fontFamily: Poppins.Regular,
    fontSize: 14,
    alignItems: 'center',
    color: '#636869',
    justifyContent:'center'
  },
  textdescrip:{
    fontSize:15,
    color:'#636869',
  },
  cardslist:{
    padding: 15,
    marginVertical:15,
    borderWidth: 1,
    borderRadius: 20,
    borderColor:'#EF3E36'
  }
});

export default Home;
