import React from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import CurrentTrip from '../components/CurrentTrip';
import PastTrip from '../components/PastTrip';

export default class HomeScreen extends React.Component{
    static navigationOptions = {
        title: 'Home',
        header: null,
    };

    render(){
        let pastTrips = [
            {key: 1, tripName: 'Kodai baba trip', totalExpense: 12000},
            {key: 2, tripName: 'Bangalore TVM', totalExpense: 30000},
            {key: 3, tripName: 'Mumbai Kolkata', totalExpense: 46000},
            {key: 4, tripName: 'Kodai baba trip', totalExpense: 15000},
            {key: 5, tripName: 'TVM Bangalore', totalExpense: 7000},
            {key: 6, tripName: 'Bangalore OOTY', totalExpense: 10000},
            {key: 7, tripName: 'Bangalore Goa', totalExpense: 30000},
            {key: 8, tripName: 'Rajasthan', totalExpense: 150000},
        ];
        let currentTripData = {
            tripName: 'Kodai Baba Trip',
            date: '13 Oct 2017',
            majorExpenses: [
                {key: 1, expenseCategory: 'Petrol', totalExpense: 8000, balance: 4000},
                {key: 2, expenseCategory: 'Toll', totalExpense: 1200, balance: 700},
                {key: 3, expenseCategory: 'Food', totalExpense: 12000, balance: 15000},
                {key: 4, expenseCategory: 'Accomodation', totalExpense: 5000, balance: 1000},
            ]
        };
        return(
            <ScrollView>
                <View style={styles.container}>
                    <CurrentTrip currentTripData={currentTripData}/>
                    <PastTrip pastTripData={pastTrips}/>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#FAFAFA',
    },

});