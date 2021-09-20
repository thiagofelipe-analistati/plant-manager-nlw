import React from 'react'
import { Image, Text, View} from 'react-native'
import {styles} from './styles'

import { RectButton, RectButtonProps} from 'react-native-gesture-handler'

interface EnviromentButtonProps extends RectButtonProps{
    title: string;
    active?: boolean;
}
export function EnviromentButton ( {
    title,
    active = false,
    ...rest
    }:EnviromentButtonProps ){
    return (
        <RectButton 
            style={[
                styles.container,
                active && styles.containeractive
            ]}
            {...rest}
        >
            <Text style={[
                styles.text,
                active && styles.textactive
                ]}>
               {title}
            </Text>
        </RectButton>
    );
}