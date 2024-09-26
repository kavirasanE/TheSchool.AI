import * as React from 'react';
import { AppRegistry } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { name as appName } from './app.json';
import App from './App';

export default function index() {
  return (
    <PaperProvider>
      <App  />
    </PaperProvider>
  );
}



AppRegistry.registerComponent(appName, () => App);