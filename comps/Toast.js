import React, {useState} from 'react';
import {View, Text, TextInput, Button,
    TouchableOpacity
} from 'react-native';
import styles from '../styles/ToastStyles';

function Toast(){


    ////attempted to building function to change btns position
    const [btnToggle, btnShowToggle] = useState(false);

    var btnPos = null;

    if(btnToggle === false){
        btPos = styles.hideBtn
    }

    if(btnToggle === true){
        btPos = styles.showBtn
    }

    return(
        <View style={styles.container}>
            <TouchableOpacity
            onPress = {()=>{btnShowToggle(!btnToggle)}}
            >
            <Text style={styles.toast}>Close Settings</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Toast;