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
        <Text style={{fontFamily: 'Poppins Medium', fontSize: 18,color:"black"}}>First Option</Text>
       </View>
       <View className ="flex flex-row justify-start items-center mx-5 my-2">
      <RadioButton value="second" className="w-4"/>
        <Text  style={{fontFamily: 'Poppins Medium', fontSize: 18,color:"black"}}>Second Option</Text>
       </View>
       <View className ="flex flex-row justify-start items-center mx-5 my-2">
      <RadioButton value="third" className="w-4"/>
        <Text  style={{fontFamily: 'Poppins Medium', fontSize: 18,color:"black"}}>Thrid Option</Text>
       </View>
       <View className ="flex flex-row justify-start items-center mx-5 my-2">
      <RadioButton value="fourth" className="w-4"/>
        <Text style={{fontFamily: 'Poppins Medium', fontSize: 18,color:"black"}}>Fourth Option</Text>
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
