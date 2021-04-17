import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {
  responsiveHeight,
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
      borderRadius: 25,
    },
    scrollview: {
      padding: 20,
    },
    scrollHorizontal:{
      paddingLeft: 20,
      height: 205,
    },
    searchBar: {
      fontFamily: Poppins.Medium,
      fontSize: 15,
      height: 55,
      marginTop: -10,
      textAlign: 'center',
      alignContent: 'center',
      marginHorizontal: 20,
      backgroundColor: colors.searchBar,
      borderRadius: 25,
      borderColor: '#EF3E36',
      shadowColor: colors.shadowColor,
      shadowOffset: {width: 0, height: 10},
      shadowRadius: 10,
      shadowOpacity: 1.0,
      elevation: 5,
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
      height: responsiveScreenHeight(25),
      width: responsiveScreenWidth(90),
    },
    eventList:{
      padding: 20,
      flexDirection: 'column',
      marginVertical:15,
      backgroundColor: colors.background,
      borderRadius: 20,
      borderColor:'#EF3E36',
      shadowColor: colors.shadowColor,
      shadowOffset: { width: 0, height: 10 },
      shadowRadius: 10,
      shadowOpacity: 1.0,
      elevation: 5,
      height:125,
      justifyContent: 'center',
      width:120,
      marginRight:10 
    },
    eventImage:{
      resizeMode: 'contain', width: 60,marginLeft: 8,
    },
    textTitleEvent: {
      fontFamily: Poppins.Bold,
      fontSize: 18,
      color: '#636869',
      marginTop: 7,
    },
  
    textTitle: {
      fontFamily: Poppins.Bold,
      fontSize: 23,
      alignItems: 'center',
      color: colors.notification,
      justifyContent: 'center',
      marginTop: 7,
    },
    textsubtitre: {
      fontFamily: Poppins.Regular,
      fontSize: 16,
      alignItems: 'center',
      color: colors.notification,
      width: responsiveScreenWidth(200),
      justifyContent: 'center',
      marginTop: -30,
      marginLeft: 5,
      marginBottom: 10,
    },
    textdescrip: {
      fontSize: 12,
      color: colors.text,
      textAlign: 'justify',
    },
  });
};

export default styles;
