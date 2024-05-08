import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import HomeScreen from "../HomesScreen";
import ProfileScreen from "../ProfileScreen";
import SettingScreen from "../SettingScreen";
import Icon from "react-native-vector-icons/FontAwesome";

const Tab = createBottomTabNavigator();

function TabsScreen() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    headerShown: false,

                    tabBarIcon: ({color, size}) => (
                        <Icon name="home" size={30} color="#51aff7" />
                    ),
                }}
            />
            <Tab.Screen
                name="Setting"
                component={SettingScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({color, size}) => (
                        <Icon name="gear" size={30} color="#51aff7" />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({color, size}) => (
                        <Icon name="user" size={30} color="#51aff7" />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

export default TabsScreen;
