import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import GetStarted from '../pages/GetStarted';
import HomeScreen from '../pages/HomeScreen';

const Drawer = createDrawerNavigator();

const TopNavigation = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          name="GetStarted"
          component={GetStarted}
          options={{headerShown: false}}
        />
        <Drawer.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{title: 'The Skool.ai'}}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default TopNavigation;