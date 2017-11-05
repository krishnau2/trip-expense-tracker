import React from 'react';
import { Text, View, StyleSheet, SectionList, FlatList, TextInput, ScrollView, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default class LinksScreen extends React.Component {
    static navigationOptions = {
        title: 'New Trip',
        tabBarLabel: 'Add trip'
    };

    render() {
        let coTravellers = [
            { key: 1, name: 'Jaison' },
            { key: 2, name: 'KK' },
            { key: 3, name: 'Unni' },
        ],
            budget = [
                { key: 1, name: 'Petrol', amount: 7000 },
                { key: 2, name: 'Toll', amount: 1000 },
                { key: 3, name: 'Accomodatio', amount: 8000 },
            ]
        return (
            <ScrollView>
                <KeyboardAvoidingView behavior="padding" style={styles.container}>
                    <View style={styles.content}>
                        <Text style={styles.caption}>Trip Name</Text>
                        <TextInput
                            style={styles.inputBox}
                            placeholder="Kodaikanal trip"
                            placeholderTextColor="rgba(128, 128, 128, 0.7)"
                        />

                        <Text style={styles.caption}>Add Co-Travellers</Text>
                        <FlatList
                            data={coTravellers}
                            renderItem={({ item }) =>
                                <View style={styles.coTravellerRow}>
                                    <Text style={styles.coTravellerName}>{item.name}</Text>
                                </View>
                            }
                        />
                        <View style={styles.addCoTravellerContainer}>
                            <TextInput
                                style={[styles.inputBox, styles.travellerInput]}
                                placeholder="Traveller name"
                                placeholderTextColor="rgba(128, 128, 128, 0.7)"
                            />
                            <Ionicons style={styles.addNewTraveller} name="ios-add-circle" size={25} />
                        </View>

                        <Text style={styles.caption}>Add Budget</Text>
                        <FlatList
                            data={budget}
                            renderItem={({ item }) =>
                                <View style={styles.budgetRow}>
                                    <Text style={styles.budgetName}>{item.name}</Text>
                                    <Text style={styles.budgetAmount}>${item.amount}</Text>
                                </View>
                            }
                        />
                        <View style={styles.addBudgetInputContainer}>
                            <TextInput
                                style={[styles.inputBox, styles.budgetCategoryInput]}
                                placeholder="Food, hotel, etc"
                                placeholderTextColor="rgba(128, 128, 128, 0.7)"
                            />
                            <TextInput
                                style={[styles.inputBox, styles.budgetAmountInput]}
                                placeholder="amount"
                                placeholderTextColor="rgba(128, 128, 128, 0.7)"
                            />
                            <Ionicons style={styles.addNewTraveller} name="ios-add-circle" size={25} />
                        </View>
                    </View>
                    <TouchableOpacity style={styles.buttonContainer}>
                        <Text style={styles.buttonText}>Create</Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FAFAFA',
        paddingBottom: 20,
    },
    content: {
        paddingLeft: 25,
        paddingRight: 25,
    },
    caption: {
        fontSize: 16,
        color: '#808080',
        fontWeight: 'bold',
        paddingTop: 20
    },
    inputBox: {
        borderWidth: 1,
        borderRadius: 4,
        borderColor: '#d6d7da',
        fontSize: 14,
        paddingTop: 4,
        paddingBottom: 4,
        paddingLeft: 5,
        paddingRight: 2,
        marginTop: 10,
    },
    coTravellerRow: {
        flexDirection: 'row',
        height: 40,
        alignItems: 'center',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#EEEEEE',
    },
    coTravellerName: {
        fontSize: 16,
    },
    addCoTravellerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    addNewTraveller: {
        color: '#27AE60',
        marginTop: 10,
    },
    travellerInput: {
        flex: 2,
        marginRight: 10,
    },
    budgetRow: {
        flexDirection: 'row',
        height: 40,
        alignItems: 'center',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#EEEEEE',
    },
    budgetName: {
        fontSize: 16,
        flex: 2,
    },
    budgetAmount: {
        fontSize: 16,
    },
    addBudgetInputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    budgetCategoryInput: {
        flex: 2,
        marginRight: 10,
    },
    budgetAmountInput: {
        marginRight: 10,
    },
    buttonContainer: {
        backgroundColor: '#27AE60',
        paddingVertical: 15,
        marginTop: 20,
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFF',
        fontWeight: '700'
    }
});