import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {useNavigation, useTheme} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import Poppins from '../style/fonts';
import style from '../style/Header';

const Header = ({title, isDrawer, rightIcon}) => {
  const navigation = useNavigation();
  const {colors} = useTheme();
  const styles = style();

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
          name="chevron-back"
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

export default Header;
