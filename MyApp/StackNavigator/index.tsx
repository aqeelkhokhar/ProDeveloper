import * as React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import DrawerScreen from "../DrawerNavigator";
import NotificationScreen from "../NotificationScreen";
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
                    name="Notification"
                    component={NotificationScreen}
                    options={{headerBackTitleVisible: false}}
                />
            </Stack.Navigator>
        </>
    );
}

export default StackScreen;
