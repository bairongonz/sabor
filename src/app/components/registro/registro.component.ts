import { Component, NgModule, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
// @ts-ignore
export interface DocumentSnapshotExists<T> extends firebase.firestore.DocumentSnapshot {
  // ...
}



@Component({
  selector: 'app-registro',
  templateUrl: './registro.Component.html',
  styleUrls: ['./registro.component.scss'],
})


export class RegistroComponent implements OnInit {
  

  email: string = '';
  password: string = '';


  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
   
  }

  async register() {
    if (!this.email || !this.password) {
      this.errorMessage = 'Por favor, completa todos los campos.';
    } else {
    try {
    const result = await this.authService.signUp(this.email, this.password);
    if (result == true) {
      this.authService.signIn(this.email, this.password);
      this.router.navigate(['/lobby']);
    }}
    catch (error) {
      console.log('Error durante el registro:', error);
    }
  }
}
}