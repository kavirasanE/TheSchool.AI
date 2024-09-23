
import React, { useState } from 'react';
import {Text, View} from 'react-native';
import TopNavigation from './src/navigation/TopNavigation';
import BottomTabNavigation from './src/navigation/BottomTabNavigation';
import DrawerNavigation from './src/navigation/DrawerNavigation';

const App = () => {
   
  return(
    <>
    {/* <TopNavigation /> */}
    {/* <BottomTabNavigation /> */}
    <DrawerNavigation/>
    </>
  ) 
    
};

export default App;



