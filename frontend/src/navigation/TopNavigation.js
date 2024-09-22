// import 'react-native-gesture-handler';
// import React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
// import {createDrawerNavigator} from '@react-navigation/drawer';
// import GetStarted from '../pages/GetStarted';
// import HomeScreen from '../pages/HomeScreen';

// const Drawer = createDrawerNavigator();

// const TopNavigation = () => {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator>
//         <Drawer.Screen
//           name="GetStarted"
//           component={GetStarted}
//           options={{headerShown: false}}
//         />
//         <Drawer.Screen
//           name="HomeScreen"
//           component={HomeScreen}
//           options={{title: 'The Skool.ai'}}
//         />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// };

// export default TopNavigation;

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import GetStarted from '../pages/GetStarted';
import HomeScreen from '../pages/HomeScreen';
import TestEntryDetails from '../pages/TestEntryDetails';

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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default TopNavigation;
