import React  from 'react'
import { Image, Text, View } from 'react-native'
import Breadcrumb from '../utility/Breadcrumb'
import bulb from "../assests/images/welcomebulb.png"
const WelcomeScreen = () => {

    return (
      <View>
        <Breadcrumb/>
        <Text> Welcome Aadhini </Text>
        <Text>Quarterly exam is only 11 days away - do you want to study? </Text>
        <Text>
        Quarterly exam is only 11 days away - do you want to test your knowledge?
        </Text>
        <Text>Do you know?</Text>
        <Text>The greatest glory is not never falling; but, in rising every time we fall...</Text>
        <Image source={bulb}></Image>
      </View>
    )
  }

  export default WelcomeScreen
