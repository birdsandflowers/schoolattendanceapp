import  firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCpsH5wm_K6Z1n8SRx6wbitMshtC1Swnuw",
  authDomain: "attendancescholapp.firebaseapp.com",
  databaseURL: "https://attendancescholapp-default-rtdb.firebaseio.com",
  projectId: "attendancescholapp",
  storageBucket: "attendancescholapp.appspot.com",
  messagingSenderId: "937870985215",
  appId: "1:937870985215:web:3d6a4886a807c0379a09ca"
};
 firebase.initializeApp(firebaseConfig);
  export default firebase.database()
 

  