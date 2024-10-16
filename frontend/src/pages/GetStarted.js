import React from 'react';
import {View, Text, Image} from 'react-native';
import {Button as NativeButton} from 'react-native-paper';
import { useWindowDimensions } from 'react-native';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  root:{
    fontFamily :'Poppins ExtraBold'
  },
  linear :{
    backgroundColor:"linear-gradient(180deg, rgba(255,255,255,0.5243347338935574) 0%, rgba(242,242,248,1) 100%, rgba(252,254,255,0.4515056022408963) 100%)" 
  },
  nextroot:{
    fontFamily: 'Poppins Medium'
  }
})


const GetStarted = ({navigation}) => {
  const handleNext = () => {
    navigation.navigate('Login');
  };
  return (
    <View className="flex-1" >
      <Image
        source={require('../assets/images/main.png')}
        style={{height: '100%', width: '100%'}}
    
      />

<Text className="absolute text-3xl text-center top-6 right-5 text-black" style={styles.root} >
        <Text className="text-white" style={styles.root}>The</Text> Skool.ai
      </Text>
      
      <View className="absolute  w-full  bottom-0 bg-white rounded-t-3xl">
     <Text className="m-3 text-black text-lg text-center my-10 " style={styles.nextroot}>Unlock your potential with The Skool!
     Personalized courses to help you start or advance your learning journey. </Text>
     
        <NativeButton
          mode="contained"
          onPress={handleNext}
          className=" mx-5 rounded-full 
          px-5 py-1 mb-16"
          style={{backgroundColor: '#3442e0'}} >
          <Text style={{fontFamily: 'Poppins Medium', fontSize:15,}}>  Let's Get Learning  </Text>
        </NativeButton>
      </View>
    </View>
  );
};

export default GetStarted;

