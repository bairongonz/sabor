import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { getDatabase, ref, set, update } from 'firebase/database';
import { database } from 'environments/environment';
class Receta {
  nombre: string = '';
  ingredientes: string = '';
  preparacion: string = '';
}
@Component({
  selector: 'app-updating',
  templateUrl: './updating.page.html',
  styleUrls: ['./updating.page.scss'],
})
export class UpdatingPage implements OnInit {

  constructor(private route: ActivatedRoute) { }
  name:any = '';
  ingr:any ='';
  prep:any ='';
  key:any= '';
  updateRecipe(){
  const recetaRef = ref(database, `recetas/${this.key}`);
  const nuevaReceta: Receta = {
    nombre: this.name,
    ingredientes: this.ingr, 
    preparacion: this.prep,
  };
  update(recetaRef, nuevaReceta)
  .then(() => {
    console.log('receta modificada exitosamente.');
  })
  .catch((error) => {
    console.error('Error al modificar la receta:', error);
  });
}
  ngOnInit() {
    this.name = this.route.snapshot.paramMap.get('nombre');
    this.ingr = this.route.snapshot.paramMap.get('ingredientes');
    this.prep = this.route.snapshot.paramMap.get('preparacion');
    this.key = this.route.snapshot.paramMap.get('key');

    }

}
