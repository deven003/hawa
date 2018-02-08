import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    AsyncStorage,
    ActivityIndicator
} from 'react-native';

import { StackNavigator } from 'react-navigation';
import Country from './Country';


export default class Splash extends Component<{}> {

    // static navigationOptions = {
    //     header: null,
    // }
    
    constructor(props) {
        super(props);      
        this.state = {isReady: false };  
    }

    componentWillMount()
    {
        // const { navigate } = this.props.navigation;

        // const intervalId = setInterval(() => {
        //     navigate('Country');
        // }, 1000);
        
        // console.debug('interval id ' + intervalId);   
        // console.debug('unmounting interval id ' + intervalId);
        // clearInterval(intervalId);     
        this.checkIfCountryExists();
        
    }

    async checkIfCountryExists()
    {
        const { navigate } = this.props.navigation;

        const city = await AsyncStorage.getItem('city');
        const country = await AsyncStorage.getItem('country');
        console.log(city);
        if (city !== null && country !== null) {
            navigate('AirQuality', { country: country, city: city });
        } else {
            this.setState({ isReady: true });
        }
    }

    render() {

        const { navigate } = this.props.navigation;
        
        if (!this.state.isReady) 
        {
            return (
                <ActivityIndicator
                    animating={true}
                    style={styles.indicator}
                    size="large"
                />
            );
        }
        
        return (
            <View style={styles.container}>
                <Text style={styles.logo}>HAWA</Text>
                <Text style={styles.desc}>Check Air Quality of your city</Text>
                <View style={styles.nextButton}>
                <Button 
                    onPress={() => navigate('Country')}
                    title="Select your country"
                />    
                </View>           
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3F51B5',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        fontSize: 92,
        color: '#fff'
    },
    desc: {
        color: '#fff',
        fontSize: 18
    },
    nextButton: {
        width: 250,
        marginTop: 50,
        paddingTop: 10,
        paddingBottom: 10,
    },
    indicator: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 80
    },


})