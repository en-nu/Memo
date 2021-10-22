import React from "react";
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native';

export default function Button(props){
    const {label, onPress}=props;
    return(
        <TouchableOpacity style={styles.bottonContainer} onPress={onPress}>
        <Text style={styles.bottonLabel}>{label}</Text>
        </TouchableOpacity>
    );

}
const styles =StyleSheet.create({
    bottonContainer:{
        backgroundColor:"#467FD3",
        borderRadius:4,
        alignSelf: 'flex-start',
        marginBottom:24,

    },
    bottonLabel:{
        fontSize: 16,
        lineHeight:32,
        paddingVertical:8,
        paddingHorizontal:32,
        color:"#ffffff"
    },
})