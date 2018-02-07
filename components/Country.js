import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    TouchableHighlight,
    Alert,
    ActivityIndicator
} from 'react-native';

export default class Country extends Component<{}> {

    state = {
        data: null
    };

    static navigationOptions = {
        title: 'Select Your Country',
        headerStyle: { backgroundColor: '#3F51B5' },
        headerTitleStyle: { color: '#fff' },
    }    

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.fetchData();
    }

    fetchData = async () => {
        const response = await fetch("https://api.openaq.org/v1/countries");
        const json = await response.json();
        this.setState({ data: json.results });
    }

    goToCities(country) {
        const { navigate } = this.props.navigation;
        navigate('Citylist', { country: country });
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
                        <TouchableHighlight onPress={() => this.goToCities(item.code) } underlayColor="white">
                            <Text style={styles.item}>{item.name}</Text>
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
