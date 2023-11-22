import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private datos:string="";

  modifData(component: string){
    this.datos = component;
  }
  getData(){
    return this.datos;
  }

  
}