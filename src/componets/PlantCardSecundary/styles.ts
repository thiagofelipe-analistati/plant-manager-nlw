import React from "react";
import { getStatusBarHeight} from 'react-native-iphone-x-helper'

import { StyleSheet } from "react-native";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: colors.shape,
        borderRadius: 20,
        alignItems: 'center',
        paddingVertical: 25,
        paddingHorizontal: 10,
        flexDirection: 'row',
        marginVertical: 5,
    },
    title :{
        flex: 1,
        marginRight: 10,
        fontFamily: fonts.heading,
        fontSize: 17,
        color: colors.heading
    },
    details : {
        alignItems:'flex-end'
    },
    timeLabel : {
        marginTop: 5,
        fontSize: 16,
        fontFamily: fonts.text,
        color: colors.body_light
    },
    time : {
        marginTop: 5,
        fontSize: 16,
        fontFamily: fonts.heading,
        color: colors.heading
    }

});