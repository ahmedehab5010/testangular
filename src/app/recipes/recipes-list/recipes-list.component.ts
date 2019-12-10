import { Recipe } from '../recipe.model';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a recipe'
    , 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS5xCkzHM9xtxUJ-XSOx0aCD1KPkibZY3T0bEDzUIvFMgwfgPU_'),
    new Recipe('Another Great Recipe', 'Thats another great recipe'
    , 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTpDncIOx6-I4hR-K28UGAK2Nc-N_m2vlCIIPHRVSHlOD5LfdpK')
  ];
  @Output() choosedRecipe = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  choosedARecipe(recipe: Recipe) {
    this.choosedRecipe.emit(recipe);
  }

}
