import React from 'react';
import {
    View,
    Text
} from 'react-native'
import Left from './Left';
import styles from '../styles/MainStyles';


function Main(){

    return (
        <View style={styles.container}> 
            <Left/>
        </View>
    )
    
}

export default Main;

