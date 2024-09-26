
import React, { useState } from 'react';
import {Text, View} from 'react-native';
import TopNavigation from './src/navigation/TopNavigation';
import BottomTabNavigation from './src/navigation/BottomTabNavigation';
import DrawerNavigation from './src/navigation/DrawerNavigation';
import { globalStyles } from './src/Theme/AppTheme';
import GetStarted from './src/pages/GetStarted';

const App = () => {
  
  return (
    < >
    {/* <GetStarted/> */}
      <BottomTabNavigation />
    </>
  );
};

export default App;
