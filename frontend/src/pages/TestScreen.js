import * as React from 'react';
import {View, Text, Image} from 'react-native';
import Breadcrumb from '../utility/Breadcrumb';
import {Button as NativeButton} from 'react-native-paper';
import HeaderNavigation from '../navigation/HeaderNavigation';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
const TestScreen = () => {
  const navigation = useNavigation();

  const handleNext = () => {
    navigation.navigate('TestDetails');
  };

  return (
    <SafeAreaView>
      <View
        style={{
          position: 'relative',
          flexDirection: 'row',
        }}>
        <Image
          source={require('../assets/images/gradientbg.png')}
          resizeMode="cover"
        />
        <Ionicons
          name="chevron-back-outline"
          size={30}
          color="black"
          onPress={() => {
            navigation.navigate('Home');
          }}
          style={{
            position: 'absolute',
            left: 20,
            top: 20,
            backgroundColor: 'white',
            borderRadius: 50,
            padding: 2,
          }}
        />

        <Text
          style={{
            position: 'absolute',
            left: 20,
            top: 90,
            padding: 5,
            fontSize: 30,
            color: 'white',
            borderRadius: 5,
            textAlign: 'center',
            fontFamily: 'Poppins SemiBold',
          }}>
          {' '}
          Select your Options
        </Text>
        <View
          style={{
            position: 'absolute',
            left: 0,
            top: 180,
            backgroundColor: 'white',
            width: '100%',
            height: '100%',
            borderRadius: 20,
            direction: 'flex',
            flexDirection: 'column',
            paddingTop: 50,
            alignContent: 'center',
          }}>
          <NativeButton
            mode="contained"
            onPress={handleNext}
            className=" mx-5 rounded-full 
          px-5 py-1 "
            style={{backgroundColor: '#3442e0', marginVertical: 20}}>
            <Text
              style={{
                fontFamily: 'Poppins Medium',
                fontSize: 15,
              }}>
              {' '}
              Take a Test{' '}
            </Text>
          </NativeButton>
          <NativeButton
            mode="contained"
            onPress={handleNext}
            className=" mx-5 rounded-full 
          px-5 py-1 "
            style={{backgroundColor: '#3442e0', marginVertical: 20}}>
            <Text
              style={{
                fontFamily: 'Poppins Medium',
                fontSize: 15,
              }}>
              {' '}
              Past Test{' '}
            </Text>
          </NativeButton>
          <NativeButton
            mode="contained"
            onPress={handleNext}
            className=" mx-5 rounded-full 
          px-5 py-1"
            style={{backgroundColor: '#3442e0', marginVertical: 20}}>
            <Text
              style={{
                fontFamily: 'Poppins Medium',
                fontSize: 15,
              }}>
              Define Test/Exam portion{' '}
            </Text>
          </NativeButton>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default TestScreen;
