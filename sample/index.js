import { AppRegistry, YellowBox } from 'react-native';
import App from './src/App';

// Ignore isMounted tip.
YellowBox.ignoreWarnings([
  'Warning: isMounted(...) is deprecated',
  'Module RCTImageLoader'
]);

AppRegistry.registerComponent('sample', () => App);
