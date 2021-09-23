import React, { useRef, useState } from 'react'
import { View, Text, Image, SafeAreaView, TouchableOpacity, Platform, Alert} from 'react-native'
import {styles} from './styles'
import {SvgFromUri} from 'react-native-svg'
import waterdrop from '../../assets/waterdrop.png';
import { Button } from '../../componets/button';
import { useNavigation, useRoute } from '@react-navigation/core';
import DateTimepicker, {Event} from '@react-native-community/datetimepicker';
import { format, isBefore } from 'date-fns';
import { PlantProps, savePLant } from '../../libs/storage';

interface Params {
    plant: PlantProps
} 
export function PlantSalve (){
    const route = useRoute();
    const navigation = useNavigation();
    const {plant} = route.params as Params;
    const [selectedDateTime, setSelectedDateTime] = useState(new Date()); 
    const [showDatePicker, setShowDatePicker] = useState(Platform.OS =='ios'); 

    function handleChangeTime(event: Event, dateTime: Date | undefined){
        if(Platform.OS === 'android'){
            setShowDatePicker(oldState => !oldState)
        }
        if(dateTime && isBefore(dateTime, new Date()) ){
            setSelectedDateTime(new Date());
            return Alert.alert('Escolha uma hora no futuro! ⏰')
        }
        if(dateTime){
            setSelectedDateTime(dateTime)
        }
    }
    function handleOpenDateTimePickerForAndroid(){
        setShowDatePicker(oldState => !oldState);
    }
    async function handleSave (){
        try{
            await savePLant ({
                ...plant,
                dateTimeNotification:selectedDateTime
            });
            navigation.navigate('Confirmation', {
                title: 'Tudo certo',
                subtitle: 'Fique tranquilo que sempre vamos lembrar você de cuidar da sua plantinha com bastante amor.',
                buttonTitle: 'Muito obrigado :D',
                icon: 'hug',
                nextScreen: 'MyPlants',
              });

        }catch {
            Alert.alert("Não foi Possível salvar.😥")
        }
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.plantInfo}>
                <SvgFromUri
                    uri={plant.photo}
                    width={150}
                    height={150}
                />
                <Text style={styles.plantName} >
                    {plant.name}
                </Text>
                <Text style={styles.plantAbout}>
                   {plant.about}
                </Text>
            </View>
            <View  style={styles.controller}>
                <View style={styles.tipContainer}>
                    <Image 
                        source={waterdrop}
                        style={styles.tipImage}
                    />
                    <Text style={styles.tipText}>
                    {plant.water_tips}
                    </Text>
                </View>
                <Text style={styles.alertLabel}>
                    Escolha o melhor horário para ser lembrado 
                </Text>
                { showDatePicker  && (
                    <DateTimepicker 
                        value={selectedDateTime}
                        mode="time"
                        display="spinner"
                        onChange={handleChangeTime}
                    />
                )}
                {
                    Platform.OS=== 'android' && (
                        <TouchableOpacity 
                            onPress={handleOpenDateTimePickerForAndroid} 
                            style={styles.dateTimePickerButton}

                        >
                            <Text style={styles.dateTimePickerText}>
                                {`Mudar ${format(selectedDateTime, 'HH:mm')}`}
                            </Text>
                        </TouchableOpacity>
                    )
                }
                <Button
                    title="Cadastrar planta"
                    onPress={handleSave}
                />
            </View>
        </SafeAreaView>
    );
}