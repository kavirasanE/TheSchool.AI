import { NavigationContainer } from '@react-navigation/native'
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import React  from 'react'
import HomeScreen from "../pages/HomeScreen";
import TestEntryDetails from '../pages/TestEntryDetails';
import WelcomeScreen from '../pages/WelcomeScreen';
import Ionicons from 'react-native-vector-icons/Ionicons'; 
import { Text, View } from 'react-native';
import HeaderNavigation from './HeaderNavigation';
import { globalStyles } from '../Theme/AppTheme';
import TestPage from '../pages/TestPage';
import FinalScore from '../pages/FinalScore';
import TestHistory from '../pages/TestHistory';
const Tab =createBottomTabNavigator()

const BottomTabNavigation = () => {

    return (
        <NavigationContainer >
          <HeaderNavigation/>
         <Tab.Navigator 
         screenOptions={({ route }) => ({
              tabBarIcon : ({focused,color,size}) => {
                let iconName;

                if(route.name === "Test") {
                  iconName =focused ? "clipboard" : "clipboard-outline"
                  return <Ionicons name={iconName} size={30} color={color}/>
                } else if(route.name === "Study") {
                  iconName =focused ? "book" : "book-outline"
                  return <Ionicons name={iconName} size={30} color={color}/>
                } else if(route.name === "Insights") {
                  iconName =focused ? "pie-chart" : "pie-chart-outline"
                  return <Ionicons name={iconName} size={30} color={color}/>
                }
              },
              tabBarActiveTintColor:"#404040",
              tabBarInactiveTintColor: "#808080",
              tabBarLabelStyle :{
                fontSize :16,
                fontWeight: '600',
              },
             tabBarStyle :{
              height:75,
              paddingBottom :10,
              paddingTop:10,
              // backgroundColor:"#FADADD"
             },
             headerShown:false
            
         })}>
          
          <Tab.Screen name='Test' component={TestHistory}  />
          <Tab.Screen name='Study' component={TestEntryDetails}/>
          <Tab.Screen name='Insights' component={WelcomeScreen}/>
         </Tab.Navigator>
         </NavigationContainer>
     
    )
  }

  export default BottomTabNavigation

 
