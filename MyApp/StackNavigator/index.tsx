import * as React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import DrawerScreen from "../DrawerNavigator";
import NotificationScreen from "../NotificationScreen";
import LoginScreen from "../SingInScreen";
import RegistrationScreen from "../RegisterScreen";
const Stack = createNativeStackNavigator();

function StackScreen() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="drawer">
                <Stack.Screen
                    name="drawer"
                    component={DrawerScreen}
                    options={{headerShown: false, }}
                />
                 <Stack.Screen
                    name="Notification"
                    component={NotificationScreen}
                    options={{ headerBackTitleVisible: false }}
                />
                <Stack.Screen
                    name="Login"
                    component={LoginScreen}
                />
                <Stack.Screen name="Registration" component={RegistrationScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default StackScreen;
