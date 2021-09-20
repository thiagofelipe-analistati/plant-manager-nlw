import React from "react";
import { getStatusBarHeight} from 'react-native-iphone-x-helper'

import { StyleSheet } from "react-native";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        maxWidth: '45%',
        backgroundColor: colors.shape,
        borderRadius: 20,
        alignItems: 'center',
        paddingVertical: 10,
        margin: 10,
    },
    text :{
        color: colors.green_dark, 
        fontFamily: fonts.heading,
        marginVertical: 16,
    }
});