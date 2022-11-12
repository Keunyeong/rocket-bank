import {db} from './conf'
import { collection, addDoc, getDocs } from "firebase/firestore"; 

export const addData = async(collectionName, data) => await addDoc(collection(db, collectionName), data);

export const getData = async(collectionName) => {
    const q = collection(db, collectionName);
    return await getDocs(q);
}; 