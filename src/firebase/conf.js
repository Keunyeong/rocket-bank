// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { firebaseConf } from '../env/env'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: firebaseConf['apiKey'],
  authDomain: firebaseConf['authDomain'],
  projectId: firebaseConf['projectId'],
  storageBucket: firebaseConf['storageBucket'],
  messagingSenderId: firebaseConf['messagingSenderId'],
  appId: firebaseConf['appId'],
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); // Firestore 데이터베이스를 사용할 것이기 때문에 Firestore 함수도 import 함.