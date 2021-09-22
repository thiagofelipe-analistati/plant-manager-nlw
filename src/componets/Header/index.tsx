import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react'
import { Image, Text, View} from 'react-native'
import {styles} from './styles'


type Props = {
    urlImage: string;
  }

export function Header ({ urlImage} : Props ){
    const [userName, setUserName] = useState('');

    useEffect(()=>{
        async function loadStorageUserName() {
            const user = await AsyncStorage.getItem('@plantmanager:user');
            setUserName(user || '');
        }
        loadStorageUserName();
    },[])

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.greeting}> Olá,</Text>
                <Text style={styles.usernaem}>{userName} </Text>
            </View>
            <Image style={styles.avatar} source = { {uri: urlImage }} />
        </View>
    );
}