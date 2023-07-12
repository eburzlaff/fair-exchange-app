import { useEffect } from "react";
import * as Notifications from 'expo-notifications';
import * as Permissions from "expo-permissions";

import expoPushTokensApi from "../api/expoPushTokens";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

const useNotifications = (notificationsListener) => {
  const registerForPushNotifications = async () => {
    try {
      
      const permission = await Notifications.requestPermissionsAsync();
      if (!permission.granted) return;

      const token = await Notifications.getExpoPushTokenAsync();
      console.log(token.data);
      expoPushTokensApi.register(token.data);
    } catch (error) {
      console.log("Error getting notifications token", error);
    }
  };

  useEffect(() => {
    registerForPushNotifications();
    if (notificationsListener)
      Notifications.addNotificationReceivedListener(notificationsListener);
  }, []);
};

export default useNotifications;






// export default useNotifications = (notificationListener) => {
//   useEffect(() => {
//     // Call this function as soon as this hook is invoked
//     registerForPushNotifications();

//     // Check to see if there any listeners passed by the consumer of this hook
//     // A listener will be added to the notification pop up only if there is a notification listener
//     if (notificationListener) Notifications.addListener(notificationListener);
//   }, []);

//   const registerForPushNotifications = async () => {
//     try {

//       // Get permission 
//       const permission = await Notifications.requestPermissionsAsync();
      // const { granted } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
//       // const permission = await Permissions.askAsync(Permissions.NOTIFICATIONS);
//       // Dont proceed to get the token if permission not granted
//       if(!permission.granted) return;

//       // Get push token notification
//       // token = (await Notifications.getExpoPushTokenAsync({
//       //   projectId: 'f4a0377d-adb1-4d56-ae85-ed525a5097fb',
//       // })).data;
//       const token = (await Notifications.getExpoPushTokenAsync()).data;
//       console.log(token);

//       // Call the api endpoint in the server to store the device/app install token
//       expoPushTokensApi.register(token);
//     } catch (error) {
//       console.log("Error getting a push token", error);
//     }
//   };
// };
