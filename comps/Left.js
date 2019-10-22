import React, {useState} from 'react';
import {
    View,
    Text,
    Button,
    TextInput,
    Image
} from 'react-native';
import styles from '../styles/LeftStyles';

function Left(){
    const [setVal, setShowVal] = useState("")
    const [BGImage, setBGImage] = useState(false);

    if (BGImage === false){
        bgImage = null;
        buttonTitle = "Set Image"
    }

    if (BGImage === true){
        bgImage = (
            <Image
                resizeMode = "cover"
                style = {{
                    width: "100%",
                    height: "100%",
                    zIndex: -99,
                    position: "absolute"
                }}
                source = {{uri:setVal}}
            />
        );

        buttonTitle = "Reset Image";
    }

    return (
        <View style={styles.container}>
            <Button
                title= {buttonTitle}
                onPress = {()=>{
                    setBGImage(!BGImage)
                }}
            />

            <TextInput
                placeholder="Image Url"
                onChangeText={(text)=>{setShowVal(text)}}
            />

            <Text>
                Your image url is {setVal}
            </Text>

            {bgImage}
        </View>
    )
}

export default Left;

