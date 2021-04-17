import React from 'react';
import {View, ImageBackground, Image,Text} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {useTheme} from '@react-navigation/native';

const CustomDrawerContent = ({props, colorScheme, Theme}) => {
  console.log(colorScheme);
  const {colors} = useTheme();
  const {state, ...rest} = props;
  const newState = {...state};
  newState.routes = newState.routes.filter(
    item => item.name !== 'EventDetails',
  );
  return (
    <DrawerContentScrollView {...props}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginVertical: 35,
        }}>
        <Image
          style={{resizeMode: 'contain', width: 250}}
          source={require('../../assets/images/logo_avec_texte.png')}
        />
      </View>
      <DrawerItemList state={newState} {...rest} />
      <View
        style={{
          justifyContent: 'flex-end',
          alignItems: 'center',
          marginTop:200,
      }}>
        <Text style={{ color: colors.notification }}>© Association Info Limousin 2021</Text>
      </View>
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;