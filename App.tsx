import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { useFonts, Jost_400Regular, Jost_600SemiBold} from '@expo-google-fonts/jost'
import AppLoading from 'expo-app-loading'
import { Routes } from './src/routes';
import { Home } from './src/screens/Home';

export default function App() {
  const [fontsLoaded] = useFonts({
    Jost_600SemiBold,
    Jost_400Regular
  })

  if(!fontsLoaded){
    return <AppLoading />
  }
  return (


      <Routes />

  );
}

