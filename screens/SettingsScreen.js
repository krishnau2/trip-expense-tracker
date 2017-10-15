import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class SettingsScreen extends React.Component{
    static navigationOptions = {
        title: 'Settings',
    };

    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.balanceLabel}>Settings Page</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15,
        backgroundColor: '#fff',
    },
    balanceLabel: {
        color: '#3B7A57',
        fontSize: 12,
      },
});