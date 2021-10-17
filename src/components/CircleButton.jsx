import React from "react";
import {View,Text,StyleSheet} from 'react-native';

export default function(props){
    const {children} =props;
    return(
        <View style={styles.circleButton}>
        <Text style={styles.CircleButtonLabel}>{children}</Text>
      </View>

    );
}

const styles =StyleSheet.create({
    circleButton:{
        backgroundColor:'#467FD3',
        width:64,
        height:64,
        borderRadius:32,
        justifyContent:'center',
        alignItems:'center',
        position:'absolute',
        right:40,
        bottom:40,
        shadowColor:'#000000',
        shadowOffset:{width:0, height:8},
        shadowOpacity:0.25,
        shadowRadius:8,
        elevation:8,
      },
      CircleButtonLabel:{
        color:'#ffffff',
        fontSize:40,
        lineHeight:40,
    
      },

});