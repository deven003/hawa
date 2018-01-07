import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList
} from 'react-native';


export default class AirQuality extends Component<{}> {

    state = {
        data: []
    };
    
    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.fetchData();
    }

    fetchData = async () => {
        const country = this.props.navigation.state.params.country;
        const city = this.props.navigation.state.params.city;
        const response = await fetch("https://api.openaq.org/v1/latest?country=" + country + "&city=" + city);
        const json = await response.json();
        this.setState({ data: json.results });
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>Air Quality of {this.props.navigation.state.params.country} {this.props.navigation.state.params.city}</Text>
            {this.state.data.map((record, index) => (
                <Text key={index}>Location - {record.location}</Text>
            ))}                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
})
