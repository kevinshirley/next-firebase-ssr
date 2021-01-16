import firebaseClient from "firebase/app";
import "firebase/auth";

/*

Copy/paste your *client-side* Firebase credentials below. 

To get these, go to the Firebase Console > open your project > Gear Icon >
Project Settings > General > Your apps. If you haven't created a web app
already, click the "</>" icon, name your app, and copy/paste the snippet.
Otherwise, go to Firebase SDK Snippet > click the "Config" radio button >
copy/paste.

*/
const CLIENT_CONFIG = {
  apiKey: "AIzaSyDvAurlu5s9EQDlPHdlUxCvguLweh7QBog",
  authDomain: "next-ssr-8a383.firebaseapp.com",
  databaseURL: "https://fir-nextjs-ssr.firebaseio.com",
  projectId: "next-ssr-8a383",
  storageBucket: "next-ssr-8a383.appspot.com",
  messagingSenderId: "925381500658",
  appId: "1:925381500658:web:e17e3acc79f8c675c17a6b",
};

if (typeof window !== "undefined" && !firebaseClient.apps.length) {
  firebaseClient.initializeApp(CLIENT_CONFIG);
  firebaseClient
    .auth()
    .setPersistence(firebaseClient.auth.Auth.Persistence.SESSION);
  (window as any).firebase = firebaseClient;
}

export { firebaseClient };
