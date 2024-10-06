import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import TestEntryDetails from '../pages/TestEntryDetails';
import WelcomeScreen from '../pages/WelcomeScreen';
import TestHistory from '../pages/TestHistory';
import Ionicons from 'react-native-vector-icons/Ionicons';
import TestStackNavigation from './TestStackNavigation';
import StudyStackNavigation from './StudyStackNavigation';

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Test') {
            iconName = focused ? 'clipboard' : 'clipboard-outline';
            return <Ionicons name={iconName} size={25} color={color} />;
          } else if (route.name === 'Study') {
            iconName = focused ? 'book' : 'book-outline';
            return <Ionicons name={iconName} size={25} color={color} />;
          } else if (route.name === 'Insights') {
            iconName = focused ? 'pie-chart' : 'pie-chart-outline';
            return <Ionicons name={iconName} size={25} color={color} />;
          } else if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
            return <Ionicons name={iconName} size={25} color={color} />;
          }
        },
        tabBarActiveTintColor: '#404040',
        tabBarInactiveTintColor: '#808080',
        tabBarLabelStyle: {
          fontSize: 16,
          fontWeight: '600',
          fontFamily: 'Poppins Medium',
        },
        tabBarStyle: {
          height: 75,
          paddingBottom: 10,
          paddingTop: 10,
          // backgroundColor:"#FADADD"
        },
        headerShown: false,
      })}>
      {/* <Tab.Screen
        name="GetStarted"
        component={StackNavigation}
      /> */}
      <Tab.Screen
        name="Home"
        component={WelcomeScreen}

        // options={{
        //   tabBarButton: () => null,
        // }}
      />
      <Tab.Screen name="Test" component={TestStackNavigation} />
      <Tab.Screen name="Study" component={StudyStackNavigation} />
      <Tab.Screen name="Insights" component={TestHistory} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
