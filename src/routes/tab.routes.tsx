import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import colors from "../styles/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { Platform } from "react-native";
import { MyPlants } from "../screens/MyPlants";
import { PlantSelect } from "../screens/PlantSelect";

const AppTab = createBottomTabNavigator();

const TabRoutes = () => {
    return (
        <AppTab.Navigator
        screenOptions={{
            headerShown: false
          }}   
                TabBarOptions={{
                activeBackgroundColor: colors.green,
                inactiveBackgroundColor: colors.heading,
                labelPosition: 'beside-icon',
                style: {
                    paddingVertical: Platform.OS == 'ios' ? 20 : 0,
                    height: 88
                },
            }}>
            <AppTab.Screen
                name="Nova Planta"
                component={PlantSelect}
                options={{
                    tabBarIcon: (({ size, color }) => (
                        <MaterialIcons
                            name="add-circle-outline"
                            size={size}
                            color={color}
                        />
                    ))
                }}
            />
            <AppTab.Screen
                name="Minhas Plantas"
                component={MyPlants}
                options={{
                    tabBarIcon: (({ size, color }) => (
                        <MaterialIcons
                            name="format-list-bulleted"
                            size={size}
                            color={color}
                        />
                    ))
                }}
            />
        </AppTab.Navigator>
    )
}

export default TabRoutes;