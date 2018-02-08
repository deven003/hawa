import React, { Component } from 'react';
import {
    Text,
    View,
    AsyncStorage
} from 'react-native';

import { DrawerNavigator, NavigationActions } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Splash from './components/Splash.js';
import Citylist from './components/Citylist.js';
import Country from './components/Country.js';
import AirQuality from './components/AirQuality.js';

const DrawerIcon = (<Icon name="menu" size={35} onPress={() => navigation.navigate('DrawerOpen')} />);

const DrawerButton = (props) => {
    return (
        <View>
            <TouchableOpacity onPress={() => { props.navigation.navigate('DrawerOpen') }}>
                <Icon name="menu" size={35} onPress={() => navigation.navigate('DrawerOpen')} />
            </TouchableOpacity>
        </View>
    );
};

const Drawer = DrawerNavigator({
    Home: { 
        screen: Splash,
        title: ''
    },
    Country: { 
        screen: Country,
        title: '',
        header: 'none'
    },
    Citylist: { 
        screen: Citylist,
        title: ''
    },
    AirQuality: { 
        screen: AirQuality,
        navigationOptions: ({ navigation }) => ({
            title: "Category List",
            headerLeft: <DrawerButton navigation={navigation} />
        }),
    }
});

export default class App extends Component<{}> {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Drawer />
        );
    }
}

