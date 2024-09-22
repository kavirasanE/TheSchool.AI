import * as React from 'react';
import {View, Text} from 'react-native';
import Breadcrumb from '../utility/Breadcrumb';
import {Button as NativeButton} from 'react-native-paper';

const HomeScreen = () => {
  const handleNext = () => {
    navigation.navigate('HomeScreen');
  };

  return (
    <View>
      <Breadcrumb />
      <Text>This is the Home Screen</Text>
      <View className= "flex flex-col justify-center gap-y-10 mx-10 mt-10">
        <NativeButton
          mode="contained"
          onPress={handleNext}
          className="bg-blue-500 p-2 ">
          <Text className="text-xl"> Take a Test </Text>
        </NativeButton>
        <NativeButton
          mode="contained"
          onPress={handleNext}
          className="bg-blue-500 p-2 ">
          <Text className="text-xl"> Past Test </Text>
        </NativeButton>
        <NativeButton
          mode="contained"
          onPress={handleNext}
          className="bg-blue-500 p-2 ">
          <Text className="text-xl"> Define Test/Exam portion</Text>
        </NativeButton>
      </View>
    </View>
  );
};

export default HomeScreen;
