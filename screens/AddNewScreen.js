import React from 'react';
import { Text, View, StyleSheet,
    SectionList, FlatList, TextInput, ScrollView,
    KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Swipeout from 'react-native-swipeout';

export default class LinksScreen extends React.Component {
    static navigationOptions = {
        title: 'New Trip',
        tabBarLabel: 'Add trip'
    };

    constructor(props) {
        super(props);
        this.state = {
            tripNameStyle: styles.textinput_unfocused,
            coTravellerStyle: styles.textinput_unfocused,
            expenseNameStyle: styles.textinput_unfocused,
            expenseAmountStyle: styles.textinput_unfocused,
            coTravellers: [
                { key: 1, name: 'Jaison' },
                { key: 2, name: 'KK' },
                { key: 3, name: 'Unni' },
            ],
            budget: [
                { key: 1, name: 'Petrol', amount: 7000 },
                { key: 2, name: 'Toll', amount: 1000 },
                { key: 3, name: 'Accomodatio', amount: 8000 },
            ]
        };
    }

    createTrip(){

        this.props.navigation.goBack(null);
    }

    onFocus(inputComponent) {
        this.setState({ [inputComponent + 'Style']: styles.textinput_focused });
    }
    onBlur(inputComponent) {
        this.setState({ [inputComponent + 'Style']: styles.textinput_unfocused });
    }

    render() {
        var swipeoutBtns = [
            {
              text: 'Remove',
              backgroundColor: 'red',
            }
        ]

        return (
            <ScrollView>
                <KeyboardAvoidingView behavior="padding" style={styles.container}>
                    <View style={styles.content}>
                        <Text style={styles.caption}>Trip Name</Text>
                        <TextInput
                            onBlur={() => this.onBlur('tripName')}
                            onFocus={() => this.onFocus('tripName')}
                            style={[styles.inputBox, this.state.tripNameStyle]}
                            placeholder="Kodaikanal trip"
                            placeholderTextColor="rgba(128, 128, 128, 0.7)"
                        />

                        <Text style={styles.caption}>Add Co-Travellers</Text>
                        <FlatList
                            data={this.state.coTravellers}
                            renderItem={({ item }) =>
                                <Swipeout right={swipeoutBtns}
                                    autoClose = {true}
                                    backgroundColor= 'transparent'>
                                    <View style={styles.coTravellerRow}>
                                        <Text style={styles.coTravellerName}>{item.name}</Text>
                                    </View>
                                </Swipeout>
                            }
                        />
                        <View style={styles.addCoTravellerContainer}>
                            <TextInput
                                onBlur={() => this.onBlur('coTraveller')}
                                onFocus={() => this.onFocus('coTraveller')}
                                style={[styles.inputBox, styles.travellerInput, this.state.coTravellerStyle]}
                                placeholder="Traveller name"
                                placeholderTextColor="rgba(128, 128, 128, 0.7)"
                            />
                            <Ionicons style={styles.addNewTraveller} name="ios-add-circle" size={25} />
                        </View>

                        <Text style={styles.caption}>Add Budget</Text>
                        <FlatList
                            data={this.state.budget}
                            renderItem={({ item }) =>
                                <Swipeout right={swipeoutBtns}
                                    autoClose = {true}
                                    backgroundColor= 'transparent'>
                                    <View style={styles.budgetRow}>
                                        <Text style={styles.budgetName}>{item.name}</Text>
                                        <Text style={styles.budgetAmount}>${item.amount}</Text>
                                    </View>
                                </Swipeout>
                            }
                        />
                        <View style={styles.addBudgetInputContainer}>
                            <TextInput
                                onBlur={() => this.onBlur('expenseName')}
                                onFocus={() => this.onFocus('expenseName')}
                                style={[styles.inputBox, styles.budgetCategoryInput, this.state.expenseNameStyle]}
                                placeholder="Food, hotel, etc"
                                placeholderTextColor="rgba(128, 128, 128, 0.7)"
                            />
                            <TextInput
                                onBlur={() => this.onBlur('expenseAmount')}
                                onFocus={() => this.onFocus('expenseAmount')}
                                style={[styles.inputBox, styles.budgetAmountInput, this.state.expenseAmountStyle]}
                                placeholder="amount"
                                placeholderTextColor="rgba(128, 128, 128, 0.7)"
                                keyboardType="numeric"
                            />
                            <Ionicons style={styles.addNewTraveller} name="ios-add-circle" size={25} />
                        </View>
                    </View>
                    <TouchableOpacity style={styles.buttonContainer} onPress={this.createTrip.bind(this)}>
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
        // borderColor: '#d6d7da',
        fontSize: 14,
        paddingTop: 4,
        paddingBottom: 4,
        paddingLeft: 5,
        paddingRight: 2,
        marginTop: 10,
    },
    textinput_focused: {
        borderColor: '#27AE60',
    },
    textinput_unfocused: {
        borderColor: '#d6d7da',
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