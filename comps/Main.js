import React from 'react';
import {View, Text} from 'react-native';
import styles from '../styles/MainStyles';

// Import comps below
import Right from './Right';

function Main(){
	// UI
	return (
		<View style={styles.container}>
            <Right/>
		</View>
	)
}

export default Main;
