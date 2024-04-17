import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Recipe } from '../models/models';
import { map } from 'rxjs/operators';
import { RecipeDetail } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private apiUrl = 'https://api.spoonacular.com/recipes/complexSearch';
  private apiKey = '8955a20a360040a7b96f10b11a8710a9';

  constructor(private http: HttpClient) { }

  getRecipes(query: string): Observable<Recipe[]> {
    const url = `${this.apiUrl}?apiKey=${this.apiKey}&query=${query}`;
    return this.http.get<any>(url)
      .pipe(
        map((response: any) => response.results)
      );
  }

  private apiUrld = 'https://api.spoonacular.com/recipes/';

  getRecipeDetails(recipeId: number): Observable<RecipeDetail> {
    const url = `${this.apiUrld}/${recipeId}/information?apiKey=${this.apiKey}`;
    return this.http.get<RecipeDetail>(url);
  }
}
