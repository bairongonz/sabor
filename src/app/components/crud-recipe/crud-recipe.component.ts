import { Component, OnInit } from '@angular/core';
import { getDatabase, ref, set, get, update, remove } from 'firebase/database';
import { firebaseApp } from 'environments/environment';
import { Observable } from 'rxjs';
import {AngularFirestore} from '@angular/fire/compat/firestore';

const database = getDatabase(firebaseApp);
const nodoRef = ref(database, 'recetas');

class Receta {
  id: string = '';
  name: string = '';
  ingredientes: number = 0;
  receta: string = '';
}

@Component({
  selector: 'app-crud-recipe',
  templateUrl: './crud-recipe.component.html',
  styleUrls: ['./crud-recipe.component.scss'],
})
export class CrudRecipeComponent  implements OnInit {

  constructor(private firestore: AngularFirestore) { }

  ngOnInit() {
    get(nodoRef)
  .then((snapshot) => {
    if (snapshot.exists()) {
      console.log('El nodo ya existe, no se creará uno nuevo.');
    } else {

      const receta = {
        nombre: 'Nombre de la receta',
        ingredientes: 'Lista de ingredientes',
        preparacion: 'Instrucciones de preparación',

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
  getRecipe(ingredientes: string): Observable<Receta[]> {
    return this.firestore.collection<Receta>('products', ref => ref.where('ingredientes', '==', ingredientes))
    .valueChanges({ idField: 'id' });
  }
  ListRecipes(): Observable<Receta[]> {
    return this.firestore.collection<Receta>('products').valueChanges({ idField: 'id' });
  }

nombre: string = '';
receta: string = '';
ingredientes: string = '';

  AddRecipe(){
    const   Receta = {
      nombre: this.nombre,
      receta: this.receta,
      ingredientes: this.ingredientes
    };
    
    set(nodoRef, Receta)
    .then(() => {
      console.log('Dato agregado exitosamente.');
    })
    .catch((error) => {
      console.error('Error al actualizar el dato:', error);
    });
  }
  RemoveRecipe(claveUnica: any){
  remove(ref(database, claveUnica))
  .then(() => {
    console.log('Objeto de receta eliminado exitosamente.');
  })
  .catch((error) => {
    console.error('Error al eliminar el objeto de receta:', error);
  });}
}



