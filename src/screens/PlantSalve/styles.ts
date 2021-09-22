import React from "react";

import { Dimensions, StyleSheet } from "react-native";
import { getBottomSpace } from "react-native-iphone-x-helper";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

export const styles = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent: 'space-around',
        backgroundColor: colors.shape
    },
    plantInfo : {
        flex: 1,
        paddingHorizontal: 30,
        paddingVertical: 50,
        alignItems: 'center',
        justifyContent: "center",
        backgroundColor: colors.shape,
    },
    plantName: {
        fontSize: 24,
        color: colors.heading,
        fontFamily: fonts.heading,
        marginTop: 15
    },
    plantAbout: {
        fontSize: 18,
        paddingHorizontal:20,
        color: colors.heading,
        fontFamily: fonts.text,
        textAlign: 'center',
        marginTop: 10,

    }, 
    controller : {
        backgroundColor: colors.white,
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom:  getBottomSpace() || 20,
    },
    tipContainer :{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: colors.blue_light,
        padding: 20,
        borderRadius: 20,
        position: 'relative',
        bottom: 60,
    },
    tipImage : {
        width: 56,
        height: 56
    },
    tipText : {
        flex: 1,
        marginLeft: 20,
        fontFamily: fonts.text,
        color: colors.blue,
        fontSize: 17,
        textAlign: 'justify'
    },
    alertLabel :{
        textAlign: 'center',
        fontFamily: fonts.complement,
        color: colors.heading,
        fontSize: 12,
        marginBottom: 5,
    }, 
    dateTimePickerText : {
        color: colors.heading,
        fontSize: 24,
        fontFamily: fonts.text
    },
    dateTimePickerButton : {
        width: '100%',
        alignItems: 'center',
        paddingVertical: 40,
    }
})