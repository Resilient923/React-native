//import * as firebase from 'firebase/app';
import firebase from 'firebase/app';

// 사용할 파이어베이스 서비스 주석을 해제한다
//import "firebase/auth";
import "firebase/database";
//import "firebase/firestore";
//import "firebase/functions";
import "firebase/storage";

// Initialize Firebase
//파이어베이스 사이트에서 봤던 연결정보를 여기에 가져온다
const firebaseConfig = {
    apiKey: "AIzaSyDIyFkI_F0QqXy4fuUTcEU06ANMcMTdfkE",
    authDomain: "reactnative-e015b.firebaseapp.com",
    projectId: "reactnative-e015b",
    storageBucket: "reactnative-e015b.appspot.com",
    messagingSenderId: "30085211711",
    appId: "1:30085211711:web:88521dffe34b9bb55fba8a",
    measurementId: "G-3KW31CTSWJ"
  };

//사용 방법입니다. 
//파이어베이스 연결에 혹시 오류가 있을 경우를 대비한 코드로 알아두면 된다.
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export const firebase_db = firebase.database()