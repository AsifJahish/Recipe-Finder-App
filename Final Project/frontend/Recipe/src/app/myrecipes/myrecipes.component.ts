import { Component } from '@angular/core';

@Component({
  selector: 'app-myrecipes',
  templateUrl: './myrecipes.component.html',
  styleUrls: ['./myrecipes.component.css']
})
export class MyrecipesComponent {

  recipe: any = {
    title: '',
    ingredients: '',
    instructions: '',
    cookingTime: null,
    difficulty: '',
    image: null
  };

  handleImageUpload(event: any) {
    const file = event.target.files[0];
    // Handle the file upload, e.g., store it in the recipe object or upload it to a server
    this.recipe.image = file;
  }

  submitRecipe() {
    // Handle recipe submission, e.g., send it to a server
    console.log(this.recipe);
  }

}
