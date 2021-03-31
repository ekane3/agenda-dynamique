/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import {enableScreens} from 'react-native-screens';
import App from './src/App';
import Typography from './src/utils/Typography';
import {name as appName} from './app.json';

enableScreens();
Typography();

AppRegistry.registerComponent(appName, () => App);
