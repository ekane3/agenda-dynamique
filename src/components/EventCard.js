import React from 'react';
import {View, Text, Pressable, Linking} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Poppins from '../style/fonts';
import {useTheme, useNavigation} from '@react-navigation/native';
import style from '../style/Home';

const EventCard = ({data}) => {
  const styles = style();
  const {colors} = useTheme();
  const navigation = useNavigation();
  //Rename data
  data = data.item;
  //Retrieve lieu name and department num from lieu array
  const lieu = data.lieu[0];
  //Slice date for better render
  const date = String(data.date_format_fr).split(' ');

  return (
    <Pressable
      style={styles.cardslist}
      onPress={() => navigation.navigate('EventDetails', {data: data})}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={{flexDirection: 'row'}}>
          <Icon name="location-sharp" size={25} color={colors.primary} />
          <View style={{marginLeft: 10, marginTop: -10}}>
            <Text style={styles.textTitle}>
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
            style={{fontFamily: Poppins.Bold, fontSize: 23, color: '#EF3E36'}}>
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
              ? date[2].charAt(0).toUpperCase() + date[2].slice(1, 3)+'.'
              : date[2].charAt(0).toUpperCase() + date[2].slice(1)}
          </Text>
        </View>
      </View>
      <Text numberOfLines={2} style={styles.textsubtitre}>
        {data.titre}
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginLeft: 5,
        }}>
        <View style={{paddingRight: 20, width: 280}}>
          <Text numberOfLines={5} style={styles.textdescrip}>
            {data.desc}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'column',
            width: 30,
            alignItems: 'flex-end',
            justifyContent: 'space-around',
          }}>
          <Icon
            name="call"
            size={30}
            color={colors.primary}
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
    </Pressable>
  );
};

export default EventCard;
