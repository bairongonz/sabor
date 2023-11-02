import { Component, OnInit} from '@angular/core';
import {RecetaCrudService} from 'app/services/crrud/receta/receta-crud.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss'],
})
export class CrearComponent  implements OnInit {

  constructor(private crud: RecetaCrudService) { }
  
  nombre: string = '';
  ingredientes: string = '';
  receta : string = '';

  subirReceta(){
    this.crud.addRecipe(this.nombre, this.ingredientes, this.receta)
  }
  ngOnInit() {}
}
