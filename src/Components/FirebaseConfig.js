import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/analytics";
// var firebaseConfig = {
//   apiKey: "AIzaSyCLUZOG5lDa1nF-X1l0qJp8NSMNuaUUrHI",
//   authDomain: "library-manager-21.firebaseapp.com",
//   projectId: "library-manager-21",
//   storageBucket: "library-manager-21.appspot.com",
//   messagingSenderId: "954395966012",
//   appId: "1:954395966012:web:039a6f537a1da3885e2139",
//   measurementId: "G-4HYVKNJYN2",
// };

const firebaseConfig = {
  apiKey: "AIzaSyDaALvq-xmTbfoMvvbtY3dJ3hGu5hXUB58",
  authDomain: "cassio-c068d.firebaseapp.com",
  projectId: "cassio-c068d",
  storageBucket: "cassio-c068d.appspot.com",
  messagingSenderId: "898071762503",
  appId: "1:898071762503:web:4589259afb368745e48362",
  measurementId: "G-SM2CXS2FKM"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const analytics = firebase.analytics();