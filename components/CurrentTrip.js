import React from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';

export default class CurrentTrip extends React.Component{
    render(){        
        return (
            <View style={styles.currentTripContainer}>
                <View style={styles.currentTripHeader}>
                    <Text style={styles.currentTripName}>{this.props.currentTripData.tripName}</Text>
                    <Text style={styles.currentTripStartDate}>{this.props.currentTripData.date}</Text>
                </View>
                <View style={styles.currentTripExpenseTable}>
                    <View style={styles.expenseTableHead}>
                        <Text style={styles.expenseTableHeadItem}>Exp</Text>
                        <Text style={styles.expenseTableHeadItem}>Bal</Text>
                    </View>
                    <View style={styles.expenseTableBody}>
                        <FlatList
                            data={this.props.currentTripData.majorExpenses}
                            renderItem={({item}) =>
                                <View style={styles.expenseRow}>
                                    <Text style={styles.expenseCategory}>{item.expenseCategory}</Text>
                                    <Text style={styles.expenseAmount}>${item.totalExpense}</Text>
                                    <Text style={styles.expenseBalance}>${item.balance}</Text>
                                </View>
                        }
                        />
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    currentTripContainer: {
        width: 300,
        backgroundColor: '#fff',
        paddingTop: 10,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#d6d7da',
    },
    currentTripHeader: {
        marginLeft: 15,
    },    
    currentTripName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333333',
    },
    currentTripStartDate: {
        fontSize: 14,
        color: '#808080',
    },
    currentTripExpenseTable: {
        marginTop: 10,
    },
    expenseTableHead: {
        flexDirection: 'row',
        backgroundColor: '#FAFAFA',
        justifyContent: 'flex-end',
        borderWidth: 1,
        borderColor: '#EEEEEE',
        height: 20,
        alignItems: 'center',
    },
    expenseTableHeadItem: {
        width: 60,
    },
    
    expenseRow: {
        flexDirection: 'row',
        height: 30,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#EEEEEE',
    },
    expenseCategory: {
        fontSize: 14,
        flex: 2,
        marginLeft: 15,
    },
    expenseAmount: {
        fontSize: 12,
        width: 60,
        color: '#E74C3C',        
    },
    expenseBalance: {
        fontSize: 13,
        width: 70,
        fontWeight: 'bold',
        color: '#27AE60',
        // marginRight: 10,
        paddingRight: 10
        
    },
});