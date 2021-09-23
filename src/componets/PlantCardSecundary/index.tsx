import React from 'react'
import { Image, Text, View} from 'react-native'
import {RectButton, RectButtonProps} from 'react-native-gesture-handler'
import {styles} from './styles'
import {SvgFromUri} from 'react-native-svg'


interface PlantProps extends RectButtonProps {
  data:{
    name: string;
    photo: string;
    hour: string;
    }
  }
export function PlantCardSecundary ({ data, ...rest} : PlantProps ){
    return (
        <RectButton style={styles.container} {...rest}>
            <SvgFromUri 
                uri={ data.photo}
                height={50}
                width={50}
            />
                <Text style={styles.title}>
                  {data.name} 
                </Text> 
                <View style={styles.details}> 
                  <Text style={styles.timeLabel}> 
                    Regar às
                  </Text>
                  <Text style={styles.time}> 
                    {data.hour}
                  </Text>
                </View>
        </RectButton>
    );
}