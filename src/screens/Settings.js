import React from 'react';
import {View, Text, Pressable, Switch} from 'react-native';
import {useTheme} from '@react-navigation/native';
import Header from '../components/Header';

const Settings = () => {
  const {colors} = useTheme();
  console.log(colors);
  return (
    <View style={{flex: 1}}>
      <Header isDrawer title={'Paramètres'} />
      <View style={{flex: 1}}>
        {/* <Pressable
          style={style.menuItemContainer}
          onPress={() => dispatch(setDarkTheme())}>
          <View style={style.menuTextContainer}>
            <Text style={style.menuTextHeader}>Dark mode</Text>
            <Text style={style.menuTextHint}>
              &#127770; Activates or &#127773;desactivates the dark theme.
            </Text>
          </View>
          <Switch
            trackColor={{false: colors.primary, true: colors.border}}
            thumbColor={darkTheme ? colors.primary : colors.border}
            ios_backgroundColor={colors.primary}
            onValueChange={() => dispatch(setDarkTheme())}
            value={darkTheme}
          />
        </Pressable> */}
      </View>
    </View>
  );
};

export default Settings;
