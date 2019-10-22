import {StyleSheet} from 'react-native';

var styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: "center",
        // alignItems: "center",
        

        //toast position
        position: "absolute",
        bottom: -300
    },
    toast: {
        backgroundColor:"yellow",
        borderWidth: 20,
        borderColor: "yellow",
        borderRadius: 8,
        overflow: "hidden"
    }
    
});

export default styles;