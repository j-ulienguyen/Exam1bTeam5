import React, {useState} from 'react';
import {
    View,
    Text,
    Button,
    TextInput
} from 'react-native';
import styles from '../styles/LeftStyles';

function Left(){

    const [setVal, setShowVal] = useState('image url')
    

    return (

        //Need to span the background color across entire width
        <View style={styles.container}>
        
            <Button
                title="Set Image"
                />

                <TextInput
                placeholder="Image Url"
                onChangeText={(text)=>{setShowVal(text)}}
                />

                <Text>
                    Your image url
                </Text>
               
        </View>
    )
    
}

export default Left;

