import React, { Component } from 'react';
import { TouchableOpacity, Text, Buttom } from 'react-native';
import styles from './styles';

const Btn = (props) => {
    return (
        <TouchableOpacity 
            style={styles.actionButtom} 
            onPress={() => props.onPress(Date.now().toString())}
        >
            <Text>Click Me</Text>
        </TouchableOpacity>
    );
}
export default Btn; 