import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles/AppStyles';
import Main from './comps/Main'

// Reminder to create a comps folder
// Import comps below



function App(){
	// UI
	return (
		<View style={styles.container}>
			<Main/>
		</View>
	)
}

export default App;
