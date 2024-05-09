import React, { useEffect } from "react";
import StackScreen from "./MyApp/StackNavigator";
import messaging from '@react-native-firebase/messaging';


function App() {

    async function onAppBootstrap() {
    await messaging().registerDeviceForRemoteMessages();
        const token = await messaging().getToken();
        console.log('token fmc token', token);
    }


    
    useEffect( () => {
        async function fetchToken() {
           await onAppBootstrap();
       }
        fetchToken();
    }, [])
    

    return <StackScreen />;
}

export default App;
