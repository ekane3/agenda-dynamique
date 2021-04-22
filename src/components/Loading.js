import React from 'react';
import {View, ActivityIndicator, Image} from 'react-native';
import LoadingStyles from '../style/Loading';

const Loading = () => {
  const styles = LoadingStyles();
  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        resizeMethod="auto"
        style={styles.logo}
        source={require('../../assets/images/logo_avec_texte.png')}
      />
      <ActivityIndicator size={'large'} color="#3782ec" />
    </View>
  );
};

export default Loading;
