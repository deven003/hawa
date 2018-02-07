import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';

import { StackNavigator } from 'react-navigation';


export default class Splash extends Component<{}> {

    static navigationOptions = {
        header: null,
    }
    
    constructor(props) {
        super(props);        
    }

    componentDidMount()
    {
        // const { navigate } = this.props.navigation;

        // const intervalId = setInterval(() => {
        //     navigate('Country');
        // }, 1000);
        
        // console.debug('interval id ' + intervalId);   
        // console.debug('unmounting interval id ' + intervalId);
        // clearInterval(intervalId);     
    }

    componentWillUnmount() {
        
    }

    goToCountry() {
    }

    render() {

        const { navigate } = this.props.navigation;

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
    }


})