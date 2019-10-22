import {StyleSheet} from 'react-native';

var styles = StyleSheet.create({
    container: {
          flex: 1,
         justifyContent:"center",
         alignItems:"center"
    },
    toast: {
        backgroundColor:"yellow",
        bottom:-300,
        borderWidth: 20,
        borderColor: "yellow",
        borderRadius: 8,
    
    },

    showBtn:{
        backgroundColor:"yellow",
        bottom:-300,
        borderWidth: 20,
        borderColor: "yellow",
        borderRadius: 8,

    },

    hidBtn:{
        display:"none"

    }
    
});

export default styles;