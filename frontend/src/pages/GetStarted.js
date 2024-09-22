import React from 'react';
import {View, Text, Image} from 'react-native';
import {Button as NativeButton} from 'react-native-paper';

const GetStarted = ({navigation}) => {
  const handleNext = () => {
    navigation.navigate('TestEntryDetails');
  };
  return (
    <View className="relative">
      <Image
        source={require('../assests/images/main.png')}
        style={{height: '100%', width: '100%'}}
      />

      <Text className="absolute text-4xl text-center top-5 right-5 font-extrabold text-black">
        {' '}
        <Text className="text-white">The</Text>skool.ai
      </Text>
      <View className="absolute  w-full h-96 bottom-0 mb-24 ">
        <NativeButton
          mode="contained"
          onPress={handleNext}
          className="bg-rose-500 p-2  mx-20 top-64">
          <Text className="text-xl"> Get Started </Text>
        </NativeButton>
      </View>
    </View>
  );
};

export default GetStarted;
