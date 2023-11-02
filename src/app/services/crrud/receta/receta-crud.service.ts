import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { ref, DataSnapshot, onValue, remove, push, update, get, set } from 'firebase/database';
import { database } from 'environments/environment';

const recetasRef = ref(database, 'recetas');

@Injectable({
  providedIn: 'root'
})
export class RecetaCrudService {

  private recetasSubscription: Subscription | undefined;
  recetas$: Observable<RecetaIn[]> | undefined;

  ListRecipes(): Observable<RecetaIn[]> {
    return new Observable<RecetaIn[]>((subscriber) => {
      const unsubscribe = onValue(recetasRef, (snapshot: DataSnapshot) => {
        const data = snapshot.val();
        if (data) {
          const recetas: RecetaIn[] = Object.keys(data).map((key) => ({
            id: key,
            nombre: data[key].nombre,
            ingredientes: data[key].ingredientes,
            preparacion: data[key].preparacion,
          }));
          subscriber.next(recetas);
        } else {
          subscriber.next([]);
        }
      });
      return () => {
        unsubscribe();
      };
    });
  }

  addRecipe(nombre: string, ingredientes: string, receta: string) {

    if (!nombre || !ingredientes || !receta) {
      console.error('Por favor, complete todos los campos de la receta.');
      return;
    }

    const nuevaReceta: RecetaOut = {
      nombre: nombre,
      ingredientes: ingredientes, 
      preparacion: receta,
    };

    push(recetasRef, nuevaReceta)
      .then(() => {
        console.log('Receta agregada exitosamente.');
        this.router.navigate(['/lobby']);
      })
      .catch((error) => {
        console.error('Error al agregar la receta:', error);
      });
  }

  RemoveRecipe(claveUnica: any) {
    console.log(claveUnica.id)
    remove(ref(database,`recetas/${claveUnica.id}`))
      .then(() => {
        console.log('Receta eliminada exitosamente.');
      })
      .catch((error) => {
        console.error('Error al eliminar receta:', error);
      });
  }

  UpdateRecipe(name:string, ingr:string, prep:string, key:any){
    const recetaRef = ref(database, `recetas/${key}`);
    const nuevaReceta: RecetaOut = {
      nombre: name,
      ingredientes: ingr, 
      preparacion: prep,
    };
    update(recetaRef, nuevaReceta)
    .then(() => {
      console.log('receta modificada exitosamente.');
      this.router.navigate(['/lobby']);
    })
    .catch((error) => {
      console.error('Error al modificar la receta:', error);
    });
  }

  Node(){
    get(recetasRef)
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
  
        set(recetasRef, receta)
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
  constructor(private router: Router) { }
}

export class RecetaOut {
  nombre: string = '';
  ingredientes: string = '';
  preparacion: string = '';
}

export class RecetaIn {
  id: string = '';
  nombre: string = '';
  ingredientes: string = '';
  preparacion: string = '';
}