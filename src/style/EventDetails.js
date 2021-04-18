import {StyleSheet} from 'react-native';
import {
  responsiveScreenWidth,
  responsiveScreenHeight,
  responsiveScreenFontSize
} from "react-native-responsive-dimensions";
import Poppins from './fonts';
import {useTheme} from '@react-navigation/native';


const styles = () => {
  const {colors} = useTheme();
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.containerbgColor,
      borderRadius: 30,
    },
    scrollview: {
      padding: 20,
    },
    cardslist: {
      padding: 20,
      marginVertical: 15,
      backgroundColor: colors.background,
      borderRadius: 20,
      borderColor: '#EF3E36',
      shadowColor: colors.shadowColor,
      shadowOffset: {width: 0, height: 10},
      shadowRadius: 10,
      shadowOpacity: 1.0,
      elevation: 5,
    },
    textTitle: {
      fontFamily: Poppins.Bold,
      fontSize: 23,
      alignItems: 'center',
      color: colors.headerTitle,
      justifyContent: 'center',
      marginTop: 7,
    },
    textsubtitre: {
      fontFamily: Poppins.Regular,
      fontSize: 16,
      alignItems: 'center',
      color: colors.notification,
      justifyContent: 'center',
      marginTop: -3,
      marginLeft: 5,
      marginBottom: 10,
    },
    textdescrip: {
      fontSize: 12,
       marginLeft:5,
      marginBottom:10,
      color: colors.text,
      textAlign: 'justify',
    },
  });
};

export default styles;
