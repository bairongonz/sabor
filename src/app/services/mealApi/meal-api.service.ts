import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { of, tap } from 'rxjs';
import { RecetaCrudService } from '../crrud/receta/receta-crud.service';

@Injectable({
  providedIn: 'root'
})
export class MealApiService {
  private apiUrl = 'https://www.themealdb.com/api/json/v1/1';

  constructor(private http: HttpClient, private crud: RecetaCrudService) {
    
  }
  generateBD(){
    const ae = this.FilterMealById("American");
    ae.subscribe(
      (response) => {
        const comidas = response.meals;
        
        // Iterar sobre el array de comidas
        for (const comida of comidas) {
          
         // console.log('Comida:', comida.strMeal);
          const e = this.getMealById(comida.idMeal)
          e.subscribe(
            (response) => {
              const detalleComida = response.meals;
          
              const eee = this.returnIngredients(detalleComida[0])
              
              this.crud.addExtRecipe(detalleComida[0].strMeal,eee,detalleComida[0].strInstructions,detalleComida[0].strMealThumb);
            }
          ) 
        }
      },
      (error) => console.error('Error:', error),
      () => console.log('El Observable ha completado la emisión de valores.')
    );
}
  getMealById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/lookup.php?i=${id}`);
  }
  FilterMealById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/filter.php?a=${id}`);
  }

  returnIngredients(obs : any): string{
    let aeeee = '';
    for (let i = 1; i <= 20; i++){
      const ingredient = obs["strIngredient" + i];

      if (ingredient === '') {
        
      } else {
        aeeee += ingredient + ', ';
      }
    }
    aeeee = aeeee.slice(0, -2);
    return aeeee
  }

  ListFilterMealById(): Observable<any> {
    return this.http.get(`${this.apiUrl}/list.php?a=list`)
    .pipe(
      catchError(error => {
        console.error('Error en la solicitud HTTP:', error);
        return of([]);
      })
      );


  }
}


