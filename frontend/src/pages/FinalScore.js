import React from 'react';
import {Text, View} from 'react-native';
import Breadcrumb from '../utility/Breadcrumb';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HeaderNavigation from '../navigation/HeaderNavigation';
import {Button as NativeButton} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

const FinalScore = () => {
  const navigation = useNavigation();
  return (
    <View style={{backgroundColor:"white", flex:1}}>
       <View style={{margin:20, marginTop:50,direction:"flex",flexDirection:"row",justifyContent:"center", alignItems:"center"}}>
       <Ionicons name="cube" size={50} color="blue" />
       <Text style={{fontFamily: 'Poppins Medium', fontSize: 25,color:"black",margin:5}}>Your Scorebaord</Text>
       </View>
      
      <View className="m-2">
        <Text style={{fontFamily: 'Poppins Medium', fontSize: 18,color:"black",margin:5}}>
          You have scored 37 out of 50 marks. If you want to review your
          answers, please check here.
        </Text>
        <Text style={{fontFamily: 'Poppins Medium', fontSize: 18,color:"black",margin:5}}>
          If you want to understand your scores and insights on your all exams,
          please check here.
        </Text>
      </View>
      <View className="flex flex-row justify-center items-center gap-5 ">
        <Ionicons name="star" size={30} color="yellow" />
        <Ionicons name="star" size={30} color="yellow"/>
        <Ionicons name="star-half-outline" size={30} color="yellow" />
        <Ionicons name="star-outline" size={30} color="gray"/>
        <Ionicons name="star-outline" size={30} color="gray"/>
      </View>
      <View className="h-40 mx-20 mt-5  rounded-2xl border-2 border-black flex   justify-center items-center">
        <Text className="font-semibold text-4xl my-4 text-black/90">Your Score</Text>
        <Text className="font-semibold text-4xl my-4 text-black/90">37/50</Text>
      </View>
      <NativeButton
            mode="contained"
            style={{margin: 15, padding: 10, marginVertical: 20,borderRadius:50,backgroundColor:"#3442e0"}}
            onPress={() => navigation.navigate('Home')}>
            <Text style={{fontFamily: 'Poppins Medium', fontSize: 18}}>
              Let's Start Again
            </Text>
          </NativeButton>
    </View>
  );
};

export default FinalScore;
