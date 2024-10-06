import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React  from 'react';
import TestEntryDetails from '../pages/TestEntryDetails';
import TestPage from '../pages/TestPage';
import FinalScore from '../pages/FinalScore';
import TestScreen from '../pages/TestScreen';

const Stack =createNativeStackNavigator();

const StudyStackNavigation = () => {
  return (
    <Stack.Navigator>
            <Stack.Screen
        name="TestStart"
        component={TestScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen name="TestDetails" component={TestEntryDetails} />
      <Stack.Screen name="TestPage" component={TestPage} />
      <Stack.Screen name="FinalScore" component={FinalScore} />
    </Stack.Navigator>
  );
};

export default StudyStackNavigation;
