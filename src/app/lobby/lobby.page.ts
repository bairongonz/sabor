import { Component, OnInit } from '@angular/core';
import { getDatabase, ref, set, get, update, remove } from 'firebase/database';
import { firebaseApp } from 'environments/environment';
const database = getDatabase(firebaseApp);
const nodoRef = ref(database, 'recetas');
@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.page.html',
  styleUrls: ['./lobby.page.scss'],
})
export class LobbyPage implements OnInit {

  constructor() { }

  ngOnInit(){
    get(nodoRef)
  .then((snapshot) => {
    if (snapshot.exists()) {
      console.log('El nodo ya existe, no se creará uno nuevo.');
    } else {

      const receta = {
        receta: {
        nombre: 'Nombre de la receta',
        ingredientes: 'Lista de ingredientes',
        preparacion: 'Instrucciones de preparación',}

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

}
