import React from 'react';
import {View, Text} from 'react-native';
import styles from '../styles/MainStyles';

// Import comps below
import Left from './Left';
import Right from './Right';
import Toast from './Toast'


function Main(){
	// UI
	return (
		<View style={styles.container}>
            <Left/>
            <Right/>
            <Toast/>
		</View>
	)
}

export default Main;
