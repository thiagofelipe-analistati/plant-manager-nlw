import React from "react";
import { getStatusBarHeight} from 'react-native-iphone-x-helper'

import { StyleSheet } from "react-native";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.shape,
        height: 40,
        width: 76,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,
        marginHorizontal: 10
    },
    containeractive: {
        backgroundColor: colors.green_light
    },
    text :{  
        color: colors.heading, 
        fontFamily: fonts.text,
    },
    textactive : {  
        color: colors.green_dark, 
        fontFamily: fonts.heading,
    }
});