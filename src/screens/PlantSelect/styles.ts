import { StyleSheet } from "react-native";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";



export const styles = StyleSheet.create({
    container : {
        flex: 1,
       backgroundColor: colors.background,
    },
    content :{
        paddingHorizontal: 30
    }, 
    title: {
        fontSize: 17,
        marginTop: 15,
        lineHeight:20,
        color: colors.heading,
        fontFamily: fonts.heading, 
    },
    subtitle: {
        fontSize: 17,
        lineHeight:20,
        color: colors.heading,
        fontFamily: fonts.text,
    }, 
    enviromentList : {
        height: 40,
        justifyContent: 'center',
        paddingBottom: 5,
        marginLeft: 32,
        marginVertical: 32,
    },
    plants :{
        flex: 1,
        paddingHorizontal: 32,
        justifyContent: 'center'
    }
})