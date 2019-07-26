import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StatusBar } from 'react-native';
import styles from './styles';
import Btn from './btn';

export default class App extends Component {

    constructor(props){
        super(props)
        this.state = {
            color: '#fff',
            time: null,
            last: null,
            tam: 30,
            cont: 10,
        };        
    }

    onPress = (timestamp) => {
        this.setState({ time: this.state.time = timestamp });
        this.setState({ last: this.state.last = timestamp.substring(timestamp.length - 1) });
        this.setState({ tam: this.state.tam + this.state.cont });
        if (this.state.tam > 90) {
            this.setState({ cont: this.state.cont = -10 })
        } else if (this.state.tam < 30) {
            this.setState({ cont: this.state.cont = 10 })
        }
        switch (this.state.last) {
            case '0': return this.setState({ color: this.state.color = '#ffffff' });
            case '1': return this.setState({ color: this.state.color = '#000000' });
            case '2': return this.setState({ color: this.state.color = '#0000ff' });
            case '3': return this.setState({ color: this.state.color = '#008000' });
            case '4': return this.setState({ color: this.state.color = '#ff00ff' });
            case '5': return this.setState({ color: this.state.color = '#ff0000' });
            case '6': return this.setState({ color: this.state.color = '#5416b4' });
            case '7': return this.setState({ color: this.state.color = '#ffff00' });
            case '8': return this.setState({ color: this.state.color = '#808080' });
            case '9': return this.setState({ color: this.state.color = '#e0b0ff' });
            default:  return this.setState({ color: this.state.color = '#ffffff' });
        }
    }


    render() {
        return (
            <View style={styles.container} backgroundColor={this.state.color}>
                <StatusBar
                    barStyle="light-content"
                    backgroundColor={this.state.color}
                />
                <View style={styles.viewGo} >
                    <Text style={[styles.go, { fontSize: this.state.tam }]}>Go4all!</Text>
                </View>
                    <Btn onPress={this.onPress} />
                <View>
                    <Text style={styles.time}>{this.state.time}</Text>
                </View>
            </View>
        );
    }
}