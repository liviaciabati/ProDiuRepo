import { Navigation } from 'react-native-navigation';

export function registerScreens() {
  //Navigation.registerComponent('Login', () => require('./Login').default);
  Navigation.registerComponent('Home', () => require('./Home').default);
  Navigation.registerComponent('Simple', () => require('./Simple').default);
  Navigation.registerComponent('Sidebar', () => require('./Sidebar').default);
}
