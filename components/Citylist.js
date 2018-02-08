import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    TouchableHighlight,
    Alert,
    ActivityIndicator,
    AsyncStorage
} from 'react-native';

export default class City extends Component<{}> {

    state = {
        data: []
    };
    // static navigationOptions = {
    //     header: null
    // }
    // static navigationOptions = {
    //     title: 'Select Your City',
    //     headerStyle: { backgroundColor: '#3F51B5' },
    //     headerTitleStyle: { color: '#fff' },
    // }

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.fetchData();
    }

    fetchData = async () => {
        const country = this.props.navigation.state.params.country;
        const response = await fetch("https://api.openaq.org/v1/cities?country=" + country);
        const json = await response.json();
        this.setState({ data: json.results });
    };

    goToAirQuality(country, city) {
        const { navigate } = this.props.navigation;
        AsyncStorage.setItem('city', city);
        navigate('AirQuality', { country: country, city: city });
    }

    render() {

        if (!this.state.data) {
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
                <FlatList
                    data={this.state.data}
                    keyExtractor={(x, i) => i}
                    renderItem={({ item }) =>
                        <TouchableHighlight onPress={() => this.goToAirQuality(item.country, item.city)} underlayColor="white">
                            <Text style={styles.item}>{item.city}</Text>
                        </TouchableHighlight>
                    }
                />
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
    indicator: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 80
    },
})
