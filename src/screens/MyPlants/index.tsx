import React, { useEffect, useState } from 'react'
import { SafeAreaView, View, Image, Text, FlatList} from 'react-native'
import { Header } from '../../componets/Header';
import {styles} from './styles'
import waterdrop from '../../assets/waterdrop.png';
import { LoadPLant, PlantProps } from '../../libs/storage';
import { formatDistance } from 'date-fns';
import {pt} from 'date-fns/locale'
import { PlantCardSecundary } from '../../componets/PlantCardSecundary';

export function MyPlants (){
    const [myPlants, setMyPlants]  = useState<PlantProps[]>([]);
    const [loading, setLoading] = useState(true);
    const [nextWaterd, setNextWaterd] = useState<string>();

    useEffect(()=>{
        async function loadStorageData() {
            const plantsStoareged = await LoadPLant();
            const nextTime = formatDistance(
                new Date(plantsStoareged[0].dateTimeNotification).getTime(), 
                new Date().getTime(),
                { locale: pt }
            );
            setNextWaterd(
                `Não esqueça de regar a ${plantsStoareged[0].name} às ${nextTime}`
            )
            setMyPlants(plantsStoareged);
            setLoading(false);
        }

        loadStorageData();
    })

    return (
        <SafeAreaView style={styles.container}>
            <Header urlImage="https://github.com/thiagofelipe-analistati.png"/>
            <View style={styles.spotlight}>
                <Image 
                 source={waterdrop} 
                 style={styles.spotlightImage}
                />
                <Text   style={styles.spotlightText} >
                    {nextWaterd}
                </Text>
            </View>
                <View style={styles.plants}>
                    <Text style={styles.plantsTitle}>
                        Proximas Regadas
                    </Text>
                    <FlatList 
                        data={myPlants}
                        keyExtractor={(item) => String(item.id)}
                        renderItem={({item}) =>(
                                <PlantCardSecundary data={item} />
                        )}
                        showsVerticalScrollIndicator={false}
                        
                    />
                </View>
           
        </SafeAreaView>
    );
}