import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

export class ShoppingListService {
  subscription = new Subject<Ingredient[]>();
  ingredients: Ingredient[] = [new Ingredient('Apples', 5), new Ingredient('Tomatoes', 10)];
  constructor() {}

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.subscription.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    console.log(ingredients);
    this.ingredients.push(...ingredients);
    this.subscription.next(this.ingredients.slice());
  }

  getIngredients() {
    return this.ingredients.slice();
  }
}
