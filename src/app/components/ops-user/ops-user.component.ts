import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/services/auth/auth.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-ops-user',
  templateUrl: './ops-user.component.html',
  styleUrls: ['./ops-user.component.scss'],
})
export class OpsUserComponent  implements OnInit {
  // metodo para confirmar inicio de sesion
  logged$: Observable<boolean>;

  constructor(private authService: AuthService) {
    // retorna True o False segun si se inició sesion, llama al AuthService
    this.logged$ = this.authService.getIsAuthenticated();
  }

  ngOnInit() {
  }

  // llama al AuthSService para cerrar sesion
  cerrarSesion(){
    this.authService.signOut()
  }
}
