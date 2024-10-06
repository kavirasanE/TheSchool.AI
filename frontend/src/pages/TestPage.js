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
    <View style={{flex:1,backgroundColor:"white",padding:10}}>
     
      <Questions />
      <Answer />

      <View className=" mt-1 ">
        <NativeButton
          mode="contained"
          style={{margin: 15, padding: 5, marginVertical: 20,borderRadius:50,backgroundColor:"#3442e0"}}>
          <Text className="text-xl"> Submit and Next </Text>
        </NativeButton>
        <NativeButton
          mode="contained"
          style={{margin: 15,padding:5, marginVertical: 20,borderRadius:50,backgroundColor:"#3ec503"}}
          onPress={handleFinalSubmit}>
          <Text className="text-xl" > Final Submit</Text>
        </NativeButton>
      </View>
    </View>
  );
};

export default TestPage;
