/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './src/App';
import Typography from './src/utils/Typography';
import {name as appName} from './app.json';

Typography();
AppRegistry.registerComponent(appName, () => App);
