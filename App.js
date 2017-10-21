import React from 'react';
import { StyleSheet, Text, View, SectionList, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import RootNavigation from './navigation/RootNavigation'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('./logo-100.png')} style={styles.logo}/>
        <View style={styles.content}>
          <RootNavigation />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   backgroundColor: '#FAFAFA',
   paddingTop: 15,
  },
  logo: {
    width: 100, 
    height: 47,
    alignSelf: 'center',
    backgroundColor: '#FAFAFA',
  },
  content: {
    paddingTop: 5,
    flex: 1,
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
