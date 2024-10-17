import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Questions from '../components/Questions';
import Answer from '../components/AnswerOptions';
import Breadcrumb from '../utility/Breadcrumb';
import {Button as NativeButton} from 'react-native-paper';
import HeaderNavigation from '../navigation/HeaderNavigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

const TestPage = ({navigation}) => {
  const handleFinalSubmit = () => {
    navigation.navigate('FinalScore');
  };
  return (
    <View style={{flex: 1, backgroundColor: 'white', paddingHorizontal: 10}}>
      <View
        style={{
          direction: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignContent: 'center',
        }}>
        <Ionicons
          name="chevron-back-outline"
          size={30}
          color="black"
          onPress={() => {
            navigation.navigate('TestDetails');
          }}
          style={{
            position: 'absolute',
            left: 10,
            top: 10,
            backgroundColor: 'white',
            borderRadius: 50,
            padding: 2,
          }}
        />
        <Ionicons
          name="medal-outline"
          size={20}
          color="black"
          onPress={() => {
            navigation.navigate('Home');
          }}
          style={{
            position: 'absolute',
            right: 20,
            top: 20,
            backgroundColor: 'white',
            borderRadius: 50,
            padding: 2,
          }}
        />
      </View>

      <View style={{direction: 'flex', flex: 1, marginTop: 60}}>
        <Text style={{textAlign: 'center', fontFamily: 'Poppins Medium'}}>
          Question 1/30
        </Text>
        <Questions />
        <Answer />

        <View className=" mt-1 ">
          <NativeButton
            mode="contained"
            className=" mx-5 rounded-full 
          px-5 py-1 "
            style={{backgroundColor: '#3442e0', marginVertical: 20}}>
            <Text
              style={{
                fontFamily: 'Poppins Medium',
                fontSize: 15,
              }}>
              Submit and Next
            </Text>
          </NativeButton>
          <NativeButton
            mode="contained"
            className=" mx-5 rounded-full 
          px-5 py-1 "
            style={{backgroundColor: '#299963', marginVertical: 20}}
            onPress={handleFinalSubmit}>
            <Text
              style={{
                fontFamily: 'Poppins Medium',
                fontSize: 15,
              }}>
              Final Submit
            </Text>
          </NativeButton>
        </View>
      </View>
    </View>
  );
};

export default TestPage;
