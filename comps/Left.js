import React, {useState} from 'react';
import {
    View,
    Text,
    Button,
    TextInput
} from 'react-native';
import styles from '../styles/LeftStyles';

function Left(){

    const [setVal, setShowVal] = useState('Your image url here')
    const [setText, setShowText] = useState(false);
    

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
                    {setVal}
                </Text>
               
        </View>
    )
    
}

export default Left;

