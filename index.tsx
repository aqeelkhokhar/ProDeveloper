/**
 * @format
 */
import "react-native-gesture-handler";

import {AppRegistry} from "react-native";
import App from "./App";
import { name as appName } from "./app.json";

import messaging from '@react-native-firebase/messaging';
import notifee, { AndroidImportance, EventType } from '@notifee/react-native';



    async function onMessageReceived(message: any) {

        console.log('received message', message);
          
      const channelId = await notifee.createChannel({
          id: 'default2',
          name: 'Default Channel2',
          sound: 'default',
        importance:AndroidImportance.HIGH
    });

    // Display a notification
    await notifee.displayNotification({
      title: message.notification.title,
      body: message.notification.body,
      android: {
        channelId,
        // pressAction is needed if you want the notification to open the app when pressed
        pressAction: {
          id: 'default',
        },
      },
    });
}

messaging().onMessage(onMessageReceived);
messaging().setBackgroundMessageHandler(onMessageReceived);

notifee.onBackgroundEvent(async ({ type, detail }) => {
        console.log(type,'received background', detail)
  const { notification, pressAction } = detail;

  // Check if the user pressed the "Mark as read" action
  if (type === EventType.ACTION_PRESS && pressAction.id === 'mark-as-read') {
    // Update external API
    // await fetch(`https://my-api.com/chat/${notification.data.chatId}/read`, {
    //   method: 'POST',
    // });

    // Remove the notification
    await notifee.cancelNotification(notification.id);
  }
});

   
    
AppRegistry.registerComponent(appName, () => App);
