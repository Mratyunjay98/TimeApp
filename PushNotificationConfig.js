import * as Notifications from 'expo-notifications';
import { Platform } from 'react-native';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export const scheduleNotification = async (message, seconds) => {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "Reminder",
      body: message,
    },
    trigger: {
      seconds: seconds,
    },
  });
};
