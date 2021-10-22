import React from "react";
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons';


export default function(props){
    const {style, name, onPress} =props;
    return(
      <TouchableOpacity style={[styles.circleButton, style]} onPress={onPress}>
          <Feather name={name} size={32} color="white" />
      </TouchableOpacity>

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