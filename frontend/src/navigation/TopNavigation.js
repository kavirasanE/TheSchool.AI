
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import GetStarted from '../pages/GetStarted';
import HomeScreen from '../pages/HomeScreen';
import TestEntryDetails from '../pages/TestEntryDetails';
import BottomTabNavigation from './BottomTabNavigation';


const Stack = createNativeStackNavigator();

const TopNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="GetStarted"
          component={GetStarted}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="TestEntryDetails"
          component={TestEntryDetails}
          options={{title: 'The Skool.ai'}}
        />
        <Stack.Screen/>
      </Stack.Navigator>
      <BottomTabNavigation/>
    </NavigationContainer>
  );
};

export default TopNavigation;
