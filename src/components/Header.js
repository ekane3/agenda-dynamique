import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import Poppins from '../style/fonts';


const Header = ({title, isDrawer, rightIcon}) => {
  const navigation = useNavigation();
  console.log(navigation);
  return (
    <View style={styles.container}>
      { isDrawer ? 
        <Icon name="menu" size={50} color="#EF3E36" onPress={navigation.toggleDrawer()}/>
        : <Icon name="arrow-back" size={50} color="#EF3E36" onPress={() => navigation.goBack()}/>
      }
      <Text style={styles.text}>{title}</Text>
      {rightIcon}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:"row",
    justifyContent:"space-between",
    marginTop:10,
    marginHorizontal:12

  },
  text:{  
    fontFamily: Poppins.Bold, 
    fontSize: 23,
    marginVertical:10,
    color:"#636869",
  }
  });

export default Header;