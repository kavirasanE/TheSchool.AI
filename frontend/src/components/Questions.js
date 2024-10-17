import React, {Component} from 'react';
import {Text, View} from 'react-native';

const Questions = () => {
  return (
    <View className="flex flex-row justify-start items-center mx-2 my-5 gap-x-4 ">
        <Text className="text-bold text-xl text-black subpixel-antialiased">1.</Text>
      <Text  style={{fontFamily: 'Poppins Medium', fontSize: 18,color:"black"}}>
       What is the primary function of React Native in
         mobile app development?
      </Text>
    </View>
  );
};

export default Questions;
