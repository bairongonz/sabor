import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicses',
  templateUrl: './inicses.component.html',
  styleUrls: ['./inicses.component.scss'],
})
export class InicsesComponent  implements OnInit {
  // Inyectamos el servicio AuthService en el constructor del componente
  constructor(private authService: AuthService, private router:Router) {}

  password: string = '';

  // Mensaje de error
  errorMessage: string = '';

  ngOnInit():void {
    // pa poner cosas al iniciar
  }
  email: string = '';
  async Login() {
    const result = await this.authService.signIn(this.email, this.password);
    if (result!== true){
      this.errorMessage = 'error con usuario o contraseña, intente nuevamente';
      // no
    } else {
      // si
      this.router.navigate(['/lobby']);
    }
  }  
}

