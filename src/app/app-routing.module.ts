import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeBlankSelectionComponent } from './recipes/recipe-blank-selection/recipe-blank-selection.component';
import { RecipesDetailComponent } from './recipes/recipes-detail/recipes-detail.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipeResolverService } from './recipes/recipes-resolver.service';

const routes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  {
    path: 'recipes',
    component: RecipesComponent,
    children: [
      { path: '', component: RecipeBlankSelectionComponent },
      { path: 'new', component: RecipeEditComponent },
      { path: ':id', component: RecipesDetailComponent, resolve: [RecipeResolverService] },
      { path: ':id/edit', component: RecipeEditComponent, resolve: [RecipeResolverService] }
    ]
  },
  { path: 'shopping-list', component: ShoppingListComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
