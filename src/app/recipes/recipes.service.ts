import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({providedIn: 'root'})
export class RecipesService {
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe('Fried Chicken', 'A tasty fried chicken recipe'
        , 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS5xCkzHM9xtxUJ-XSOx0aCD1KPkibZY3T0bEDzUIvFMgwfgPU_', [
            new Ingredient('Chicken breast', 3),
            new Ingredient('Flour (in grams)', 100),
            new Ingredient('Oil (in ml)', 200)
        ]),
        new Recipe('Gratan', 'This is a potato gratan recipe, tasty for all situations'
        , 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTpDncIOx6-I4hR-K28UGAK2Nc-N_m2vlCIIPHRVSHlOD5LfdpK', [
            new Ingredient('Potato', 3),
            new Ingredient('Tomato Paste', 10)
        ])
      ];
    constructor(private shoppinglistService: ShoppingListService) {}

    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppinglistService.addIngredients(ingredients);
    }

}
