import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable} from 'rxjs';
import { RecetaIn, RecetaCrudService } from 'app/services/crrud/receta/receta-crud.service';




@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss'],
})
export class EditarComponent  implements OnInit {
 // necesario para mostrar recetas en html
  recetas$: Observable<RecetaIn[]> | undefined;
  
  constructor(private crud : RecetaCrudService) { }

  ngOnInit() {
    // metodo retorna recetas
    this.recetas$= this.crud.ListRecipes();
  }


}
