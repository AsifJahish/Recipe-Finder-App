import { Component } from '@angular/core';
import { ShareRecipe } from '../models/models';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-myrecipes',
  templateUrl: './myrecipes.component.html',
  styleUrls: ['./myrecipes.component.css']
})
export class MyrecipesComponent {

  recipe: ShareRecipe = {
    title: '',
    ingredients: [],
    instructions: '',
    cooking_time: 0,
    difficulty: '',
    image: '' // Initialize image as an empty string
  };

  constructor(private recipeService: RecipeService) {}

  submitRecipe() {
    // Ensure image data is converted to text
    this.recipeService.createRecipe(this.recipe).subscribe(
      (createdRecipe: ShareRecipe) => {
        console.log('Recipe created successfully:', createdRecipe);
        // Optionally, you can reset the form or navigate to a different page
        // Resetting the form:
        this.resetForm();
      },
      (error: any) => { // Explicitly specify the type of error as 'any'
        console.error('Failed to create recipe:', error);
        // Handle error response, such as displaying error messages to the user
      }
    );
  }

  resetForm() {
    this.recipe = {
      title: '',
      ingredients: [],
      instructions: '',
      cooking_time: 0,
      difficulty: '',
      image: ''
    };
  }

}