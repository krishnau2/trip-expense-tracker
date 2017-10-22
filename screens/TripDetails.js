import React from 'react';
import {Text, View, StyleSheet, SectionList} from 'react-native';

export default class TripDetails extends React.Component{
    static navigationOptions = ({navigation}) => ({
        title: navigation.state.params.trip.tripName,       
    });
    
    // this.props.navigation.state.params.trip.tripName
    
    render(){
      let sections =
        [
          {title: '25/08/2017 Fri', data: [{key: 1, name: 'Petrol', amount: 2000}, {key: 2, name: 'Breakfast', amount: 350}, {key: 3, name: 'Lunch', amount: 500}, {key: 4, name: 'Tea', amount: 100}]},
          {title: '26/08/2017 Sat', data: [{key: 5, name: 'Petrol', amount: 2000}, {key: 6, name: 'Breakfast', amount: 350}, {key: 7, name: 'Lunch', amount: 500}, {key: 8, name: 'Tea', amount: 100}]},
          {title: '27/08/2017 Sun', data: [{key: 10, name: 'Petrol', amount: 2000}, {key: 11, name: 'Breakfast', amount: 350}, {key: 12, name: 'Lunch', amount: 500}, {key: 13, name: 'Tea', amount: 100}]},
          {title: '28/08/2017 Mon', data: [{key: 15, name: 'Petrol', amount: 2000}, {key: 16, name: 'Breakfast', amount: 350}, {key: 17, name: 'Lunch', amount: 500}, {key: 18, name: 'Tea', amount: 100}]},
          {title: '29/08/2017 Tue', data: [{key: 20, name: 'Petrol', amount: 2000}, {key: 21, name: 'Breakfast', amount: 350}, {key: 22, name: 'Lunch', amount: 500}, {key: 23, name: 'Tea', amount: 100}]},
          {title: '30/08/2017 Wed', data: [{key: 25, name: 'Petrol', amount: 2000}, {key: 26, name: 'Breakfast', amount: 350}, {key: 27, name: 'Lunch', amount: 500}, {key: 28, name: 'Tea', amount: 100}]}
        ]

      return(
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
            <SectionList
                sections={sections}
                renderItem={({item}) =>
                    <View style={styles.itemContainer}>
                    <Text style={styles.item}>{item.name}</Text>
                    <Text style={styles.item}>{item.amount}</Text>
                    </View>}
                renderSectionHeader={({section}) =>
                    <Text style={styles.sectionHeader}>{section.title}</Text>}
            />
        </View>
      );
    }
}

const styles = StyleSheet.create({
  container: {
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