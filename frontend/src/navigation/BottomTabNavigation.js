import { NavigationContainer } from '@react-navigation/native'
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import React  from 'react'
import HomeScreen from "../pages/HomeScreen";
import TestEntryDetails from '../pages/TestEntryDetails';
import WelcomeScreen from '../pages/WelcomeScreen';

const Tab =createBottomTabNavigator()

const BottomTabNavigation = () => {


    return (
     <NavigationContainer>
         <Tab.Navigator>
          <Tab.Screen name='Home' component={HomeScreen}/>
          <Tab.Screen name='TestEntry' component={TestEntryDetails}/>
          <Tab.Screen name='Study' component={WelcomeScreen}/>
         </Tab.Navigator>
     </NavigationContainer>
    )
  }

  export default BottomTabNavigation
