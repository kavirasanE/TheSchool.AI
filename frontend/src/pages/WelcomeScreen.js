import React from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import bulb from '../assets/images/welcomebulb.png';
import {globalStyles} from '../Theme/AppTheme';
import HeaderNavigation from '../navigation/HeaderNavigation';
import {Avatar} from 'react-native-paper';
import test from '../assets/images/test.jpg';
import study from '../assets/images/study.jpg';
import Icon from 'react-native-vector-icons/Ionicons';

const WelcomeScreen = ({navigation}) => {
  const data = [
    {name: 'Take a Test', img: test, route:"Test"},
    {name: 'Study Now', img: study, route:"Study"},
  ];

  const dataContinue = [
    {name:"- Dr. A.P.J. Abdul Kalam",content:"Dream is not that which you see while sleeping, it is something that does not let you sleep"},
    {name:"- Dr. B.R. Ambedkar",content:"Cultivation of mind should be the ultimate aim of human existence."}
  ]

  return (
    <View style={{flex: 1, paddingTop: 25, padding: 10,backgroundColor:"white"}}>
      <View
        style={{
          direction: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          margin: 10,
        }}>
          <View style={{direction: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems:"center",
          width:150,
         }}>
        <Avatar.Image size={50} source={require('../assets/images/user.png')} style={{backgroundColor:"white"}}/>
        <Text style={{fontSize:23, fontWeight:"300",color:"black", fontFamily: 'Poppins Medium' }} >Aadhini</Text>
    
          </View>
        <Icon name="notifications-outline" size={30} />
      </View>
      <Text
        style={{fontSize: 30, fontWeight: '500', marginHorizontal: 10, color: 'black',fontFamily: 'Poppins Medium' }}>
        Let's Learn Something New....
      </Text>
      <FlatList
        data={data}
        numColumns={2}
        columnWrapperStyle={{gap: 10}}
        contentContainerStyle={{gap: 10}}
        keyExtractor={(Item, idx) => Item.name + idx}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignContent: 'center',
                flexDirection: 'row',
                backgroundColor: 'white',
                flex: 1,
                height: 200,
                borderRadius: 20,
                marginHorizontal: 10,
                borderColor: 'black',
              }}
              onPress={() => navigation.navigate(item.route)}
              >
              <Image
                source={item.img}
                style={{width: '100%', height: '100%', borderRadius: 20}}
                resizeMode="contain"
              />
              <Text
                style={{
                  position: 'absolute',
                  backgroundColor: 'rgba(255, 255, 255, 0.5)',
                  left: 0,
                  right: 0,
                  textAlign: 'left',
                  color: 'black',
                  fontFamily: 'Poppins Medium',
                  fontSize: 22,
                  paddingHorizontal: 10,
                  paddingVertical: 5,
                  borderRadius: 20,
                  height: 200,
                }}>
                {item.name}
              </Text>
              <Text
                style={{
                  position: 'absolute',
                  left: 0,
                  right: 0,
                  textAlign: 'left',
                  color: 'black',
                  fontFamily: 'Poppins Medium',
                  width: 150,
                  paddingHorizontal: 10,
                  paddingTop: 50,
                  paddingVertical: 5,
                  borderRadius: 20,
                  height: 200,
                }}>
                100+ practice Questions
              </Text>
            </TouchableOpacity>
          );
        }}
      />
      <Text
        style={{fontSize: 19, marginHorizontal: 10, color: 'black', fontWeight: '200',
          fontFamily: 'Poppins Medium'}}>
        Words of Leaders: Fuel for Your Motivation
      </Text>
        <FlatList
         data={dataContinue}
         renderItem={({item}) => {
          return(
            <TouchableOpacity
            style={{margin:10,
              backgroundColor: "#f1f1f1",
              // borderWidth: 1,
              paddingVertical:20,
              borderRadius:10,
              // shadowColor: "black",      
              shadowOffset: { width: 0, height: 10 },  
              shadowOpacity: 0.25,        
              shadowRadius: 1,            
              elevation: 2,      
            }}
           >
            <Text style={{textAlign:"center",color:"black",fontSize:12,fontFamily: 'Poppins Italic'}}>{item.content}</Text>
            <Text style={{textAlign:"center",color:"black",fontFamily: 'Poppins Italic'}}>{item.name}</Text>
            </TouchableOpacity>
          )
         }}

        />
     
    </View>
  );
};

export default WelcomeScreen;
