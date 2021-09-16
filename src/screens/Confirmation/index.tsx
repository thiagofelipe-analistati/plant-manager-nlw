import React, { useEffect, useState } from 'react';
import {View, Text, TextInput ,Image, StatusBar, KeyboardAvoidingView, Platform, TouchableOpacity, SafeAreaView} from 'react-native';
import {styles} from './styles'


import {MaterialCommunityIcons} from '@expo/vector-icons'
import { Button } from '../../button';
import colors from '../../styles/colors';



export function Confirmation({}){

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [name, setName] = useState<string>();

  function handleInputBlur (){
    setIsFocused(false);
    setIsFilled(!!name)
  }
  function handleInputFocus (){
    setIsFocused(true);
  }
  function handleInputChange(value: string){
    setIsFilled(!!value);
    setName(value);
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
                <Button title="Começar" />
              </View>
            </View>
        </SafeAreaView>
    </KeyboardAvoidingView>
  )
}

