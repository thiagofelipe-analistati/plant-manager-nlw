import React from "react";

import { StyleSheet } from "react-native";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

export const styles = StyleSheet.create({
    button :{
        backgroundColor: colors.green,
        justifyContent:'center',
        alignItems: 'center',
        borderRadius: 16,
        height: 56,
    }, 
    textbutton: {
        color: colors.white,
        fontSize: 24,
        fontFamily: fonts.text,
    }
})