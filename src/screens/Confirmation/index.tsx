import React, { useEffect, useState } from 'react';
import {
  View, 
  Text, 
  KeyboardAvoidingView, 
  Platform, 
  SafeAreaView,
} from 'react-native';
import {styles} from './styles'
import { Button } from '../../componets/button';
import { useNavigation, useRoute } from '@react-navigation/core';

interface Params {
  title: string;
  subtitle: string;
  buttonTitle: string;
  icon: 'smile' | 'hug';
  nextScreen: string;
}
const emjis = {
  hug: '🤗',
  smile: '😀'
}

export function Confirmation({}){
  const navigation = useNavigation();
  const routes = useRoute();
  const{
    title,
    subtitle,
    buttonTitle,
    icon,
    nextScreen
  } = routes.params as Params;
  function handleStart (){
    navigation.navigate(nextScreen);
  }
  return(
   
    <KeyboardAvoidingView
     style={styles.container}
     behavior={Platform.OS ==="ios"? "padding" : "height"}
     >
       <SafeAreaView style={styles.container}>
            <View style={styles.content}> 
              <Text style={styles.emoji} > {emjis[icon]} </Text>
              <Text style={styles.title}>
                  {title}
              </Text>
              <Text style={styles.text}>  {subtitle}</Text>

              <View style={styles.button}>
                <Button title={buttonTitle} onPress={handleStart}/>
              </View>
            </View>
        </SafeAreaView>
    </KeyboardAvoidingView>
  )
}

