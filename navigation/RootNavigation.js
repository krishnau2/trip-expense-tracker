import React from 'react';
import {StackNavigator} from 'react-navigation';
import MainTabNavigator from './MainTabNavigator';
import TripDetails from '../screens/TripDetails';
import AddNewScreen from '../screens/AddNewScreen';

const RootStackNavigator = StackNavigator(
    {
        Main: { screen: MainTabNavigator, },
        TripDetails: { screen: TripDetails},
        AddNewScreen: {screen: AddNewScreen}
    },
    {
        mode: 'modal',
        // headerMode: 'none',
    },
    {
        navigationOptions: () => ({
            headerTitleStle: {
                fontWeight: 'normal',
            },
        }),
    }
);

export default class RootNavigator extends React.Component{
    render(){
        return <RootStackNavigator />;
    }
}