import {StyleSheet} from 'react-native';
import {
  responsiveScreenWidth,
  responsiveScreenHeight,
  responsiveScreenFontSize,
} from 'react-native-responsive-dimensions';
import Poppins from './fonts';
import {useTheme} from '@react-navigation/native';

const styles = () => {
  const {colors} = useTheme();
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 10,
      marginHorizontal: 12,
      marginBottom: 10,
    },
    text: {
      fontFamily: Poppins.Bold,
      fontSize: 23,
      marginVertical: 10,
      color: colors.headerTitle,
    },
  });
};

export default styles;
