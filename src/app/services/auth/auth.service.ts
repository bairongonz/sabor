import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';  
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { DataService } from '../Data/data.service';

// @ts-ignore
export interface DocumentSnapshotExists<T> extends firebase.firestore.DocumentSnapshot {

}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated = new BehaviorSubject<boolean>(false);

  checkAuthentication(): boolean {
    return this.isAuthenticated.value;
  }
  getIsAuthenticated(): Observable<boolean> {
    return this.isAuthenticated.asObservable();
  }
  constructor(private afAuth: AngularFireAuth, private router: Router, private data : DataService ) {this.exist()}

  async signIn(email: string, password: string): Promise<boolean> {
    try {
      await this.afAuth.signInWithEmailAndPassword(email, password);
      this.isAuthenticated.next(true);
      console.log('exito')
      console.log(this.isAuthenticated.value)
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
            console.error("Error al registrar:", error.message);
            return error.message;  // Devolver el mensaje de error
        } else {
            console.error("Error desconocido al registrar:", error);
            return "Error desconocido al intentar registrar.";
        }
    }
}

async signOut(): Promise<void> {
  await this.afAuth.signOut();
  this.isAuthenticated.next(false);
};


async exist(){
 try {
    const existe = await this.data.getItem('user');
    console.log('funciona biennn');
    this.signIn(existe[0], existe[1]);
} catch (error) {
  console.log('Errorrrr');
};
}
}