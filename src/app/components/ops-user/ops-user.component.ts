import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/services/auth/auth.service';
import { Observable, of } from 'rxjs';
import { DataService } from 'app/services/Data/data.service';

@Component({
  selector: 'app-ops-user',
  templateUrl: './ops-user.component.html',
  styleUrls: ['./ops-user.component.scss'],
})
export class OpsUserComponent  implements OnInit {
  // metodo para confirmar inicio de sesion
  logged$: Observable<boolean>;

  constructor(private authService: AuthService, private data: DataService) {
    // retorna True o False segun si se inició sesion, llama al AuthService
    this.logged$ = this.authService.getIsAuthenticated();
  }

  ngOnInit() {
  }

  // llama al AuthSService para cerrar sesion
  cerrarSesion(){
    this.authService.signOut()
    this.data.removeItem('user')
    console.log('borro bien ')
  }
}
