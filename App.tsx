import React, { useEffect, useRef } from "react";
import messaging from '@react-native-firebase/messaging';
import analytics, { firebase } from '@react-native-firebase/analytics';
import {NavigationContainer} from "@react-navigation/native";
import StackScreen from "./MyApp/StackNavigator";
import { Provider as PaperProvider } from 'react-native-paper';
import { ThemeProvider, useTheme } from './ThemeContext';


const ThemeProviderWrapper = ({ children }) => {
  const { theme } = useTheme();

  return (
    <PaperProvider theme={theme}>
      {children}
    </PaperProvider>
  );
};

function App() {
     const routeNameRef = useRef();
     const navigationRef = useRef();

    async function onAppBootstrap() {
    await messaging().registerDeviceForRemoteMessages();
        const token = await messaging().getToken();
        console.log('token fmc token', token);
    }


    
    useEffect( () => {
        async function fetchToken() {
            await onAppBootstrap();
            const appInstanceId = await analytics().getAppInstanceId();
            await firebase.analytics().setAnalyticsCollectionEnabled(true);
            console.log('appInstanceId', appInstanceId);
       }
        fetchToken();
    }, [])
    


  return (
    <ThemeProvider>
      <ThemeProviderWrapper>
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        routeNameRef.current = navigationRef.current.getCurrentRoute().name;
      }}
      onStateChange={async () => {
        const previousRouteName = routeNameRef.current;
        const currentRouteName = navigationRef.current.getCurrentRoute().name;

        if (previousRouteName !== currentRouteName) {
          await analytics().logScreenView({
            screen_name: currentRouteName,
            screen_class: currentRouteName,
          });
        }
        routeNameRef.current = currentRouteName;
      }}
    >

    <StackScreen/>
        </NavigationContainer>
        </ThemeProviderWrapper>
      </ThemeProvider>
  );
};



export default App;
