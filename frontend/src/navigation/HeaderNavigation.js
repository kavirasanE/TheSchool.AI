import React, { Component, useState } from 'react'
import { Text, View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'; 

const HeaderNavigation = () =>   {
    const [IconFocus,setIconFocus] =useState(false)

    const handleProfileNavigation =() => {
          
    }

    return (
      <View className="p-1 mt-5 flex flex-row justify-between mx-6">
        <Text className="text-center text-3xl text-black"> TheSkool.ai </Text>
       <Ionicons name={IconFocus ? "person" : "person-outline"}  size={30} onPress={handleProfileNavigation}/>
      </View>
    )
  }

  export default HeaderNavigation
