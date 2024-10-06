import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import TestEntryDetails from '../pages/TestEntryDetails';
import TestScreen from '../pages/TestScreen';
import TestPage from '../pages/TestPage';
import FinalScore from "../pages/FinalScore"


const Stack =createNativeStackNavigator();

const TestStackNavigation = () => {
  return (
    <Stack.Navigator   options={{headerShown: false}}>
        <Stack.Screen name='TestStart' component={TestScreen} options={{headerShown: false}}/>
        <Stack.Screen  name='TestDetails' component={TestEntryDetails} options={{headerShown: false}}/>
        <Stack.Screen  name='TestPage' component={TestPage} options={{headerShown: false}}/>
        <Stack.Screen  name='FinalScore' component={FinalScore} options={{headerShown: false}}/>
    </Stack.Navigator>
  );
};

export default TestStackNavigation;
