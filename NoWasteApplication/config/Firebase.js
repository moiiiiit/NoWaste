import firebase from 'firebase'
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyChl_PRFv8kUJYr3Qrm4xB9FRPb31yaphY",
    authDomain: "no-waste-grocery.firebaseapp.com",
    databaseURL: "https://no-waste-grocery.firebaseio.com",
    projectId: "no-waste-grocery",
    storageBucket: "no-waste-grocery.appspot.com",
    messagingSenderId: "251399207960",
    appId: "1:251399207960:web:684e6974c34d5e33d9176d"
}

let Firebase = firebase.initializeApp(firebaseConfig)

export default Firebase