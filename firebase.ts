import {initializeApp} from "@firebase/app";
import {getFirestore} from "@firebase/firestore";
import {getAnalytics} from "@firebase/analytics";

const firebaseConfig = {
    // apiKey: "AIzaSyA1F3nDgc2w0RbQcbRmCjoKijMhlByyCCk",
    // authDomain: "freelance-2575a.firebaseapp.com",
    // projectId: "freelance-2575a",
    // storageBucket: "freelance-2575a.appspot.com",
    // messagingSenderId: "619228709903",
    // appId: "1:619228709903:web:2893be0be667682e6c4f7a",
    // measurementId: "G-FG9ED533Z4"
    apiKey: process.env["API_KEY"],
    authDomain: process.env["AUTH_DOMAIN"],
    projectId: process.env["PROJECT_ID"],
    storageBucket: process.env["STORAGE_BUCKET"],
    messagingSenderId: process.env["MESSAGING_SENDER_ID"],
    appId: process.env["APP_ID"],
    measurementId: process.env["MEASUREMENT_ID"]
};

export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore();