import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyCql3WejPAHHcghWycqGHEsWZlEZpH6I7k",
  authDomain: "watercooler-be436.firebaseapp.com",
  databaseURL: "https://watercooler-be436-default-rtdb.firebaseio.com",
  projectId: "watercooler-be436",
  storageBucket: "watercooler-be436.appspot.com",
  messagingSenderId: "272854258776",
  appId: "1:272854258776:web:779aeb179160242c53662d",
};

export const generateUserDocument = async (user, additionalData) => {
  if (!user) return;
  const userRef = firestore.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    const { email, firstName, lastName, company, location } = user;
    try {
      await userRef.set({
        firstName,
        lastName,
        email,
        company,
        location,
        ...additionalData, //additional data vs. company for Dashboard t-function
      });
    } catch (error) {
      console.error(
        "uh oh, there was an error in creating a user docuemnt",
        error
      );
    }
  }
  return getUserDocument(user.uid);
};
const getUserDocument = async (uid) => {
  if (!uid) return null;
  try {
    const userDocument = await firestore.doc(`users/${uid}`).get();
    return {
      uid,
      ...userDocument.data(),
    };
  } catch (error) {
    console.error("whoops couldn't fetch the user", error);
  }
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
