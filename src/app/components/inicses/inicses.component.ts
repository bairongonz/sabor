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

  constructor(private authService: AuthService, private router:Router) {}

  password: string = '';

  // Mensaje de error
  errorMessage: string = '';

  ngOnInit():void {
    get(nodoRef)
  .then((snapshot) => {
    if (snapshot.exists()) {
      console.log('El nodo ya existe, no se creará uno nuevo.');
    } else {

      const receta = {
        receta: {
        nombre: 'Papas fritas chilenas',
        ingredientes: '1 papa',
        preparacion: '(opcional) pelar las papas, cortar las papas en formas delgadas, freir en aceite caliente, sazonar con sal al gusto, servir',}

      };

      set(nodoRef, receta)
        .then(() => {
          console.log('Nodo creado exitosamente.');
        })
        .catch((error) => {
          console.error('Error al crear el nodo:', error);
        });
    }
  })
  .catch((error) => {
    console.error('Error al verificar el nodo:', error);
  });

  }
  email: string = '';
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

