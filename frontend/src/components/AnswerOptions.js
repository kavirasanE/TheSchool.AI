import React, {useState} from 'react';
import {Text, View} from 'react-native';
import { RadioButton } from 'react-native-paper';

const AnswerOptions = () => {
  const [value, setValue] = useState('first');

  return (
    <View>
       <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
      <View className ="flex flex-row justify-start items-center mx-5 my-2">
      <RadioButton value="first" className="w-4"/>
        <Text className="text-xl text-black ">First Option</Text>
       </View>
       <View className ="flex flex-row justify-start items-center mx-5 my-2">
      <RadioButton value="first" className="w-4"/>
        <Text className="text-xl text-black ">Second Option</Text>
       </View>
       <View className ="flex flex-row justify-start items-center mx-5 my-2">
      <RadioButton value="first" className="w-4"/>
        <Text className="text-xl text-black ">Thrid Option</Text>
       </View>
       <View className ="flex flex-row justify-start items-center mx-5 my-2">
      <RadioButton value="first" className="w-4"/>
        <Text className="text-xl text-black ">Fourth Option</Text>
       </View>

      {/* <View>
        <Text>Second</Text>
        <RadioButton value="second" />
      </View> */}
    </RadioButton.Group>
    </View>
  );
};

export default AnswerOptions;
