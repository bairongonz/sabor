import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { Router } from '@angular/router';
import { RecetaCrudService } from 'app/services/crrud/receta/receta-crud.service';
import { SharedService } from 'app/services/shared/shared.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent  implements OnInit {
  // variable que permite la existencia del menu
  presentingElement: Element | null = null;

  constructor(private actionSheetCtrl: ActionSheetController, private router:Router,private node: RecetaCrudService, private shared:SharedService ) { }

  // variable conectada al formualrio
search : string = "";
  //cantidad inicial
  private numero = 1; 

  // metodo aumento cantidad inicial
handleAumentar() {
  this.numero += 1;
}
// metodo disminucion cantidad inicial
handleDisminuir() {
  if (this.numero == 0)
  {this.numero + 0;
  }
  else {
    this.numero -=  1;
  }
}
// metodo para buscar
searcher(){
  this.shared.modifData(this.search);
  this.router.navigate(['/read']);

}
  ngOnInit() {
    // llama a recipeCrud para verificar la existencia del nodo de la DB
    this.node.Node()

    // crea el elemento de busqueda
    const element = document.querySelector('.page');
    if (element) {
      this.presentingElement = element;
    }
  }
  // elemento de busqueda con los metodos de cantidad inicial, adicionalmente, modifican variables del formulario
  Numeric = async (boton: string) => {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Cantidad de Ingredientes',
      buttons: [
        {
          text: '+',
          role: 'aumentar', 
          handler: () => {
            this.handleAumentar();
            this.Numeric(boton)
          },
          
        },
                {
          text: '' + this.numero,
          role: 'numero',
          handler: () => {
            this.Numeric(boton)
          },
          
        },
        {
          text: '-',
          role: 'disminuir',
          handler: () => {
            this.handleDisminuir();
            this.Numeric(boton)
          },
        },

        {
          text: 'Aceptar',
          role: 'cancel',
          handler: () => {
            if (this.search == "")
            {if (this.numero == 1){
              this.search = this.numero + ' '+ boton}
            else {
              this.search = this.numero + ' '+ boton+ 's'
            }
            }
            else {
              if(this.numero == 1){
                this.search =this.search +', '+ this.numero + ' '+ boton;
              }
              else{
            this.search =this.search +', '+ this.numero + ' '+ boton + 's';}
          }
            this.numero = 1;
          },
        },
      ],
    });
    // inicializacion del componente de buscar
    actionSheet.present();
  };
  

}

