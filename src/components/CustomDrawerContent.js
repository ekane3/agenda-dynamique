import React from 'react';
import {View, ImageBackground, Image,Text} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

const CustomDrawerContent = ({props, colorScheme, Theme}) => {
  console.log(colorScheme);
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
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 235,
      }}>
        <Text>© Association Info Limousin 2021</Text>
      </View>
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;