import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import HomeScreen from "../HomesScreen";
import ProfileScreen from "../ProfileScreen";
import SettingScreen from "../SettingScreen";
import Icon from "react-native-vector-icons/FontAwesome";
import {createMaterialBottomTabNavigator} from "react-native-paper/react-navigation";
import {useTheme} from "../../ThemeContext";

const Tab = createMaterialBottomTabNavigator();

function TabsScreen() {
    const {theme} = useTheme();
    return (
        <Tab.Navigator
            activeColor="#f0edf6"
            inactiveColor="#3e2465"
            barStyle={{backgroundColor: theme.colors.primary}}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: () => (
                        <Icon
                            name="home"
                            size={30}
                            color={theme.colors.iconsColor}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Setting"
                component={SettingScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: () => (
                        <Icon
                            name="gear"
                            size={30}
                            color={theme.colors.iconsColor}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: () => (
                        <Icon
                            name="user"
                            size={30}
                            color={theme.colors.iconsColor}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

export default TabsScreen;
