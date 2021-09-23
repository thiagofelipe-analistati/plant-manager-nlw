import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../screens/Home';
import { UserIdentification } from '../screens/UserIdentification';
import { Confirmation } from '../screens/Confirmation';
import { PlantSelect } from '../screens/PlantSelect';
import { PlantSalve } from '../screens/PlantSalve';
import { MyPlants } from '../screens/MyPlants';
import TabRoutes from './tab.routes';

const {Navigator, Screen} = createStackNavigator();

export function AuthRoutes(){
    return(
        <Navigator
        screenOptions={{
            headerShown: false
          }}    
        >   
          <Screen name="Home"
            component={Home } 
          />
          <Screen name="UserIdentification"
            component={UserIdentification } 
          />
          <Screen name="Confirmation"
            component={Confirmation } 
          />
          <Screen name="PlantSelect"
            component={TabRoutes } 
          /> 
          <Screen name="PlantSalve"
          component={PlantSalve} 
          />
          <Screen name="MyPlants"
          component={TabRoutes} 
          />
      </Navigator>
    )

}