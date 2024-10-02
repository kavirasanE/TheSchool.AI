import React from 'react';
import {View, Text, Image} from 'react-native';
import {Button as NativeButton} from 'react-native-paper';

const GetStarted = ({navigation}) => {
  const handleNext = () => {
    navigation.navigate('TabNavigator');
  };
  return (
    <View className="flex-1">
      <Image
        source={require('../assests/images/main.png')}
        style={{height: '100%', width: '100%'}}
      />

      <Text className="absolute text-4xl text-center top-5 right-5 font-extrabold text-black">
        <Text className="text-white">The</Text>skool.ai
      </Text>
      <View className="absolute  w-full  bottom-20 ">
        <NativeButton
          mode="contained"
          onPress={handleNext}
          className=" mx-5 text-white bg-rose-600 hover:bg-blue-800 
          focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm 
          px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
          <Text className="text-xl"> Let's Get Learning </Text>
        </NativeButton>
      </View>
    </View>
  );
};

export default GetStarted;
