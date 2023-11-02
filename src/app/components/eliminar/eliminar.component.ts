import { Component, OnInit} from '@angular/core';
import { Observable} from 'rxjs';
import { RecetaCrudService, RecetaIn } from 'app/services/crrud/receta/receta-crud.service';

@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.component.html',
  styleUrls: ['./eliminar.component.scss'],
})
export class EliminarComponent implements OnInit{
  recetas$: Observable<RecetaIn[]> | undefined;

  constructor(private crud: RecetaCrudService) { }

  ngOnInit() {
    this.recetas$ = this.crud.ListRecipes()
  }
  
  remover(key:any){
    this.crud.RemoveRecipe(key)
  }
}