import {db} from './conf'
import { collection, addDoc, query, where, getDocs } from "firebase/firestore"; 

export const addData = async(collectionName, data) => await addDoc(collection(db, collectionName), data);

export const getData = async(collectionName, key, value) => {
    const q = query(collection(db, collectionName), where(key, "==", value));
    return await getDocs(q);
}; 