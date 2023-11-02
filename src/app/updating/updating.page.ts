import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecetaCrudService } from 'app/services/crrud/receta/receta-crud.service';

@Component({
  selector: 'app-updating',
  templateUrl: './updating.page.html',
  styleUrls: ['./updating.page.scss'],
})
export class UpdatingPage implements OnInit {

  constructor(private route: ActivatedRoute, private crud: RecetaCrudService) { }
  // variables necesarias para guardar valores
  name:any = '';
  ingr:any ='';
  prep:any ='';
  key:any= '';

// metodo que llama a recetaCrud para modificar
modificar(){
  this.crud.UpdateRecipe(this.name, this.ingr, this.prep, this.key)
}
  ngOnInit() {

    // llamado de valores en la ruta
    this.name = this.route.snapshot.paramMap.get('nombre');
    this.ingr = this.route.snapshot.paramMap.get('ingredientes');
    this.prep = this.route.snapshot.paramMap.get('preparacion');
    this.key = this.route.snapshot.paramMap.get('key');

    }

}
