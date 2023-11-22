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

  // llama a las recetas en la DB
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
 // añade recetas a la DB
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
// elimina recetas de la DB, en base a su id
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
// modifica recetas de la DB, en base a su id y contenido
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
// verifica la existencia del nodo de las recetas, y si no existe, lo crea y coloca una receta de ejemplo
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

  FiltroRecipes(contenidoBuscado: string): Observable<RecetaIn[]> {
    return new Observable<RecetaIn[]>((subscriber) => {
      const unsubscribe = onValue(recetasRef, (snapshot: DataSnapshot) => {
        const data = snapshot.val();
        if (data) {
          // Filtrar recetas por contenido de preparación
          const recetas: RecetaIn[] = Object.keys(data)
            .filter((key) => data[key].ingredientes.includes(contenidoBuscado))
            .map((key) => ({
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
}
// formato de datos para subir datos a la DB
export class RecetaOut {
  nombre: string = '';
  ingredientes: string = '';
  preparacion: string = '';
}
// formato de datos para recibir datos de la DB
export class RecetaIn {
  id: string = '';
  nombre: string = '';
  ingredientes: string = '';
  preparacion: string = '';
}