import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { FormsModule } from '@angular/forms'; // Import FormsModule

import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { FilterComponent } from './filter/filter.component';
import { MyrecipesComponent } from './myrecipes/myrecipes.component';
import { RecipesDetailsComponent } from './recipes-details/recipes-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignUpComponent,
    SignInComponent,
    RecipeListComponent,
    FilterComponent,
    MyrecipesComponent,
    RecipesDetailsComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }