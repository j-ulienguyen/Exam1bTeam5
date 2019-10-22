import React from 'react';
import {View, Text} from 'react-native';
import Left from './Left';
import Toast from './Toast'
import styles from '../styles/MainStyles';


function Main(){
    return (
        <View style={styles.container}> 
            <Left/>
            <Toast/>
        </View>
    )  
}

export default Main;