import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';  // Importación del módulo de autenticación de AngularFire

// @ts-ignore
export interface DocumentSnapshotExists<T> extends firebase.firestore.DocumentSnapshot {
  // ...
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth) {}  // Inyectamos AngularFireAuth

  async signIn(email: string, password: string): Promise<boolean> {
    try {
      await this.afAuth.signInWithEmailAndPassword(email, password); // Utilizamos el método de AngularFireAuth
      return true;
    } catch (error) {
      console.error("Error al iniciar sesión: ", error);
      return false;
    }
  }

  async signUp(email: string, password: string): Promise<any> {
    try {
        await this.afAuth.createUserWithEmailAndPassword(email, password);
        return true;
    } catch (error) {
        if (error !== null && typeof error === 'object' && 'message' in error) {
            console.error("Error al registrar:", error.message);  // Mostrar el mensaje de error en consola
            return error.message;  // Devolver el mensaje de error
        } else {
            console.error("Error desconocido al registrar:", error);
            return "Error desconocido al intentar registrar.";
        }
    }
}

  // Aquí puedes añadir más métodos como signOut, etc.
}

