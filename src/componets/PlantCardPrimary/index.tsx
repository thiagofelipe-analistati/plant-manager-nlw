import React from 'react'
import { Image, Text, View} from 'react-native'
import {RectButton, RectButtonProps} from 'react-native-gesture-handler'
import {styles} from './styles'
import {SvgFromUri} from 'react-native-svg'


interface PlantProps extends RectButtonProps {
  data:{
    name: string;
    photo: string;
    }
  }
export function PlantCardPrimary ({ data, ...rest} : PlantProps ){
    return (
        <RectButton style={styles.container} {...rest}>
            <SvgFromUri 
                uri={ data.photo}
                height={70}
                width={70}
            />
                <Text style={styles.text}>{data.name} </Text> 
        </RectButton>
    );
}