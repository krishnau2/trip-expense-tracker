import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class HomeScreen extends React.Component{
    static navigationOptions = {
        title: 'Home',
    };

    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.budgetLabel}>Home Page</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 5,
        backgroundColor: '#fff',
    },
    budgetLabel: {
        color: '#4183D7',
        fontSize: 12,
    },
});