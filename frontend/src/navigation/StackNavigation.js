import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import GetStarted from '../pages/GetStarted';
import WelcomeScreen from '../pages/WelcomeScreen';
import BottomTabNavigation from './BottomTabNavigation';
import Login from '../pages/Login';
import SubscriptionPage from '../pages/SubscriptionPage';
import PaymentSubscription from '../pages/PaymentSubscription';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Subscription">
      <Stack.Screen
        name="Subscription"
        component={SubscriptionPage}
        options={{headerShown: false}}
      />
      <Stack.Screen
      name='PaymentSubscription'
      component={PaymentSubscription}
      options={{headerShown:false}}/>
      <Stack.Screen
        name="GetStarted"
        component={GetStarted}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="TabNavigator"
        component={BottomTabNavigation}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default StackNavigation;
