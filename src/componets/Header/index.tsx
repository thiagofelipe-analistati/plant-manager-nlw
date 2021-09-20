import React from 'react'
import { Image, Text, View} from 'react-native'
import {styles} from './styles'


type Props = {
    urlImage: string;
  }
export function Header ({ urlImage} : Props ){
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.greeting}> Olá,</Text>
                <Text style={styles.usernaem}> Thiago</Text>
            </View>
            <Image style={styles.avatar} source = { {uri: urlImage }} />
        </View>
    );
}