
import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

function Hello(props){
    const {children, style} =props;
    return (
        <View>
            <Text style={[styles.text ,style]}>
                Hello{children}</Text>
        </View>
    );
}

const styles =StyleSheet.create({
    text:{
        color: '#ffffff',
        backgroundColor:'blue',
        fontSize:40,
        fontWeight:'bold',
        padding: 16,
    }
   
});

export default Hello;