import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../screens/Home';
import { UserIdentification } from '../screens/UserIdentification';
import { Confirmation } from '../screens/Confirmation';
import { PlantSelect } from '../screens/PlantSelect';
import { PlantSalve } from '../screens/PlantSalve';

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
            component={PlantSelect } 
          /> 
          <Screen name="PlantSalve"
          component={PlantSalve} 
          />
      </Navigator>
    )

}