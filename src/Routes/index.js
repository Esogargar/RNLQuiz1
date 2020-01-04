import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Image, TouchableOpacity } from 'react-native';
import Home from '../components/Home';
import Icon from 'react-native-vector-icons/Ionicons';
import Profile from '../components/Profile';
import Settings from '../components/Settings';
import Questions from '../components/Questions';


const profileImageSmall = require('../assets/images/profileS.jpg');


const drawerNavigation = createDrawerNavigator({
    Home: {
        screen: Home,
        navigationOptions: () => ({
            drawerLabel: 'Home Page',
            drawerIcon: (
                <Icon name="md-home" size={30} style={{ marginRight: -5, padding: 0, color: '#00818a' }} />
            ),
        }),
        headerTransparent: true,
    },
    Profile: {
        screen: Profile,
        headerMode: 'none',
        navigationOptions: ({ navigation }) => ({
            drawerLabel: 'My Profile',
            drawerIcon: (
                <Icon
                    name="md-contact"
                    size={30}
                    style={{ marginRight: -5, padding: 0, color: '#00818a' }}
                />
            ),
            header: null,

        }),
    },
    Settings: {
        screen: Settings,
        navigationOptions: ({ navigation }) => ({
            drawerLabel: 'My Settings',
            drawerIcon: (
                <Icon
                    name="md-settings"
                    size={30}
                    style={{ marginRight: -5, padding: 0, color: '#00818a' }}
                />
            ),
        }),
        // tabBarVisible = false,
    },
},
    { headerMode: 'none' }
);

const stackNavigation = createStackNavigator({
    Home: {
        screen: drawerNavigation,
        navigationOptions: ({ navigation }) => ({
            headerLeft: (
                <Icon
                    name="md-menu"
                    onPress={() => navigation.toggleDrawer()}
                    size={40}
                    style={{ marginLeft: 20, color: '#00818a' }}
                />
            ),
            headerTitle: 'Home',
            headerRight: (
                <TouchableOpacity onPress={() => navigation.navigate('Profile')}
                >
                    <Image
                        source={profileImageSmall}
                        style={{ height: 50, width: 50, marginRight: 8, borderRadius: 100, }}
                    />
                </TouchableOpacity>

            ),
            headerStyle: {
                backgroundColor: '#effffb',
            },
            headerTintColor: '#293462',
            headerTitleStyle: {
                fontWeight: 'bold',
            },

        }),
    },
    Questions
});
export default createAppContainer(stackNavigation);
