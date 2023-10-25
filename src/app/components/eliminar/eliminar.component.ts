import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { getDatabase, ref, DataSnapshot, onValue, remove } from 'firebase/database';
import { firebaseApp } from 'environments/environment';

const database = getDatabase(firebaseApp);
const recetasRef = ref(database, 'recetas');

class Receta {
  id: string = '';
  name: string = '';
  ingredientes: string = '';
  receta: string = '';
}

@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.component.html',
  styleUrls: ['./eliminar.component.scss'],
})
export class EliminarComponent implements OnInit, OnDestroy {
  private recetasSubscription: Subscription | undefined;
  recetas$: Observable<Receta[]> | undefined;

  constructor() { }

  ngOnInit() {
    this.ListRecipes();
  }

  ngOnDestroy() {
    // Asegúrate de cancelar la suscripción cuando el componente se destruye
    if (this.recetasSubscription) {
      this.recetasSubscription.unsubscribe();
    }
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

  ListRecipes() {
    this.recetasSubscription = new Observable<Receta[]>((subscriber) => {
      onValue(recetasRef, (snapshot: DataSnapshot) => {
        const data = snapshot.val(); // Obtén los datos de la base de datos
        if (data) {
          const recetas: Receta[] = Object.keys(data).map((key) => ({
            id: key,
            name: data[key].nombre,
            ingredientes: data[key].ingredientes,
            receta: data[key].preparacion,
          }));
          subscriber.next(recetas);
        } else {
          subscriber.next([]);
        }
      });
    }).subscribe((recetas) => {
      this.recetas$ = new Observable((subscriber) => subscriber.next(recetas));
    });
  }
}