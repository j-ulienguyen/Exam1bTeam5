import React from 'react';
import {
    View,
    Text,
    Button,
    TextInput
} from 'react-native'
import styles from '../styles/LeftStyles';

function Left(){

    return (
        <View style={styles.container}>
                <Button
                title="Set Image"
                />

                <TextInput
                placeholder="Image Url"
                />

                <Text>
                    Your image url
                </Text>
        </View>
    )
    
}

export default Left;

