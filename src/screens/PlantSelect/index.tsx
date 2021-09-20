import React, { useEffect, useState } from 'react';
import {View, Text , KeyboardAvoidingView, Platform,  SafeAreaView, FlatList, ActivityIndicator} from 'react-native';
import {styles} from './styles'
import { useNavigation } from '@react-navigation/native';
import { Header } from '../../componets/Header';
import { EnviromentButton } from '../../componets/EnviromentButton';
import api from '../../service/api';
import { PlantCardPrimary } from '../../componets/PlantCardPrimary';
import { Load } from '../../componets/Load.tsx';
import colors from '../../styles/colors';

interface EnviromentProps {
  key: string;
  title: string;
}
interface PlantsProps {
    id: string;
    name: string;
    about:  string;
    water_tips:  string;
    photo:  string;
    environments: [ string];
    frequency: {
      times: number;
      repeat_every:  string;
  }
}
export function PlantSelect({}){
  const  [enviroments, setEnviroments] = useState<EnviromentProps[]>([]);
  const  [plants, setPlants] = useState<PlantsProps[]>([]);
  const  [filteredPlants, setFilteredPlants] = useState<PlantsProps[]>([]);
  const  [enviromentSelected, SetEnviromentSelected] = useState('all');
  const [loadign, setLoading] = useState(true);

  const [page, setPage] = useState(1);
  const [loadignMore, setLoadingMore] = useState(false);
  const [loadAll, setLoadeadAll] = useState(false);

  async function fechPlants() {
    const {data}  = await api.get(`plants?_sort=nsame&order=asc&_page=${page}&_limit=8`);
    if(!data)
      return setLoading(true)

    if(page > 1){
      setPlants(oldValue => [...oldValue, ...data])
      setFilteredPlants(oldValue => [...oldValue, ...data])
    } else{
      setPlants(data)
      setFilteredPlants(data);
    }
    setLoading(false)
    setLoadingMore(false)
  }
  function handleEnrivomentSelected(environment: string) {
    SetEnviromentSelected(environment);
    if (environment === 'all') 
    return setFilteredPlants(plants);
    const filtered = plants.filter(plant => 
    plant.environments.includes(environment)
    );
    setFilteredPlants(filtered);
  }

  function handleFetchMore(distance:number) {
    if(distance < 1)
      return;
    setLoadingMore(true);
    setPage(oldvalue => oldvalue + 1)
    fechPlants();
  }
  useEffect(()=>{
        async function fechEnviroment() {
        const {data}  = await api.get('plants_environments?_sort=title&order=asc');
        setEnviroments([
          {
            key: 'all',
            title: 'Todos'
          },
          ...data
        ])
      }
      fechEnviroment() ;
  },[])

  useEffect(()=>{
  fechPlants() ;
},[])

  if(loadign)
  return <Load />
  return(
   
    <KeyboardAvoidingView
     style={styles.container}
     behavior={Platform.OS ==="ios"? "padding" : "height"}
     >
       <SafeAreaView style={styles.container}>
         <View style={styles.content}> 
        <Header urlImage="https://github.com/thiagofelipe-analistati.png"/>
        <Text style={styles.title}> Em qual ambiente </Text>
        <Text style={styles.subtitle}> você quer colocar sua planta? </Text> 
        </View>
        <View> 
          <FlatList 
            data={enviroments}
            renderItem={({item})=>(
              <EnviromentButton 
                title={item.title}
                active={item.key === enviromentSelected }
                onPress={() => handleEnrivomentSelected(item.key)}
              
                />
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.enviromentList}
          />
        </View>  
        <View style={styles.plants}> 
          <FlatList 
            data={filteredPlants}
            renderItem={({item})=>(
              <PlantCardPrimary data={item}  />
            )}
            showsVerticalScrollIndicator={false}
            numColumns={2}
            onEndReachedThreshold={0.1}
            onEndReached={({distanceFromEnd}) => 
              handleFetchMore(distanceFromEnd)}
              ListFooterComponent={
                loadignMore
                ?
                <ActivityIndicator color={colors.green} /> 
                : 
                <Text> </Text>
              }
          />
        </View>  
      </SafeAreaView>
    </KeyboardAvoidingView>
  )
}

