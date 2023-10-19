import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth) {}

  async signIn(email: string, password: string) {
    try {
      await this.afAuth.signInWithEmailAndPassword(email, password);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  // Aquí puedes añadir más métodos como signUp, signOut, etc.
}