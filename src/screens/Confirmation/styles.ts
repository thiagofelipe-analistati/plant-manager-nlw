import { StyleSheet } from "react-native";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";



export const styles = StyleSheet.create({
    container : {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    content :{
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    emoji :{
        fontSize: 78,
    },
    title: {
        fontSize: 22,
        marginTop: 15,
        textAlign: 'center',
        lineHeight:38,
        color: colors.heading,
        fontFamily: fonts.heading,
    },
    text: {
        fontSize: 18,
        marginTop: 10,
        textAlign: 'center',
        color: colors.heading,
        fontFamily: fonts.text,
        paddingHorizontal: 20,
    },
    button :{
        width: '100%',
        marginTop: 40,
        paddingHorizontal: 50
    }
    
})