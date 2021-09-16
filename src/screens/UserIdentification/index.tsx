import React, { useEffect, useState } from 'react';
import {View, Text, TextInput ,Image, StatusBar, KeyboardAvoidingView, Platform, TouchableOpacity, SafeAreaView} from 'react-native';
import {styles} from './styles'


import {MaterialCommunityIcons} from '@expo/vector-icons'
import { Button } from '../../button';
import colors from '../../styles/colors';
import { useNavigation } from '@react-navigation/native';





export function UserIdentification({}){

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [name, setName] = useState<string>();
  const navigation = useNavigation();

  function handleStart (){
      navigation.navigate('Confirmation');
  }
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
                <View style={styles.form}> 
                    <Text style={styles.emoji} >
                    {
                      isFilled ? '😁' : '😊'
                      
                    }  
                    </Text>
                    <Text style={styles.title}>
                        Como podemos{'\n'}chamar você?
                    </Text>
                    <TextInput  style={[styles.imput, (isFocused || isFilled) && {borderColor: colors.green}]}
                     placeholder="Digite seu nome"
                     onBlur={handleInputBlur}
                     onFocus={handleInputFocus}
                     onChangeText={handleInputChange}
                     />
                     <View style={styles.button}>
                    <Button title="Confirma" onPress={handleStart}/>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    </KeyboardAvoidingView>
  )
}

