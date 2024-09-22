import React from 'react';
import {Text, View} from 'react-native';

const Breadcrumb = () => {
    const data = [
        {
            id:0,
            screen:"Home",
            route:"Home"
        },
        {
            id:1,
            screen:"Tests",
            route:"Tests"
        }
    ]
  return (
    <View className="flex flex-row justify-start items-center gap-2 p-4">
     {data.map((routes,index) => (
        <Text className="text-md text-black subpixel-antialiased font-semibold" key={index}>{routes.screen}  {">"} </Text>
     ))}
    </View>
  );
};

export default Breadcrumb;
