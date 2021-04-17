import React,{useEffect,useState} from 'react';
import {View,TextInput,FlatList, Text,TouchableOpacity, StyleSheet,Button,ScrollView,Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Poppins from '../style/fonts';
import Header from '../components/Header';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from 'react-native-responsive-dimensions';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useLinkTo,useTheme } from '@react-navigation/native';
import Map from './Map';


function Home({ navigation }) {
  const linkTo = useLinkTo();
  const {colors} = useTheme();
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  console.log(data);
    useEffect(() => {
    fetch('https://www.externe.agenda-dynamique.com/externe/flux.php?type=0&npp=1')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
  <View style={{flex:1}}>
    <Header
      isDrawer
      title={'Accueil'}
      rightIcon={<Icon name="map-outline" size={40} color="#EF3E36" onPress={() => navigation.navigate('Map')}/>}
    />
    <View style={styles.container}>
      <TextInput
          style={styles.searchBar}
          placeholder="Recherche"
          keyboardType="default"
          selectionColor={"#EF3E36"}
        />
      <ScrollView style={styles.scrollview}>
      
        <View style={{ flex: 1, padding: 24 }}>
          {isLoading ? <Text>Loading...</Text> : 
          ( <View style={{ flex: 1, flexDirection: 'column', justifyContent:  'space-between'}}>
              <FlatList
                data={data.liste_evenement}
                keyExtractor={({ id }, index) => id}
                renderItem={({ item }) => {
                  console.log({item});
                  return <Text>{item.id + '. ' + item.titre + '. ' + item.desc + '. ' + item.date_format_fr + '. ' + item.contact.tel + '. ' + item.contact.site + '. ' + item.lieu.nom +'('+ item.lieu.dep+')'}</Text>
                }}
              />
               <FlatList
                data={data.liste_evenement}
                keyExtractor={({ id }, index) => id}
                renderItem={({ item }) => (
                  <TouchableOpacity activeOpacity={0.9} style={styles.cardslist} onPress={() => navigation.navigate('EventDetails')} >
                    <View style={{flexDirection: 'row',justifyContent: 'space-between'}}>
                      <View style={{flexDirection: 'row',}}>
                        <Icon
                          name="location-sharp"
                          size={25}
                          color={colors.primary}
                        />
                        <View style={{marginLeft:10,marginTop:-10,}}>
                          <Text style={styles.textTitle}>{item.lieu.nom +'('+ item.lieu.dep+')'}</Text>
                        </View>
                      </View>
                      <View style={{flexDirection: 'column',alignItems: 'flex-end',justifyContent: 'space-evenly'}}>
                        <Text style={{ fontFamily: Poppins.Bold,fontSize: 23,color: '#EF3E36'}}>{item.date}</Text>
                        <Text style={{ fontFamily: Poppins.Bold,fontSize: 23,color: '#636869',marginTop:-15}}>{item.date}</Text>
                      </View>
                    </View>
                    <Text numberOfLines={1} style={styles.textsubtitre}>{ item.titre }</Text>
                    <View style={{flexDirection: 'row',justifyContent: 'space-between',marginLeft:5}}>
                      <View style={{marginRight:10,width:290}}>
                        <Text numberOfLines={5} style={styles.textdescrip}>{item.desc} </Text>
                      </View>
                      <View style={{flexDirection: 'column',width:30,alignItems: 'flex-end',justifyContent: 'space-around',}}>
                          <Icon
                            onPress={() => Linking.openURL('tel:' + item.contact.tel)}
                            name="call"
                            size={30}
                            color={colors.primary}
                          />
                          <Icon
                            onPress={() => Linking.openURL(item.contact.site)}
                            name="globe-sharp"
                            size={30}
                            color={colors.primary}
                          />
                      </View>
                    </View>
                  </TouchableOpacity>
                )}
              />
            </View>
          )}
        </View>

        <TouchableOpacity activeOpacity={0.9} style={styles.cardslist} onPress={() => navigation.navigate('EventDetails')} >
          <View style={{flexDirection: 'row',justifyContent: 'space-between'}}>
            <View style={{flexDirection: 'row',}}>
              <Icon
                name="location-sharp"
                size={25}
                color={colors.primary}
              />
              <View style={{marginLeft:10,marginTop:-10,}}>
                <Text style={styles.textTitle}>Title(1)</Text>
              </View>
            </View>
            <View style={{flexDirection: 'column',alignItems: 'flex-end',justifyContent: 'space-evenly'}}>
              <Text style={{ fontFamily: Poppins.Bold,fontSize: 23,color: '#EF3E36'}}>29</Text>
              <Text style={{ fontFamily: Poppins.Bold,fontSize: 23,color: '#636869',marginTop:-15}}>Mars</Text>
            </View>
          </View>
          <Text numberOfLines={1} style={styles.textsubtitre}>SubTitle is a boooooooooooooooooooooooooooooooooooooooooooooooooooooo</Text>
          <View style={{flexDirection: 'row',justifyContent: 'space-between',marginLeft:5,height: hp('30%'),
    width: wp('60%'),}}>
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
        </TouchableOpacity>

        <View style={styles.cardslist}>
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
              <Text style={{ fontFamily: Poppins.Bold,fontSize: 23,color: '#EF3E36'}}>19</Text>
              <Text style={{ fontFamily: Poppins.Bold,fontSize: 23,color: '#636869',marginTop:-15}}>Décembre</Text>
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
        </View>
      </ScrollView>
    </View>
    
   
  </View>
   
    
  );
}
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
    height: responsiveHeight(25),
    width: responsiveWidth(90),
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

export default Home;
