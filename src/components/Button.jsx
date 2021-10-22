import React from "react";
import {View,Text,StyleSheet} from 'react-native';

export default function Button(props){
    const {label}=props;
    return(
        <View style={styles.bottonContainer}>
        <Text style={styles.bottonLabel}>{label}</Text>
        </View>
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