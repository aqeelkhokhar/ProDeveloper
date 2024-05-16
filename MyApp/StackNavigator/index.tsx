import * as React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import DrawerScreen from "../DrawerNavigator";
import RegistrationScreen from "../RegistrationScreen";
import SignInScreen from "../SignInScreen";
const Stack = createNativeStackNavigator();

function StackScreen() {
    return (
        <>
            <Stack.Navigator>
                <Stack.Screen
                    name="drawer"
                    component={DrawerScreen}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="Registration"
                    component={RegistrationScreen}
                    options={{headerBackTitleVisible: false}}
                />
                <Stack.Screen
                    name="SingIn"
                    component={SignInScreen}
                    options={{headerBackTitleVisible: false}}
                />
            </Stack.Navigator>
        </>
    );
}

export default StackScreen;
