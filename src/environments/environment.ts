// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set } from 'firebase/database';
export const environment = {
  production: false,
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


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
