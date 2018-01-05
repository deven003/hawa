import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';

import { StackNavigator } from 'react-navigation';

import Splash from './components/Splash.js';
import Citylist from './components/Citylist.js';

const Router = StackNavigator({
    Home: { screen: Splash },
    Citylist: { screen: Citylist }
});

export default class App extends Component<{}> {
  render() {
    return (
        <Router />
    );
  }
}

