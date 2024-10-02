import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Questions from '../components/Questions';
import Answer from '../components/AnswerOptions';
import Breadcrumb from '../utility/Breadcrumb';
import {Button as NativeButton} from 'react-native-paper';
import HeaderNavigation from '../navigation/HeaderNavigation';

const TestPage = ({navigation}) => {

  const handleFinalSubmit = () => {
     navigation.navigate("FinalScore")
  }
  return (
    <View className=" flex-1 px-2">
      <HeaderNavigation/>
      <Breadcrumb />
      <Questions />
      <Answer />

      <View className=" mt-1 ">
        <NativeButton
          mode="contained"
          className=" mx-5 text-white bg-blue-600 hover:bg-blue-800 
          focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm 
          p-1 m-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
          <Text className="text-xl"> Submit and Next </Text>
        </NativeButton>
        <NativeButton
          mode="contained"
          className=" mx-5 text-white bg-green-500 hover:bg-blue-800 
          focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm 
         p-1 m-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onPress={handleFinalSubmit}>
          <Text className="text-xl" > Final Submit</Text>
        </NativeButton>
      </View>
    </View>
  );
};

export default TestPage;
