import React from 'react';
import {View, ImageBackground, Image} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

const CustomDrawerContent = ({props, colorScheme, Theme}) => {
  console.debug(props);
  return (
    <DrawerContentScrollView {...props}>
      <View style={{width: '100%', height: 300}}>
        <ImageBackground
          resizeMode="cover"
          source={require('../../assets/images/drawerBg.jpg')}
          style={{
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
          }}
          imageStyle={{
            position: 'absolute',
            width: '100%',
            height: '100%',
          }}>
          <Image
            style={{resizeMode: 'cover', height: 80, width: 80}}
            source={require('../../assets/images/logo_sans_texte.png')}
          />
        </ImageBackground>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;
