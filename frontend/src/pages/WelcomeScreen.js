import React  from 'react'
import { Image, Text, View } from 'react-native'
import bulb from "../assests/images/welcomebulb.png"
import {globalStyles} from "../Theme/AppTheme"
import HeaderNavigation from '../navigation/HeaderNavigation'
const WelcomeScreen = ({navigation}) => {

    return (
      <>
       <HeaderNavigation/>
      <View style={globalStyles.Background}  className="flex-1 p-3 ">
        <Text className="font-bold text-2xl text-black py-4 border-b-2 border-gray-400"  > Welcome Aadhini... </Text>
        
        <Text className="font-semibold text-lg my-4 text-black/90 ">Quarterly exam is only 11 days away - do you want to
        <Text className="text-blue-500" onPress={() => navigation.navigate("Study")}> study?   </Text></Text>
        <Text className="font-semibold text-lg my-4 text-black/90 ">
        Quarterly exam is only 11 days away - do you want to 
        <Text className="text-blue-500" onPress={() => navigation.navigate("Test")}>  test your knowledge?  </Text>
        </Text>
        <Text  className="font-bold text-2xl text-black py-4 border-b-2 border-gray-400">Do you know?</Text>
        <View className="my-10 flex flex-row  justify-between items-center ">
        <Image source={bulb} className="w-1/3 h-40"/>
        <Text className="font-semibold text-lg my-4 text-black/90 w-3/5 ">The greatest glory is not never falling but, in rising every time we fall...</Text>
        </View>
      </View>
      </>
    )
  }

  export default WelcomeScreen
