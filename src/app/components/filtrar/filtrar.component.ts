import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable} from 'rxjs';
import { RecetaCrudService, RecetaIn } from 'app/services/crrud/receta/receta-crud.service';
import { SharedService } from 'app/services/shared/shared.service';

@Component({
  selector: 'app-filtrar',
  templateUrl: './filtrar.component.html',
  styleUrls: ['./filtrar.component.scss'],
})
export class FiltrarComponent  implements OnInit {
  recetas: any[] = [];
  // metodo necesario para mostrar recetas
  recetas$: Observable<RecetaIn[]> | undefined;
  constructor(private crud : RecetaCrudService, private shared: SharedService) { }

  ngOnInit() {
    const search = this.shared.getData();
    // metodo retorna necetas
    this.recetas$ = this.crud.FiltroRecipes(search);
  }
}
