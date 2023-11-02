import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';
import { getDatabase, ref, set, get} from 'firebase/database';
import { firebaseApp } from 'environments/environment';
const database = getDatabase(firebaseApp);
const nodoRef = ref(database, 'recetas');


@Component({
  selector: 'app-inicses',
  templateUrl: './inicses.component.html',
  styleUrls: ['./inicses.component.scss'],
})
export class InicsesComponent  implements OnInit {
  
  password: string = '';
  errorMessage: string = '';
  email: string = '';

  constructor(private authService: AuthService, private router:Router) {}
  ngOnInit() {}

  async Login() {
    const result = await this.authService.signIn(this.email, this.password);
    if (result!== true){
      this.errorMessage = 'error con usuario o contraseña, intente nuevamente';
    } else {
      console.log(this.authService.checkAuthentication())
      this.router.navigate(['/lobby']);
    }
  }  
}

