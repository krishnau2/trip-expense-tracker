import React from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default class PastTrip extends React.Component{
    render(){        
        return (
            <View style={styles.pastTripContainer}>
                <Text style={styles.pastTripCaption}>Past Trips</Text>
                <View style={styles.pastTripTable}>
                    <FlatList
                        data={this.props.pastTripData}
                        renderItem={({item}) => 
                            <View style={styles.pastTripTableRow}>
                                <Text style={styles.pastTripName}>{item.tripName}</Text>
                                <Text style={styles.pastTripExpense}>${item.totalExpense}</Text>
                                <Ionicons style={styles.pastTripAction} name="ios-arrow-forward" size={25} />
                            </View>
                            }
                        />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    pastTripContainer: {
        marginTop: 20,        
        width: 320,
    },
    pastTripCaption: {
        fontSize: 14,
        color: '#808080',
        fontWeight: 'bold',
        paddingLeft: 25,
        marginBottom: 10,
    },
    pastTripTable: {
        backgroundColor: '#fff',
    },
    pastTripTableRow: {
        flexDirection: 'row',
        height: 40,
        alignItems: 'center',
        borderTopWidth: 1,
        borderColor: '#EEEEEE',
    },
    pastTripName: {
        fontSize: 15,
        paddingLeft: 25,
        flex: 2,
    },
    pastTripExpense: {
        fontSize: 14,
        color: '#808080',
        width: 70,        
    },
    pastTripAction: {
        paddingRight: 20,
    }
})