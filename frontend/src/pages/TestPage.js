import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Questions from '../components/Questions';
import Answer from '../components/AnswerOptions';
import Breadcrumb from '../utility/Breadcrumb';
import {Button as NativeButton} from 'react-native-paper';

const TestPage = () => {
  return (
    <View className=" flex-1 px-2">
      <Breadcrumb />
      <Questions />
      <Answer />

      <View className="m-5 mt-10 ">
        <NativeButton
          mode="contained"
          className=" mx-5 text-white bg-blue-600 hover:bg-blue-800 
          focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm 
          px-2.5 py-2.5 m-2 mb-10 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
          <Text className="text-xl"> Submit and Next </Text>
        </NativeButton>
        <NativeButton
          mode="contained"
          className=" mx-5 text-white bg-green-500 hover:bg-blue-800 
          focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm 
          px-2.5 py-2.5 m-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
          <Text className="text-xl"> Final Submit</Text>
        </NativeButton>
      </View>
    </View>
  );
};

export default TestPage;
