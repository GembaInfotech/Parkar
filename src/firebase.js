import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
    apiKey: "AIzaSyDQ_ZGyQd_hWAiPg-oAzSW9_5t4RaEyAhQ",
    authDomain: "parking-8e069.firebaseapp.com",
    projectId: "parking-8e069",
    storageBucket: "parking-8e069.firebasestorage.app",
    messagingSenderId: "260757557169",
    appId: "1:260757557169:web:b8de231d7f8374cdbef790",
    measurementId: "G-Q9YY220BEB"
  };
const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);


export const requestFCMToken = async (userId) => {
  try {
    console.log("userId", userId);
    
    const token = await getToken(messaging, { vapidKey: "BLxOUOhsE_J51pnw3qPOmvDYlt8K5VGOiIsNFeMO7xZ12LnNdpwo5llqKzV46F6UmPY-o4Qn-pMhDoY8fBPONg8" });
    if (token) {
      console.log("FCM Token:", token);
      await saveTokenToBackend(userId, token);
    }
  } catch (error) {
    console.error("Error getting FCM token:", error);
  }
};

export const saveTokenToBackend = async (userId, fcmToken) => {
  console.log("userId", userId, "fcmToken" , fcmToken);
  const response = await fetch("/notification/save-fcm-token", {    
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userId, fcmToken }),
  });

  if (!response.ok) {
    console.error("Failed to save token:", await response.text());
  }
};

export const listenForMessages = () => {
  onMessage(messaging, (payload) => {
    console.log("Message received:", payload);
    // Handle foreground notification (show alert or toast)
    alert(`Notification: ${payload.notification.title}`);
  });
};



