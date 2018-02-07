import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';

import { StackNavigator } from 'react-navigation';

import Splash from './components/Splash.js';
import Citylist from './components/Citylist.js';
import Country from './components/Country.js';
import AirQuality from './components/AirQuality.js';

const Router = StackNavigator({
    Home: { screen: Splash },
    Country: { screen: Country },
    Citylist: { screen: Citylist },
    AirQuality: { screen: AirQuality }
});

export default class App extends Component<{}> {
  render() {
    return (
        <Router />
    );
  }
}

