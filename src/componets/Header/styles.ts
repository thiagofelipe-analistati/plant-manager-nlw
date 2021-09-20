import React from "react";
import { getStatusBarHeight} from 'react-native-iphone-x-helper'

import { StyleSheet } from "react-native";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 20,
        marginTop: getStatusBarHeight(),
       
    },
    avatar :{
        width: 70,
        height: 70,
        borderRadius: 35,
    } ,
    greeting : {
        fontSize: 32,
        color: colors.heading, 
        fontFamily: fonts.text
        
    } ,
    usernaem :{
        fontSize: 32,
        color: colors.heading, 
        fontFamily: fonts.heading,
        lineHeight: 40,
    }
});