import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import colors from '../styles/colors';
import { Home } from '../screens/Home';
import { UserIdentification } from '../screens/UserIdentification';
import { Confirmation } from '../screens/Confirmation';



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
        </Navigator>
    )

}