import React, {Component} from 'react';
import {Text, View} from 'react-native';

const Questions = () => {
  return (
    <View className="flex flex-row justify-start items-center mx-2 gap-x-4 ">
        <Text className="text-bold text-xl text-black subpixel-antialiased">1.</Text>
      <Text className="text-bold text-xl text-black subpixel-antialiased my-5">
       What is the primary function of React Native in
         mobile app development?
      </Text>
    </View>
  );
};

export default Questions;
