import { initializeApp } from 'firebase/app';
import { getDatabase} from 'firebase/database';

export const environment = {
  production: true,
  firebaseConfig : {
    apiKey: "AIzaSyDDJmQN-xZgdTnFDSnlGVxq7E9YDgJ3ahQ",
    authDomain: "prototipo2-c4926.firebaseapp.com",
    databaseURL: "https://prototipo2-c4926-default-rtdb.firebaseio.com",
    projectId: "prototipo2-c4926",
    storageBucket: "prototipo2-c4926.appspot.com",
    messagingSenderId: "248909440083",
    appId: "1:248909440083:web:ac7c1b50a7867d83f2d2a6",
    measurementId: "G-FKWMTNWVX2"
  },
  
};
export const firebaseApp =  initializeApp(environment.firebaseConfig);
export const database = getDatabase(firebaseApp);
