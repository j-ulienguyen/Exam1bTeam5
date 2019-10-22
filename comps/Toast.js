import React, {useState} from 'react';
import {View, Text, TextInput, Button,
    TouchableOpacity
} from 'react-native';
import styles from '../styles/ToastStyles';

function Toast(){
    return(
        <View style={styles.container}>
            <TouchableOpacity>
            <Text style={styles.toast}>Toast</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Toast;