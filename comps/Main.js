import React, {useState} from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import styles from '../styles/MainStyles';

import Toast from '../comps/Toast'
import Settings from '../comps/Settings'


function Main(){
    return(
        <View styles={styles.container}>
            <Toast></Toast>
            <Settings></Settings>
        </View>
    )
}



export default Main;