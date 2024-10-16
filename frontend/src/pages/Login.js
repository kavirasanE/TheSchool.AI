import React, {Component} from 'react';
import {Text, View, TextInput, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Button as NativeButton} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Login = ({navigation}) => {
  const [text, setText] = React.useState('');
  const handleNavigation =() => {
   navigation.navigate("TabNavigator")
  }

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#3442e0'}}>
      <View
        style={{
          height: 250,
          backgroundColor: '#3442e0',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{fontSize: 20, color: 'white', fontFamily: 'Poppins Medium'}}>
          Welcome to The Skool.ai
        </Text>
        <Text
          style={{fontSize: 10, color: 'white', fontFamily: 'Poppins Medium'}}>
          Please login in to continue and make learning easier from our app
        </Text>
      </View>
      <View
        style={{
          width: '100%',
          direction: 'flex',
          flex: 1,
          padding: 20,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          backgroundColor: 'white',
        }}>
        <Text
          style={{fontSize: 20, color: 'black', fontFamily: 'Poppins Medium'}}>
          Login or Sign Up
        </Text>
        <TextInput
          style={{
            backgroundColor: 'white',
            margin: 15,
            borderRadius: 40,
            borderWidth: 1,
            paddingHorizontal: 20,
          }}
          placeholder="Username"
          value={text}
          onChangeText={setText}
        />
        <View style={{position: 'relative'}}>
          <TextInput
            style={{
              backgroundColor: 'white',
              margin: 15,
              borderRadius: 40,
              borderWidth: 1,
              paddingHorizontal: 20,
            }}
            placeholder="Password"
            value={text}
            onChangeText={setText}
          />

          <Ionicons
            name="eye-off"
            size={20}
            color="gray"
            style={{
              position: 'absolute',
              top: 30,
              right: 30,
            }}
          />
        </View>

        <NativeButton
          mode="contained"
          className=" mx-5 my-3 rounded-full 
          px-5 py-1"
          style={{backgroundColor: '#3442e0'}} onPress={handleNavigation}>
          <Text style={{fontFamily: 'Poppins Medium'}}> Login </Text>
        </NativeButton>
        <Text className="border-t border-gray-500 my-2 text-center ">
          Or, login with
        </Text>
        <NativeButton mode="outlined" className=" mx-5 my-2 rounded-full">
          <Text style={{fontFamily: 'Poppins Medium', color: 'black'}}>
            {' '}
            <Image
              source={require('../assets/images/google.jpg')}
              style={{width: 30, height: 30}}
              resizeMode="contain"
            />
            Continue with Google
          </Text>
        </NativeButton>
        <View
          style={{
            direction: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            margin: 10,
            marginHorizontal: 20,
          }}>
          <Ionicons
            name="logo-instagram"
            size={40}
            color="purple"
            style={{
              backgroundColor: 'white',
              borderRadius: 50,
              padding: 2,
            }}
          />
          <Ionicons
            name="logo-facebook"
            size={40}
            color="blue"
            style={{
              backgroundColor: 'white',
              borderRadius: 50,
              padding: 2,
            }}
          />
          <Ionicons
            name="logo-snapchat"
            size={40}
            color="yellow"
            style={{
            
              borderRadius: 50,
              padding: 2,
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
