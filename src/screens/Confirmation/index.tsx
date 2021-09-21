import React, { useEffect, useState } from 'react';
import {
  View, 
  Text, 
  KeyboardAvoidingView, 
  Platform, 
  SafeAreaView,
  Alert
} from 'react-native';
import {styles} from './styles'


import {MaterialCommunityIcons} from '@expo/vector-icons'
import { Button } from '../../componets/button';
import colors from '../../styles/colors';
import { useNavigation } from '@react-navigation/core';



export function Confirmation({}){

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [name, setName] = useState<string>();
  const navigation = useNavigation();
  function handleStart (){
    navigation.navigate("PlantSelect");
  }
  return(
   
    <KeyboardAvoidingView
     style={styles.container}
     behavior={Platform.OS ==="ios"? "padding" : "height"}
     >
       <SafeAreaView style={styles.container}>
            <View style={styles.content}> 
              <Text style={styles.emoji} > 😁 </Text>
              <Text style={styles.title}>
                  Prontinho
              </Text>
              <Text style={styles.text}>  Agora vamos começar a cuidar das suas {`\n`}plantinhas com muito cuidado. </Text>

              <View style={styles.button}>
                <Button title="Começar" onPress={handleStart}/>
              </View>
            </View>
        </SafeAreaView>
    </KeyboardAvoidingView>
  )
}

