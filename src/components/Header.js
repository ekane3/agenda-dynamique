import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {useNavigation,useTheme} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import Poppins from '../style/fonts';

const Header = ({title, isDrawer, rightIcon}) => {
  const navigation = useNavigation();
  const {colors} = useTheme();
  console.log(navigation.toggleDrawer ? true : false)
  return (
    <View style={styles.container}>
      {isDrawer ? (
        <Icon
          name="menu"
          size={50}
          color={colors.primary}
          onPress={() => navigation.toggleDrawer()}
        />
      ) : (
        <Icon
          name="arrow-back"
          size={50}
          color={colors.primary}
          onPress={() => navigation.goBack()}
        />
      )}
      <Text style={styles.text}>{title}</Text>
      {rightIcon || <View />}
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginHorizontal: 12,
  },
  text: {
    fontFamily: Poppins.Bold,
    fontSize: 23,
    marginVertical: 10,
    color: '#636869',
  },
});

export default Header;
