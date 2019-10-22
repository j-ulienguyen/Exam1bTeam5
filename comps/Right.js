import React, {useState} from 'react';
import {View, Text, Switch} from 'react-native';
import styles from '../styles/RightStyles';

function Right(){
    const [flexSwitch, setFlexSwitch] = useState(false);


    // Having troubles with getting the switches to become independent
    // Not sure I need to give a switchNumber to each switch, and when one number is active it will affect the others
    // var switchNumber = null;

    // var switchOn = true;
    // var switchOff = false;

    // var switch1 = true;
    // var switch2 = false;
    // var switch3 = false;
    // var switch4 = false;

    // if (flexSwitch === false){

    // }

    // var flexNum = null;

    // if (switch2){
    //     flexNum = 3;
    // }

	// UI
	return (
		<View style={styles.container}>
			<Text>Normal</Text>
            <Switch
                value = {!flexSwitch}
                onValueChange = {()=> {
                    setFlexSwitch(!flexSwitch)
            }}
            />

			<Text>Wide</Text>
            <Switch
                value = {flexSwitch}
                onValueChange = {()=> {
                    setFlexSwitch(!flexSwitch)
            }}
            />

			<Text>Wider</Text>
            <Switch
                value = {flexSwitch}
                onValueChange = {()=> {
                    setFlexSwitch(!flexSwitch)
            }}
            />

			<Text>Widest</Text>
            <Switch
                value = {flexSwitch}
                onValueChange = {()=> {
                    setFlexSwitch(!flexSwitch)
            }}
            />
		</View>
	)
}

export default Right;
