import React, {useState} from 'react';
import {View, Text, TextInput, Button
} from 'react-native';
import styles from '../styles/SettingsStyles';

function Settings(){
    return(
    <View style={styles.container}>
        <View style={styles.settingsbox}>
        <Text>
            Settings
        </Text>
        <Button title="Close"></Button>
        </View>
    </View>
    )
}

export default Settings;