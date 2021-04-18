import React, {useEffect, useState} from 'react';
import {
  View,
  TextInput,
  Text,
  Image,
  StyleSheet,
  Button,
  ScrollView,
  Pressable,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Poppins from '../style/fonts';
import Header from '../components/Header';
import {
  responsiveScreenWidth,
  responsiveScreenHeight,
  responsiveScreenFontSize,
} from 'react-native-responsive-dimensions';
import {useLinkTo, useTheme} from '@react-navigation/native';
import Map from './Map';
import style from '../style/Search';
import api from '../utils/api';

function Search({navigation}) {
  const [lieux, setLieux] = useState([]);
  const [groupeLieu, setGroupeLieu] = useState([]);
  const [themes, setThemes] = useState([]);
  const linkTo = useLinkTo();
  const {colors} = useTheme();
  const styles = style();

  useEffect(() => {
    (async () => {
      const rawData = await api.getOptions();
      const {lieu, groupe_lieu, theme} = rawData?.data;
      setLieux(lieu);
      setGroupeLieu(groupe_lieu);
      setThemes(theme);
    })();
  }, []);

  return (
    <View style={{flex: 1}}>
      <Header
        isDrawer
        title={'Search'}
        rightIcon={
          <Icon
            name="map-outline"
            size={40}
            color="#EF3E36"
            onPress={() => navigation.navigate('Map')}
          />
        }
      />
      <View style={styles.container}>
        <TextInput
          style={styles.searchBar}
          placeholder="Recherche"
          keyboardType="default"
          selectionColor={'#EF3E36'}
        />
        <ScrollView
          style={styles.scrollHorizontal}
          showsHorizontalScrollIndicator={false}
          horizontal>
          <View
            style={styles.eventList}
            onPress={() => navigation.navigate('EventDetails')}>
            <Image
              style={styles.eventImage}
              source={require('../../assets/images/musique.png')}
            />
            <Text style={styles.textTitleEvent}>Musique</Text>
          </View>
          <View
            style={styles.eventList}
            onPress={() => navigation.navigate('EventDetails')}>
            <Image
              style={styles.eventImage}
              source={require('../../assets/images/musique.png')}
            />
            <Text style={styles.textTitleEvent}>Musée</Text>
          </View>
          <View
            style={styles.eventList}
            onPress={() => navigation.navigate('EventDetails')}>
            <Image
              style={styles.eventImage}
              source={require('../../assets/images/musique.png')}
            />
            <Text style={styles.textTitleEvent}>Musique</Text>
          </View>
          <View
            style={styles.eventList}
            onPress={() => navigation.navigate('EventDetails')}>
            <Image
              style={styles.eventImage}
              source={require('../../assets/images/musique.png')}
            />
            <Text style={styles.textTitleEvent}>Musique</Text>
          </View>
          <View
            style={styles.eventList}
            onPress={() => navigation.navigate('EventDetails')}>
            <Image
              style={styles.eventImage}
              source={require('../../assets/images/musique.png')}
            />
            <Text style={styles.textTitleEvent}>Musique</Text>
          </View>
          <View
            style={styles.eventList}
            onPress={() => navigation.navigate('EventDetails')}>
            <Image
              style={styles.eventImage}
              source={require('../../assets/images/musique.png')}
            />
            <Text style={styles.textTitleEvent}>Musique</Text>
          </View>
          <View
            style={styles.eventList}
            onPress={() => navigation.navigate('EventDetails')}>
            <Image
              style={styles.eventImage}
              source={require('../../assets/images/musique.png')}
            />
            <Text style={styles.textTitleEvent}>Musique</Text>
          </View>
        </ScrollView>
        <ScrollView
          style={styles.scrollview}
          showsVerticalScrollIndicator={false}>
          <Pressable
            style={styles.cardslist}
            onPress={() => navigation.navigate('EventDetails')}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={{flexDirection: 'row'}}>
                <Icon name="location-sharp" size={25} color={colors.primary} />
                <View style={{marginLeft: 10, marginTop: -10}}>
                  <Text style={styles.textTitle}>Title(19)</Text>
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
                  29
                </Text>
                <Text
                  style={{
                    fontFamily: Poppins.Bold,
                    fontSize: 23,
                    color: '#636869',
                    marginTop: -15,
                  }}>
                  Mars
                </Text>
              </View>
            </View>
            <Text numberOfLines={1} style={styles.textsubtitre}>
              SubTitle is a
              boooooooooooooooooooooooooooooooooooooooooooooooooooooo
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginLeft: 5,
              }}>
              <View style={{marginRight: 10, width: 290}}>
                <Text numberOfLines={5} style={styles.textdescrip}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'column',
                  width: 30,
                  alignItems: 'flex-end',
                  justifyContent: 'space-around',
                }}>
                <Icon name="call" size={30} color={colors.primary} />
                <Icon name="globe-sharp" size={30} color={colors.primary} />
              </View>
            </View>
          </Pressable>

          <View style={styles.cardslist}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={{flexDirection: 'row'}}>
                <Icon name="location-sharp" size={25} color={colors.primary} />
                <View style={{marginLeft: 10, marginTop: -10}}>
                  <Text style={styles.textTitle}>Title(19)</Text>
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
                  19
                </Text>
                <Text
                  style={{
                    fontFamily: Poppins.Bold,
                    fontSize: 23,
                    color: '#636869',
                    marginTop: -15,
                  }}>
                  Décembre
                </Text>
              </View>
            </View>
            <Text numberOfLines={1} style={styles.textsubtitre}>
              SubTitle is a
              boooooooooooooooooooooooooooooooooooooooooooooooooooooo
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginLeft: 5,
              }}>
              <View style={{marginRight: 10, width: 290}}>
                <Text numberOfLines={5} style={styles.textdescrip}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'column',
                  width: 30,
                  alignItems: 'flex-end',
                  justifyContent: 'space-around',
                }}>
                <Icon name="call" size={30} color={colors.primary} />
                <Icon name="globe-sharp" size={30} color={colors.primary} />
              </View>
            </View>
          </View>

          <View style={styles.cardslist}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={{flexDirection: 'row'}}>
                <Icon name="location-sharp" size={25} color={colors.primary} />
                <View style={{marginLeft: 10, marginTop: -10}}>
                  <Text style={styles.textTitle}>Title(19)</Text>
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
                  19
                </Text>
                <Text
                  style={{
                    fontFamily: Poppins.Bold,
                    fontSize: 23,
                    color: '#636869',
                    marginTop: -15,
                  }}>
                  Décembre
                </Text>
              </View>
            </View>
            <Text numberOfLines={1} style={styles.textsubtitre}>
              SubTitle is a
              boooooooooooooooooooooooooooooooooooooooooooooooooooooo
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginLeft: 5,
              }}>
              <View style={{marginRight: 10, width: 290}}>
                <Text numberOfLines={5} style={styles.textdescrip}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'column',
                  width: 30,
                  alignItems: 'flex-end',
                  justifyContent: 'space-around',
                }}>
                <Icon name="call" size={30} color={colors.primary} />
                <Icon name="globe-sharp" size={30} color={colors.primary} />
              </View>
            </View>
          </View>

          <View style={styles.cardslist}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={{flexDirection: 'row'}}>
                <Icon name="location-sharp" size={25} color={colors.primary} />
                <View style={{marginLeft: 10, marginTop: -10}}>
                  <Text style={styles.textTitle}>Title(19)</Text>
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
                  19
                </Text>
                <Text
                  style={{
                    fontFamily: Poppins.Bold,
                    fontSize: 23,
                    color: '#636869',
                    marginTop: -15,
                  }}>
                  Décembre
                </Text>
              </View>
            </View>
            <Text numberOfLines={1} style={styles.textsubtitre}>
              SubTitle is a
              boooooooooooooooooooooooooooooooooooooooooooooooooooooo
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginLeft: 5,
              }}>
              <View style={{marginRight: 10, width: 290}}>
                <Text numberOfLines={5} style={styles.textdescrip}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'column',
                  width: 30,
                  alignItems: 'flex-end',
                  justifyContent: 'space-around',
                }}>
                <Icon name="call" size={30} color={colors.primary} />
                <Icon name="globe-sharp" size={30} color={colors.primary} />
              </View>
            </View>
          </View>

          <View style={styles.cardslist}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={{flexDirection: 'row'}}>
                <Icon name="location-sharp" size={25} color={colors.primary} />
                <View style={{marginLeft: 10, marginTop: -10}}>
                  <Text style={styles.textTitle}>Title(19)</Text>
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
                  19
                </Text>
                <Text
                  style={{
                    fontFamily: Poppins.Bold,
                    fontSize: 23,
                    color: '#636869',
                    marginTop: -15,
                  }}>
                  Décembre
                </Text>
              </View>
            </View>
            <Text numberOfLines={1} style={styles.textsubtitre}>
              SubTitle is a
              boooooooooooooooooooooooooooooooooooooooooooooooooooooo
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginLeft: 5,
              }}>
              <View style={{marginRight: 10, width: 290}}>
                <Text numberOfLines={5} style={styles.textdescrip}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'column',
                  width: 30,
                  alignItems: 'flex-end',
                  justifyContent: 'space-around',
                }}>
                <Icon name="call" size={30} color={colors.primary} />
                <Icon name="globe-sharp" size={30} color={colors.primary} />
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

export default Search;
