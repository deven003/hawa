import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

import { StackNavigator } from 'react-navigation';


export default class Splash extends Component<{}> {

    // static navigationOptions = {
    //     header: null
    // }
    static navigationOptions = {
        title: 'Select Your Country'
    }

    constructor(props) {
        super(props);        
    }

    componentDidMount()
    {
        const { navigate } = this.props.navigation;

        // setInterval(() => {
        //     navigate('Citylist');
        // }, 10000);
    }

    render() {
        return (
            <View>
                <Text>HAWA</Text>
            </View>
        );
    }
}

