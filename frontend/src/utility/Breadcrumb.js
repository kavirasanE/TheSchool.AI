import React from 'react';
import {Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Breadcrumb = () => {

  
  const data = [
    {
      id: 0,
      screen: 'Home',
      route: 'Home',
    },
    {
      id: 1,
      screen: 'Tests',
      route: 'Tests',
    },
  ];

  return (
    <View className="flex flex-row justify-start items-center p-4">
      {data.map((routes, index) => (
        <View className="flex flex-row justify-between items-center gap-x-2 ml-1" key={index}>
        <Text
          className="text-md text-black subpixel-antialiased font-semibold"
          >
          {routes.screen} 
        </Text>
        <Ionicons name="chevron-forward-outline"  size={15} color="black"/>
        </View>
      ))}
    </View>
  );
};

export default Breadcrumb;
