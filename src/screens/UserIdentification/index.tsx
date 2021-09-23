import React, { useEffect, useState } from 'react';
import {View, Text, TextInput , KeyboardAvoidingView, Platform,  SafeAreaView, TouchableWithoutFeedback, Keyboard, Alert} from 'react-native';
import {styles} from './styles'
import { Button } from '../../componets/button';
import colors from '../../styles/colors';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage'

export function UserIdentification({}){

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [name, setName] = useState<string>();
  const navigation = useNavigation();

  async function handleStart (){
    if(!name)
    return Alert.alert( "Me diz como chamar você? ");
    try{
      await AsyncStorage.setItem('@plantmanager:user', name);
      navigation.navigate('Confirmation', {
        title: 'Prontinho',
        subtitle: 'Agora vamos começar a cuidar das suas plantinhas com muito cuidado',
        buttonTitle: 'Começar',
        icon: 'smile',
        nextScreen: 'PlantSelect',
      });
    }catch{
      return Alert.alert( "Não foi possível salvar seu nome");
    }

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
         <TouchableWithoutFeedback onPress={Keyboard.dismiss}> 
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
            </TouchableWithoutFeedback>
        </SafeAreaView>
    </KeyboardAvoidingView>
  )
}

