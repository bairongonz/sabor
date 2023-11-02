import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable} from 'rxjs';
import { RecetaCrudService, RecetaIn } from 'app/services/crrud/receta/receta-crud.service';


@Component({
  selector: 'app-filtrar',
  templateUrl: './filtrar.component.html',
  styleUrls: ['./filtrar.component.scss'],
})
export class FiltrarComponent  implements OnInit {
  // metodo necesario para mostrar recetas
  recetas$: Observable<RecetaIn[]> | undefined;
  constructor(private crud : RecetaCrudService) { }

  ngOnInit() {
    // metodo retorna necetas
    this.recetas$ = this.crud.ListRecipes()
  }
}
