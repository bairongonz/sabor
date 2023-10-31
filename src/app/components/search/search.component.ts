import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent  implements OnInit {
  presentingElement: Element | null = null;

  constructor(private actionSheetCtrl: ActionSheetController, private router:Router) { }

search : string = "Buscar ingredientes";
  private numero = 1; // Variable para almacenar el número

handleAumentar() {
  this.numero += 1;
}

handleDisminuir() {
  if (this.numero == 0)
  {this.numero + 0;
  }
  else {
    this.numero -=  1;
  }
}

searcher(){
  this.router.navigate(['/read']);
}
  ngOnInit() {
    const element = document.querySelector('.page');
    if (element) {
      this.presentingElement = element;
    }
  }
  Numeric = async (boton: string) => {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'cantidad??',
      buttons: [
        {
          text: 'Aumentar',
          role: 'aumentar', // Define un rol personalizado para el botón
          handler: () => {
            this.handleAumentar();
            this.Numeric(boton) // Llama a una función para aumentar el número
          },
          
        },
                {
          text: '' + this.numero,
          role: 'numero',
          handler: () => {
            this.Numeric(boton) // Llama a una función para aumentar el número
          },
          
        },
        {
          text: 'Disminuir',
          role: 'disminuir', // Define un rol personalizado para el botón
          handler: () => {
            this.handleDisminuir();
            this.Numeric(boton) // Llama a una función para disminuir el número
          },
        },

        {
          text: 'Aceptar',
          role: 'cancel',
          handler: () => {
            if (this.search == "Buscar ingredientes")
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
            
            // Establecer que el menú está cerrado al hacer clic en "Cancelar"
            
          },
        },
      ],
    });

    actionSheet.present();
  };
  

}

