import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../screens/Home';
import { UserIdentification } from '../screens/UserIdentification';
import { Confirmation } from '../screens/Confirmation';
import { PlantSelect } from '../screens/PlantSelect';




const {Navigator, Screen} = createStackNavigator();

export function AuthRoutes(){
    return(
        <Navigator
        screenOptions={{
            headerShown: false
          }}
        
        >   

<Screen name="PlantSelect"
              component={PlantSelect } 
            />
           <Screen name="Home"
              component={Home } 
            />
            <Screen name="UserIdentification"
              component={UserIdentification } 
            />
            <Screen name="Confirmation"
              component={Confirmation } 
            />
        


            
        </Navigator>
    )

}