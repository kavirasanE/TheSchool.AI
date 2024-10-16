import React, {useState} from 'react';
import {Text, View, TouchableOpacity, FlatList} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Button as NativeButton} from 'react-native-paper';

const SubscriptionData = [
  {
    id: 'basic',
    title: 'Basic Plan',
    price: 'Rs.99.9/month',
    features: [
      'Access to 100+ courses',
      'Download course materials offline',
      'Weekly quizzes and progress tracking',
      'Completion certificates',
    ],
    idealFor:
      'Great for beginners who want to learn a few subjects at their own pace.',
  },
  {
    id: 'pro',
    title: 'Pro Plan',
    price: 'Rs.199.9/month',
    features: [
      'Includes all Basic Plan features',
      '500+ premium courses',
      'Live instructor sessions',
      'Interactive projects and coding challenges',
    ],
    idealFor:
      'Perfect for learners looking for hands-on experience with expert guidance.',
  },
  {
    id: 'premium',
    title: 'Premium Plan',
    price: 'Rs.299.9/month',
    features: [
      'Includes all Pro Plan features',
      'One-on-one mentoring',
      'Career guidance and interview prep',
      'Job placement assistance',
    ],
    idealFor:
      'Ideal for professionals who want personalized learning and career growth.',
  },
];

const Item = ({item, onPress, backgroundColor, textColor}) => {
  return (
    <TouchableOpacity
      style={{
        direction: 'flex',
        flex: 1,
        width: 300,
        height: 350,
        padding: 20,
        marginVertical: 10,
        marginHorizontal: 10,
        borderRadius: 15,
        backgroundColor: 'white',
        borderWidth: 1, // To set the width of the border
      }}
      onPress={onPress}>
      <View
        style={{
          direction: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: 15,
            fontFamily: 'Poppins Medium',
            color: 'black',
            backgroundColor: 'blue',
            paddingHorizontal: 10,

            color: 'white',
          }}>
          {item.title}
        </Text>

        <Ionicons
          name={backgroundColor == 'black' ? 'ellipse-outline' : 'ellipse'}
          size={30}
          style={{color: backgroundColor, boderRadius: 50}}
        />
      </View>

      <Text
        style={{fontSize: 20, fontFamily: 'Poppins Medium', color: 'black'}}>
        {item.price}
      </Text>
      <View style={{height: 150, marginTop: 10}}>
        <Text
          style={{fontSize: 12, fontFamily: 'Poppins Medium', color: 'black'}}>
          Features
        </Text>
        {item.features.map((data, index) => (
          <Text>
            <Ionicons name="checkmark-outline" size={9} /> {data}
          </Text>
        ))}
      </View>
      <Text
        style={{
          borderTopWidth: 1,
          borderColor: 'gray',
          marginHorizontal: 20,
        }}></Text>
      <Text
        style={{
          fontSize: 12,
          fontFamily: 'Poppins Medium',
          color: 'black',
          marginTop: 5,
        }}>
        Suitable for:
      </Text>
      <Text>{item.idealFor}</Text>
    </TouchableOpacity>
  );
};

const SubscriptionPage = ({navigation}) => {
  const [selectedId, setSelectedId] = useState(false);

  const handlePaymentNavigation = () => {
    selectedId && navigation.navigate('GetStarted');
  };

  const renderItem = ({item}) => {
    const backgroundColor = item.id === selectedId ? '#3442e0' : 'black';
    const color = item.id === selectedId ? 'blue' : 'gray';
    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };

  return (
    <SafeAreaView
      style={{direction: 'flex', flex: 1, backgroundColor: 'white'}}>
      <View style={{margin: 15}}>
        <View>
          <Ionicons
            name="close-outline"
            size={30}
            color="black"
            onPress={() => {
              navigation.navigate('GetStarted');
            }}
            style={{
              backgroundColor: 'white',
              borderRadius: 50,
            }}
          />
          <Text
            style={{
              marginVertical: 5,
              fontFamily: 'Poppins Medium',
              fontSize: 20,
              color: 'black',
              textAlign: 'center',
            }}>
            Pick your Subscription
          </Text>
        </View>
        <View>
          <Text style={{marginVertical: 10}}>Select your plan</Text>
          <FlatList
            data={SubscriptionData}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            // extraData={selectedId}

            horizontal
          />
        </View>
        <NativeButton
          mode="contained"
          className=" mx-5 rounded-full 
          px-5 py-1 "
          style={{
            backgroundColor: selectedId ? '#3442e0' : 'gray',
            marginVertical: 20,
          }}
          onPress={handlePaymentNavigation}>
          <Text
            style={{
              fontFamily: 'Poppins Medium',
              fontSize: 15,
            }}>
            Select This Plan
          </Text>
        </NativeButton>
      </View>
    </SafeAreaView>
  );
};

export default SubscriptionPage;
