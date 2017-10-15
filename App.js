import React from 'react';
import { StyleSheet, Text, View, SectionList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import RootNavigation from './navigation/RootNavigation'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.overview}>
          <View style={styles.overviewLabel}>
            <Text style={styles.budgetLabel}>Budget</Text>
            <Text style={styles.expenseLabel}>Expense</Text>
            <Text style={styles.balanceLabel}>Balance</Text>
          </View>
          <View style={styles.overviewValue}>
            <Text style={styles.budget}>15000/-</Text>
            <Text style={styles.expense}>12500/-</Text>
            <Text style={styles.balance}>2500/-</Text>
          </View>
        </View>
        
        <RootNavigation />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 12,
    height: 30,
  },
  overview: {    
    backgroundColor: '#D2D7D3',
    paddingTop: 3,
    paddingBottom: 3
  },
  overviewLabel: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#D2D7D3',
  },
  overviewValue: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#D2D7D3',
  },
  budgetLabel: {
    color: '#4183D7',
    fontSize: 12,
  },
  expenseLabel: {
    color: '#EC644B',
    fontSize: 12,
  },
  balanceLabel: {
    color: '#3B7A57',
    fontSize: 12,
  },

  budget: {
    color: '#4183D7',
    fontWeight: 'bold',
    fontSize: 14,
  },
  expense: {
    color: '#EC644B',
    fontWeight: 'bold',
    fontSize: 14,
  },
  balance: {
    color: '#3B7A57',
    fontWeight: 'bold',
    fontSize: 14,
  },

  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 5,
    marginRight: 5
  }
});
