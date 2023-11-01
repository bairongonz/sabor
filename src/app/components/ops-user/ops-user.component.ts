import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/services/auth/auth.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-ops-user',
  templateUrl: './ops-user.component.html',
  styleUrls: ['./ops-user.component.scss'],
})
export class OpsUserComponent  implements OnInit {
  logged$: Observable<boolean>;

  constructor(private authService: AuthService) {
    this.logged$ = this.authService.getIsAuthenticated();
  }

  ngOnInit() {
  }
  cerrarSesion(){
    this.authService.signOut()
  }
}
