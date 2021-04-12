import React from 'react';
import {View, Text, StyleSheet,Button} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Poppins from '../style/fonts';
import Header from '../components/Header';
import { useLinkTo,useTheme } from '@react-navigation/native';

const Map = () => {
  const {colors} = useTheme();
  return (
    <View style={{flex:1}}>
       <Header
        isDrawer
        title={'Carte'}
    />
    <View styles={styles.container}>
        <Text style={styles.text}>MAPS</Text>
    </View>
   </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems:'center'
  },
  text: {
    fontFamily: Poppins.Bold,
    fontSize: 23,
    alignItems: 'center',
    color: '#636869',
    marginBottom:200,
    justifyContent:'center'
  },
});
export default Map;
