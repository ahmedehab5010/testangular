import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recipe } from '../recipes/recipe.model';
import { RecipesService } from '../recipes/recipes.service';
import { map, tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  private firebaseUrl = 'https://ng-course-recipe-book-bc050.firebaseio.com/';
  constructor(private http: HttpClient, private recipesService: RecipesService) {}

  storeRecipe() {
    const recipes = this.recipesService.getRecipes();
    this.http.put(this.firebaseUrl + 'recipes.json', recipes).subscribe(response => {
      console.log(response);
    });
  }

  fetchRecipes() {
    return this.http.get<Recipe[]>(this.firebaseUrl + '/recipes.json').pipe(
      map(recipes => {
        return recipes.map(recipe => {
          return { ...recipe, ingredients: recipe.ingredients ? recipe.ingredients : [] };
        });
      }),
      tap(recipes => {
        this.recipesService.setRecipes(recipes);
      })
    );
  }
}
