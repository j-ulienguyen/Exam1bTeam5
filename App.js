import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles/AppStyles';

// Reminder to create a comps folder
// Import comps below

import Main from './comps/Main';



function App(){
	// UI
	return (
		<View style={styles.container}>
			<Main/>
			
		</View>
	)
}

export default App;
