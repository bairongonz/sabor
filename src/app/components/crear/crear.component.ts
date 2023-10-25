import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { getDatabase, ref, push} from 'firebase/database';
import { firebaseApp } from 'environments/environment';
import { Router } from '@angular/router';

const database = getDatabase(firebaseApp);
const recetasRef = ref(database, 'recetas');

class Receta {
  nombre: string = '';
  ingredientes: string = '';
  preparacion: string = '';
}
@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss'],
})
export class CrearComponent  implements OnInit {

  constructor(private router:Router) { }
  nombre: string = '';
  ingredientes: string = '';
  receta : string = '';

  addRecipe() {
    // Comprobar si se han proporcionado los valores requeridos
    if (!this.nombre || !this.ingredientes || !this.receta) {
      // Manejar un error, por ejemplo, mostrar un mensaje al usuario
      console.error('Por favor, complete todos los campos de la receta.');
      return;
    }

    // Crear un objeto con los datos de la receta
    const nuevaReceta: Receta = {
      nombre: this.nombre,
      ingredientes: this.ingredientes, // Convierte a número si es necesario
      preparacion: this.receta,
    };

    // Agregar la nueva receta a la base de datos
    push(recetasRef, nuevaReceta)
      .then(() => {
        console.log('Receta agregada exitosamente.');
        this.router.navigate(['/lobby']);
        
        // Limpiar los campos del formulario después de agregar la receta
        this.nombre = '';
        this.ingredientes = '';
        this.receta = '';
      })
      .catch((error) => {
        console.error('Error al agregar la receta:', error);
      });
  }
  ngOnInit() {}
}
