import React from 'react';
import {Text, View} from 'react-native';
import Breadcrumb from '../utility/Breadcrumb';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HeaderNavigation from '../navigation/HeaderNavigation';

const FinalScore = () => {
  return (
    <View>
      <HeaderNavigation/>
      <Breadcrumb />
      <View className="m-2">
        <Text className="font-semibold text-lg my-4 text-black/90">
          You have scored 17 out of 30 marks. If you want to review your
          answers, please check here.
        </Text>
        <Text className="font-semibold text-lg my-2 text-black/90">
          If you want to understand your scores and insights on your all exams,
          please check here.
        </Text>
      </View>
      <View className="flex flex-row justify-center items-center gap-5 mt-5">
        <Ionicons name="star" size={30} color="yellow"/>
        <Ionicons name="star" size={30} color="yellow"/>
        <Ionicons name="star-half-outline" size={30} color="yellow" />
        <Ionicons name="star-outline" size={30} color="gray"/>
        <Ionicons name="star-outline" size={30} color="gray"/>
      </View>
      <View className="h-40 mx-20 mt-5  rounded-2xl border-2 border-black flex   justify-center items-center">
        <Text className="font-semibold text-4xl my-4 text-black/90">Your Score</Text>
        <Text className="font-semibold text-4xl my-4 text-black/90">17/30</Text>
      </View>
    </View>
  );
};

export default FinalScore;
