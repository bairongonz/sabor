import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';


// Creamos una clase llamada Login
class Login {
  // Inyectamos el servicio AuthService en el constructor
  constructor(private authService: AuthService) {}

  // Método para manejar el inicio de sesión de manera asíncrona
  async onLogin(email: string, password: string) {
    // Llamamos al método signIn del servicio AuthService
    const result = await this.authService.signIn(email, password);
    if (result) {
      // Código a ejecutar en caso de inicio de sesión exitoso
    } else {
      // Código para manejar excepciones o inicio de sesión no exitoso
    }
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  // Inyectamos el servicio AuthService en el constructor del componente
  constructor(private authService: AuthService) {}

  ngOnInit() {}
}
