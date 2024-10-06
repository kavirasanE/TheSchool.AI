import * as React from 'react';
import {View, Text, Image} from 'react-native';
import Breadcrumb from '../utility/Breadcrumb';
import {Button as NativeButton} from 'react-native-paper';
import HeaderNavigation from '../navigation/HeaderNavigation';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
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
          <View
      style={{
        position: 'absolute',
        left: 0,
        top: 200,
        backgroundColor: 'white',
        width: '100%',        // Adjust width to suit the layout
        height: "100%",   
        // Adjust height as per your requirement
        borderRadius: 20,   
        direction:"flex",
        flexDirection:"column",
         // Optional: For rounded corners
      }}
    >
       <NativeButton
    mode="contained"
    onPress={handleNext}
    className="bg-blue-500 p-2 ">
    <Text className="text-xl"> Take a Test </Text>
  </NativeButton>
  <NativeButton mode="contained" className="bg-blue-500 p-2 ">
    <Text className="text-xl"> Past Test </Text>
  </NativeButton>
  <NativeButton mode="contained" className="bg-blue-500 p-2 ">
    <Text className="text-xl"> Define Test/Exam portion</Text>
  </NativeButton>
      
    </View>
      
      </View>
    </SafeAreaView>
  );
};

export default TestScreen;

{
  /* <View>
<HeaderNavigation />
<Breadcrumb />

<View className="flex flex-col justify-center gap-y-10 mx-10 mt-10">
  <NativeButton
    mode="contained"
    onPress={handleNext}
    className="bg-blue-500 p-2 ">
    <Text className="text-xl"> Take a Test </Text>
  </NativeButton>
  <NativeButton mode="contained" className="bg-blue-500 p-2 ">
    <Text className="text-xl"> Past Test </Text>
  </NativeButton>
  <NativeButton mode="contained" className="bg-blue-500 p-2 ">
    <Text className="text-xl"> Define Test/Exam portion</Text>
  </NativeButton>
</View>
</View> */
}
