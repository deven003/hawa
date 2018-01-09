import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    SectionList,
    ActivityIndicator
} from 'react-native';


export default class AirQuality extends Component<{}> {

    state = {
        data: []
    };
    
    static navigationOptions = {
        title: 'Your city Air Quality'
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
        
        // const locations = this.state.data.map((record, index) =>                
        //             <Text key={index}>Location - {record.location}</Text>            
        //     );
        if (!this.state.data) {
            return (
                <ActivityIndicator
                    animating={true}
                    style={styles.indicator}
                    size="large"
                />
            );
        }
        
        var section = [];


        this.state.data.forEach(function (value, key) {
            var location = value.location;
            var data = [];

            value.measurements.forEach(function (val, index) {
                data.push({
                    "parameter": val.parameter,
                    "value": val.value,
                    "source": val.sourceName
                });
            });

            section.push({ "title": location, "data": data });

        });
        
        return (            

            <View style={styles.container}>
                <SectionList
                    sections={section}
                    renderItem={({ item }) => <Text style={styles.item}>{item.parameter} - {item.value}</Text>}
                    renderSectionHeader={({ section }) => <Text style={styles.sectionHeader}>{section.title}</Text>}
                    keyExtractor={(item, index) => index}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1        
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
    sectionHeader: {
        paddingTop: 5,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 5,
        fontSize: 14,
        fontWeight: 'bold',
        backgroundColor: 'rgba(247,247,247,1.0)',
    },
})
