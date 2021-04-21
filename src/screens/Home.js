import React, {useEffect, useState} from 'react';
import {
  View,
  TextInput,
  FlatList,
  Text,
  Pressable,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Header from '../components/Header';
import EventCard from '../components/EventCard';
import {useTheme} from '@react-navigation/native';
import style from '../style/Home';
import api from '../utils/api';

function Home({navigation}) {
  const styles = style();
  const {colors} = useTheme();
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

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size={'large'} color={colors.primary} />
      </View>
    );
  }
  return (
    <View style={{flex: 1}}>
      <Header
        isDrawer
        title={'Accueil'}
        rightIcon={
          <Icon
            name="map-outline"
            size={40}
            color={colors.primary}
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

export default Home;