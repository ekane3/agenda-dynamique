import React, {useEffect, useState} from 'react';
import {
  View,
  TextInput,
  Text,
  Image,
  ScrollView,
  Pressable,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Header from '../components/Header';
import {useTheme} from '@react-navigation/native';
import style from '../style/Search';
import EventCard from '../components/EventCard';
import api from '../utils/api';

function Search({navigation}) {
  const [lieux, setLieux] = useState([]);
  const [groupeLieu, setGroupeLieu] = useState([]);
  const [themes, setThemes] = useState([]);
  const {colors} = useTheme();
  const styles = style();
  const [isLoading, setLoading] = useState(true);
  const [isRefreshing, setRefreshing] = useState(false);
  const [data, setData] = useState([]);
  const [oldData, setOldData] = useState([]);
  const [meta, setMeta] = useState({});
  const [currentPage, setCurrentPage] = useState(0);

   const fetchData = async () => {
    try {
      setRefreshing(true);
      const {meta, liste_evenement} = await api.getEvent({page: currentPage});
      setMeta(meta);
      setData(liste_evenement);
    } catch (e) {
      console.error(e);
    } finally {
      setRefreshing(false);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  
 /* if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size={'large'} color={colors.primary} />
      </View>
    );
  }
*/
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
          onSubmitEditing={event =>
            setData(prevData =>
              prevData.filter(
                item =>
                  item.titre.includes(event.nativeEvent.text) ||
                  item.desc.includes(event.nativeEvent.text),
              ),
            )
          }
          placeholder="Recherche"
          keyboardType="default"
          selectionColor={colors.primary}
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
        <View style={styles.scrollview}>
          <FlatList
            ListEmptyComponent={() => {
              return (
                <Pressable
                  onPress={() => fetchData()}
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text style={{color: '#EF3E36', fontSize: 18}}>
                    Recharger des données
                  </Text>
                </Pressable>
              );
            }}
            refreshing={isRefreshing}
            data={data}
            onRefresh={() => fetchData()}
            keyExtractor={item => String(item.id)}
            extraData={data}
            onEndReachedThreshold={distance => {
              if (distance === 20) {
                setCurrentPage(prevCount => prevCount + 1);
                fetchData();
              }
            }}
            renderItem={item => <EventCard data={item} />}
          />
        </View>
      </View>
    </View>
  );
}

export default Search;