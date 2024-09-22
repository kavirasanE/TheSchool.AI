import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { RadioButton, TextInput , Button as NativeButton } from 'react-native-paper';
import { Dropdown } from 'react-native-element-dropdown';
import Breadcrumb from '../utility/Breadcrumb';

const TestEntryDetails = () => {
  const data = [
    {
      title: 'Subject',
      options: [
        { label: 'Item 1', value: 1 },
        { label: 'Item 2', value: 2 },
        { label: 'Item 3', value: 3 },
        { label: 'Item 4', value: 4 },
        { label: 'Item 5', value: 5 },
        { label: 'Item 6', value: 6 },
      ],
    },
    {
      title: 'Test Type',
      options: [
        { label: 'Item 1', value: 1 },
        { label: 'Item 2', value: 2 },
      ],
    },
    {
      title: 'Portion',
      options: [
        { label: 'Item 1', value: 1 },
        { label: 'Item 2', value: 2 },
        { label: 'Item 3', value: 3 },
      ],
    },
  ];

  const dropData = [
    { label: 'Item 1', value: '1' },
    { label: 'Item 2', value: '2' },
    { label: 'Item 3', value: '3' },
    { label: 'Item 4', value: '4' },
    { label: 'Item 5', value: '5' },
    { label: 'Item 6', value: '6' },
    { label: 'Item 7', value: '7' },
    { label: 'Item 8', value: '8' },
  ];

  // Separate state for each dropdown
  const [dropdownValues, setDropdownValues] = useState({});
  const [radioValue, setRadioValue] = useState('first');
  const [text, setText] = useState('');

  // Handler for dropdown change
  const handleDropdownChange = (key, itemValue) => {
    setDropdownValues((prevValues) => ({
      ...prevValues,
      [key]: itemValue,
    }));
  };

  return (
    <View>
      <Breadcrumb />

      {data.map((dropdownData, index) => (
        <View
          className="flex flex-row justify-between items-center m-5"
          key={index}>
          <Text className="text-black text-xl">{dropdownData.title}</Text>
          <Dropdown
            data={dropdownData.options}
            className="w-4/6 border-2 border-black p-2 rounded-md"
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder="Select item"
            searchPlaceholder="Search..."
            value={dropdownValues[index]} // Use individual state for each dropdown
            onChange={(item) => handleDropdownChange(index, item.value)} // Update only the specific dropdown value
          />
        </View>
      ))}

      <View className="flex flex-row justify-between items-center m-5">
        <Text className="text-black text-xl">Questions</Text>
        <RadioButton.Group
          onValueChange={(newValue) => setRadioValue(newValue)}
          value={radioValue}>
          <View className="flex flex-row justify-start items-center w-60 my-5">
            <RadioButton value="Last" />
            <View className="flex flex-row justify-center items-center ">
              <Text className="text-black text-lg font-semibold">Last </Text>
              <TextInput
                mode="outlined"
                label="no of Years"
                placeholder=""
                className="w-20 h-5"
              />
              <Text className="text-black text-lg font-semibold"> Years </Text>
            </View>
          </View>

          <View className="flex flex-row justify-start items-center w-60 my-5">
            <RadioButton value="random" />
            <View className="flex flex-row justify-center items-center">
              <Text className="text-black text-lg font-semibold">Random </Text>
              <TextInput
                mode="outlined"
                label="no of Years"
                placeholder=""
                className="w-20 h-5"
              />
              <Text className="text-black text-lg font-semibold "> Years </Text>
            </View>
          </View>

          <View className="flex flex-row justify-start items-center w-60 my-5">
            <RadioButton value="years" />
            <Dropdown
              data={dropData}
              className="w-4/6 border-2 border-black p-2 rounded-md"
              search
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder="Select item"
              searchPlaceholder="Search..."
              value={dropdownValues['years']} // Use separate state
              onChange={(item) => handleDropdownChange('years', item.value)} // Update based on key
            />
          </View>
        </RadioButton.Group>
      </View>
 <NativeButton   mode="contained" className="bg-blue-600 p-2 mx-5"> Start the Test</NativeButton>
      
    </View>
  );
};

export default TestEntryDetails;
