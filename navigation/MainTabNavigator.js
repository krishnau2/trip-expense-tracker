import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import {TabNavigator, TabBarBottom} from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import AddNewScreen from '../screens/AddNewScreen';
import SettingsScreen from '../screens/SettingsScreen';

export default TabNavigator(
    {
        Home: {
            screen: HomeScreen,
        },
        AddNew: {
            screen: AddNewScreen,
        },
        Settings: {
            screen: SettingsScreen,
        },
    },
    {
        navigationOptions: ({navigation}) => ({
            tabBarIcon: ({focused}) => {
                const {routeName} = navigation.state;
                let iconName;
                switch (routeName) {
                    case 'Home' : iconName = `ios-home${focused ? '' : '-outline'}`; break;
                    case 'AddNew': iconName = `ios-add-circle${focused ? '' : '-outline'}`; break;
                    case 'Settings' : iconName = `ios-settings${focused ? '' : '-outline'}`; break;
                }
                return(
                    <Ionicons
                        name={iconName}
                        size={28}
                        style={{marginBottom: -3}}
                        color={focused ? '#2f95dc' : '#ccc'}
                    />
                );
            },
        }),
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        animationEnabled: false,
        swipeEnabled: false,
    }
);