import React from 'react'
import { View, Text, Image, SafeAreaView, TouchableOpacity, TextInput} from 'react-native'
import {styles} from './styles'
import Watering from '../../assets/watering.png'
import {Feather} from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/core'

export function Home (){
    const navigation = useNavigation();
    function handleStart (){
        navigation.navigate('UserIdentification');
    }
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>
                Gerencie {'\n'}suas plantas de{'\n'} forma fácil
            </Text>
            <Image source={Watering} style={styles.image} />
            <Text style={styles.subtitle}>
            Não esqueça mais de regar suas plantas. {'\n'} Nós cuidamos de lembrar você sempre que precisar.
            </Text >
            <TouchableOpacity 
            style={styles.button} 
            activeOpacity={0.7}
            onPress={handleStart}
            >
                <Feather style={styles.textbutton} name="chevron-right" /> 
            </TouchableOpacity>
        </SafeAreaView>
    );
}