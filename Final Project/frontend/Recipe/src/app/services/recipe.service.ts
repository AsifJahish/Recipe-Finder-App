import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Recipe } from '../models/models';
import { map } from 'rxjs/operators';
import { RecipeDetail } from '../models/models';
import { ShareRecipe } from '../models/models';

import { User } from '../models/models';

import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    // Add other headers as needed, such as 'Authorization'
  })
};


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

  private apiUrlUser = 'http://127.0.0.1:8000/users/user/'; // Update with your backend API URL



  signUpUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrlUser, user);
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrlUser);
  }

  private apiShareUrl = 'http://127.0.0.1:8000/shareRecipes/recipes/';





  getRecipesShared(): Observable<ShareRecipe[]> {
    return this.http.get<ShareRecipe[]>(this.apiShareUrl);
  }




  createRecipe(recipe: ShareRecipe): Observable<ShareRecipe> {
    return this.http.post<ShareRecipe>(this.apiShareUrl, recipe, httpOptions);
  }
  // Method to fetch users from the backend
  // getUsers(): Observable<User[]> {
  //   const usersUrl = 'http://127.0.0.1:8000/admin/users/user/';
  //   return this.http.get<User[]>(usersUrl);
  // }

  // // Method to add or update a shareRecipe on the backend
  // addOrUpdateShareRecipe(shareRecipe: ShareRecipe): Observable<any> {
  //   const shareRecipeUrl = 'http://127.0.0.1:8000/admin/shareRecipes/recipe/add/';
  //   return this.http.post<any>(shareRecipeUrl, shareRecipe);
  // }

  // Method to sign up a user
  // signUpUser(userData: any): Observable<any> {
  //   const signUpUrl = 'http://127.0.0.1:8000/signup'; // Adjust URL according to your backend route
  //   return this.http.post<any>(signUpUrl, userData);
  // }

  // // Method to update user data
  // updateUser(userId: number, userData: any): Observable<any> {
  //   const updateUserUrl = `http://127.0.0.1:8000/admin/users/user/${userId}/update/`; // Adjust URL according to your backend route
  //   return this.http.put<any>(updateUserUrl, userData);
  // }

  // // Method to update recipe data
  // updateRecipe(recipeId: number, recipeData: any): Observable<any> {
  //   const updateRecipeUrl = `http://127.0.0.1:8000/admin/shareRecipes/recipe/${recipeId}/update/`; // Adjust URL according to your backend route
  //   return this.http.put<any>(updateRecipeUrl, recipeData);
  // }


}
