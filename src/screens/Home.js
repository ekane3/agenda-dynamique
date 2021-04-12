import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Poppins from '../style/fonts';
import Header from '../components/Header';

function Home() {
  return (
    <Header
      isDrawer
      title={'Accueil'}
      rightIcon={<Icon name="map-outline" size={40} color="#EF3E36" />}
    />
  );
}

export default Home;
