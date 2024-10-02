import React, {Component, useState} from 'react';
import {Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const HeaderNavigation = () => {
  const navigation = useNavigation();
  const [IconFocus, setIconFocus] = useState(false);
  const handleProfileNavigation = () => {};
  return (
    <View className="flex flex-row justify-between  bg-white pt-5 px-5 pb-2">
      <Ionicons name='menu' size={25}/>
      <Text className="text-center text-2xl text-black" onPress={() => navigation.navigate("Home")}> TheSkool.ai </Text>
      <Ionicons
        name={IconFocus ? 'person' : 'person-outline'}
        size={25}
        onPress={handleProfileNavigation}
      />
    </View>
  );
};

export default HeaderNavigation;
