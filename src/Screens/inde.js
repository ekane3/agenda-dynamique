/**
 * @format
 */

import React from 'react';
import Screen from './Screen';

AppRegistry.registerComponent(appName, () => App);
export const HomeScreen = ({navigation}) => <Screen navigation={navigation} name="Home"/>
export const Searchcreen = ({navigation}) => <Screen navigation={navigation} name="Search"/>
