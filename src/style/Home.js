import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Poppins from './fonts';
import {useTheme} from '@react-navigation/native';

const styles = () => {
  const {colors} = useTheme();
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      borderRadius: 25,
    },
    scrollview: {
      padding: 20,
    },
    searchBar: {
      fontFamily: Poppins.Medium,
      fontSize: 15,
      height: 55,
      marginTop: -10,
      textAlign: 'center',
      alignContent: 'center',
      marginHorizontal: 20,
      backgroundColor: '#FFFFFF',
      borderRadius: 10,
      borderColor: '#EF3E36',
      shadowColor: '#000000',
      shadowOffset: {width: 0, height: 10},
      shadowRadius: 10,
      shadowOpacity: 1.0,
      elevation: 5,
    },
    cardslist: {
      padding: 20,
      marginVertical: 15,
      backgroundColor: '#FFFFFF',
      borderRadius: 20,
      borderColor: '#EF3E36',
      shadowColor: '#000000',
      shadowOffset: {width: 0, height: 10},
      shadowRadius: 10,
      shadowOpacity: 1.0,
      elevation: 5,
      height: hp('25%'),
      width: wp('90%'),
    },
    textTitle: {
      fontFamily: Poppins.Bold,
      fontSize: 23,
      alignItems: 'center',
      color: '#636869',
      justifyContent: 'center',
      marginTop: 7,
    },
    textsubtitre: {
      fontFamily: Poppins.Regular,
      fontSize: 16,
      alignItems: 'center',
      color: colors.notification,
      width: 200,
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
