import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {DataTable} from 'react-native-paper';
import Breadcrumb from '../utility/Breadcrumb';
import {StyleSheet} from 'react-native';
import HeaderNavigation from '../navigation/HeaderNavigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const TestHistory = () => {
  const tableHead = ['Header 1', 'Header 2', 'Header 3'];
  const tableData = [
    ['Row 1, Cell 1', 'Row 1, Cell 2', 'Row 1, Cell 3'],
    ['Row 2, Cell 1', 'Row 2, Cell 2', 'Row 2, Cell 3'],
    ['Row 3, Cell 1', 'Row 3, Cell 2', 'Row 3, Cell 3'],
  ];
  const navigation = useNavigation();

  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <View
        style={{
          direction: 'flex',
          flexDirection: 'row',
          justifyContent:"space-between",
          alignContent: 'center',
          marginTop:30,
          margin:10,
        }}>
        <Ionicons
          name="chevron-back-outline"
          size={40}
          color="black"
          onPress={() => {
            navigation.navigate('Home');
          }}
          style={{
            backgroundColor: 'white',
            borderRadius: 50,
          }}
        />
        <Text
          style={{
            fontFamily: 'Poppins Medium',
            fontSize: 25,
            color: 'black',
            
          }}>
          Your Test Insights
        </Text>
        <Text
          style={{
            fontFamily: 'Poppins Medium',
            fontSize: 25,
            color: 'black',
            
          }}>
        </Text>
      </View>

      <DataTable style={styles.container}>
        <DataTable.Header>
          <DataTable.Title style={styles.title}>S.no</DataTable.Title>
          <DataTable.Title>Date</DataTable.Title>
          <DataTable.Title>Subjects</DataTable.Title>
          <DataTable.Title>Portion</DataTable.Title>
          <DataTable.Title>Score</DataTable.Title>
        </DataTable.Header>
        <DataTable.Row>
          <DataTable.Cell>1</DataTable.Cell>
          <DataTable.Cell>25</DataTable.Cell>
          <DataTable.Cell>Math</DataTable.Cell>
          <DataTable.Cell>Quartely</DataTable.Cell>
          <DataTable.Cell>94%</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>1</DataTable.Cell>
          <DataTable.Cell>25</DataTable.Cell>
          <DataTable.Cell>Math</DataTable.Cell>
          <DataTable.Cell>Quartely</DataTable.Cell>
          <DataTable.Cell>94%</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>1</DataTable.Cell>
          <DataTable.Cell>25</DataTable.Cell>
          <DataTable.Cell>Math</DataTable.Cell>
          <DataTable.Cell>Quartely</DataTable.Cell>
          <DataTable.Cell>94%</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>1</DataTable.Cell>
          <DataTable.Cell>25</DataTable.Cell>
          <DataTable.Cell>Math</DataTable.Cell>
          <DataTable.Cell>Quartely</DataTable.Cell>
          <DataTable.Cell>94%</DataTable.Cell>
        </DataTable.Row>
      </DataTable>
    </View>
  );
};

export default TestHistory;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    backgroundColor: '#fffff',
    margin: 10,
    border: 2,
  },
  title: {
    fontFamily: 'Poppins Medium',
    fontSize: 25,
    color: 'black',
  },
});
