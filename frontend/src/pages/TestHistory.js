import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {DataTable} from 'react-native-paper';
import Breadcrumb from '../utility/Breadcrumb';
import { StyleSheet } from 'react-native';
import HeaderNavigation from '../navigation/HeaderNavigation';
const TestHistory = () => {
  const tableHead = ['Header 1', 'Header 2', 'Header 3'];
  const tableData = [
    ['Row 1, Cell 1', 'Row 1, Cell 2', 'Row 1, Cell 3'],
    ['Row 2, Cell 1', 'Row 2, Cell 2', 'Row 2, Cell 3'],
    ['Row 3, Cell 1', 'Row 3, Cell 2', 'Row 3, Cell 3'],
  ];

  return (
    <View>
      <HeaderNavigation/>
      <Breadcrumb />
      <Text className="font-semibold text-lg my-4 text-black/90">
        Your Test Insights
      </Text>
      <DataTable style={styles.container} >
        <DataTable.Header>
          <DataTable.Title >S.no</DataTable.Title>
          <DataTable.Title>Date</DataTable.Title>
          <DataTable.Title>Subjects</DataTable.Title>
          <DataTable.Title>Portion</DataTable.Title>
          <DataTable.Title>Score</DataTable.Title>
        </DataTable.Header>
        <DataTable.Row>
          <DataTable.Cell >1</DataTable.Cell>
          <DataTable.Cell>25</DataTable.Cell>
          <DataTable.Cell>Math</DataTable.Cell>
          <DataTable.Cell>Quartely</DataTable.Cell>
          <DataTable.Cell >94%</DataTable.Cell>
        </DataTable.Row>
      </DataTable>
    </View>
  );
};

export default TestHistory;

const styles = StyleSheet.create({
    container: {
      
      justifyContent: 'space-between',
      backgroundColor: '#fff',
      fontWeight:"bold"
      
    }
})
