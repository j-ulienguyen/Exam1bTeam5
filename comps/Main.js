import React, {useState} from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import styles from '../styles/MainStyles';

import Toast from '../comps/Toast'

function Main(){
    return(
        <View styles={styles.container}>
            <Toast></Toast>
        </View>
    )
}



export default Main;