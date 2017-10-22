import React from 'react';
import {StackNavigator} from 'react-navigation';
import MainTabNavigator from './MainTabNavigator';
import TripDetails from '../screens/TripDetails';

const RootStackNavigator = StackNavigator(
    {
        Main: { screen: MainTabNavigator, },
        TripDetails: { screen: TripDetails}
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