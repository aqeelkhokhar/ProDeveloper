import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import HomeScreen from "../HomesScreen";
import ProfileScreen from "../ProfileScreen";
import SettingScreen from "../SettingScreen";
import Icon from "react-native-vector-icons/FontAwesome";
import AntIcons from "react-native-vector-icons/AntDesign";
import EntypIcons from "react-native-vector-icons/Entypo"
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';

const Tab = createMaterialBottomTabNavigator();

function TabsScreen() {
    return (
        <Tab.Navigator activeColor="#f0edf6"
            inactiveColor="#3e2465"
            barStyle={{ backgroundColor: '#f0c7ea' }}>
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Active Todos',
                    tabBarIcon: () => (
                        <AntIcons name="bars" size={30} color="#51aff7" />
                    ),
                }}
            />
            <Tab.Screen
                name="Setting"
                component={SettingScreen}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Completed',
                    tabBarIcon: () => (
                        <AntIcons name="checksquareo" size={30} color="#51aff7" />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Users',
                    tabBarIcon: () => (
                        <EntypIcons name="add-user" size={30} color="#51aff7" />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

export default TabsScreen;
