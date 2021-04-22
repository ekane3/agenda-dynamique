import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  ScrollView,
  Pressable,
  Image,
  TouchableOpacity,
  Switch,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useSelector, useDispatch} from 'react-redux';
import Header from '../components/Header';
import {useLinkTo, useTheme} from '@react-navigation/native';
import Map from './Map';
import style from '../style/Settings';
import {actions} from '../store';

function Settings({navigation}) {
  const linkTo = useLinkTo();
  const {colors} = useTheme();
  const styles = style();
  const dispatch = useDispatch();
  const {setDarkTheme, setShowCommunes} = actions.settings;
  const {darkTheme, showCommunes, lieu, theme, geolocation} = useSelector(
    state => state.settings,
  );
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={{flex: 1}}>
      <Header
        isDrawer
        title={'Paramètres'}
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
        <ScrollView style={styles.scrollview}>
          <Text style={styles.textTitle}>Mes favoris</Text>
          <View style={styles.cardslist}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={{marginLeft: 10, marginTop: -5}}>
                <Text style={styles.textTitle2}>Mode nuit</Text>
              </View>
              <Switch
                trackColor={{false: colors.notification, true: colors.primary}}
                thumbColor={darkTheme ? '#fff' : '#fff'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={() => dispatch(setDarkTheme(!darkTheme))}
                value={darkTheme}
              />
            </View>
          </View>
          <View style={styles.cardslist}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={{marginLeft: 10, marginTop: -5}}>
                <Text style={styles.textTitle2}>Afficher les communes</Text>
              </View>
              <Switch
                trackColor={{false: colors.notification, true: colors.primary}}
                thumbColor={showCommunes ? '#fff' : '#fff'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={() => dispatch(setShowCommunes(!showCommunes))}
                value={showCommunes}
              />
            </View>
          </View>
          <Text style={styles.textTitle}>Choisir lieux</Text>
          <View style={styles.cardslist}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={{marginLeft: 10, marginTop: -5}}>
                <Text style={styles.textTitle2}>Tous les lieux</Text>
              </View>
              <Icon name="filter" size={25} color={colors.primary} />
            </View>
          </View>
          <Text style={styles.textTitle}>Définir thème</Text>
          <View style={styles.cardslist}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={{marginLeft: 10, marginTop: -5}}>
                <Text style={styles.textTitle2}>Choisissez un thème</Text>
              </View>
              <Icon name="filter" size={25} color={colors.primary} />
            </View>
          </View>

          <View style={{flexDirection: 'column', marginVertical: 20}}>
            <TouchableOpacity style={styles.button}>
              <Icon name="trash" size={25} color={'#fff'} />
              <Text style={styles.buttonText}>Reinitialiser</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginVertical: 35,
            }}
          />
        </ScrollView>
      </View>
    </View>
  );
}

export default Settings;
