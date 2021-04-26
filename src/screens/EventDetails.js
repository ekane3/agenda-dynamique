import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  ScrollView,
  Pressable,
  Linking,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Poppins from '../style/fonts';
import Header from '../components/Header';
import {useTheme, useNavigation} from '@react-navigation/native';
import style from '../style/EventDetails';

function EventDetails({route}) {
  const {colors} = useTheme();
  const navigation = useNavigation();
  const styles = style();
  //Receive data passed from Cards
  const data = route.params.data;
  //Retrieve lieu name and department num from lieu array
  const lieu = data.lieu[0];
  //Slice date for better render
  const date = String(data.date_format_fr).split(' ');
  

  return (
    <View style={{flex: 1}}>
      <Header
        title={'Détails Evènements'}
        rightIcon={
          <Icon
            name="search-outline"
            size={40}
            color="#EF3E36"
            onPress={() => navigation.navigate('Search')}
          />
        }
      />
      <View style={styles.container}>
        <ScrollView style={styles.scrollview}>
          <View style={styles.cardslist}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={{flexDirection: 'row'}}>
                <Icon name="location-sharp" size={25} color={colors.primary} />
                <View style={{marginLeft: 10, marginTop: -10}}>
                  <Text numberOfLines={2} style={styles.textTitle}>
                    {lieu.nom.slice(0, 13)}({lieu.dep})
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'column',
                  alignItems: 'flex-end',
                  justifyContent: 'space-evenly',
                }}>
                <Text
                  style={{
                    fontFamily: Poppins.Bold,
                    fontSize: 23,
                    color: '#EF3E36',
                  }}>
                  {date[1]}
                </Text>
                <Text
                  style={{
                    fontFamily: Poppins.Bold,
                    fontSize: 23,
                    color: '#636869',
                    marginTop: -15,
                  }}>
                  {date[2].length > 5
                    ? date[2].charAt(0).toUpperCase() + date[2].slice(1, 3)
                    : date[2].charAt(0).toUpperCase() + date[2].slice(1)}
                </Text>
              </View>
            </View>
            <Text numberOfLines={4} style={styles.textsubtitre}>
              {data.titre}
            </Text>
            <View>
              <Text numberOfLines={20} style={styles.textdescrip}>
                {data.desc}
              </Text>
            </View>
            <Text numberOfLines={1} style={styles.textdescripStructure}>{data.contact.structure.nom}</Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
                marginTop: 10,
              }}>
              <Icon
                name="call"
                size={30}
                color={colors.primary}
                style={{marginRight:40}}
                onPress={() => Linking.openURL('tel:' + data.contact.tel)}
              />
              <Icon
                name="globe-sharp"
                size={30}
                color={colors.primary}
                onPress={() => Linking.openURL(data.contact.site)}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

export default EventDetails;
