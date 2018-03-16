import { Recipe } from './../recipes/recipes.model';
import { RecipeService } from './../recipes/recipe.service';
import { HttpClient, HttpParams, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';

@Injectable()
export class DataStorageService {
  constructor(private httpClient: HttpClient,
    private recipeService: RecipeService) {}

  stroreRecipes() {
    const req = new HttpRequest('PUT', 'https://ng-recipe-book-6b76f.firebaseio.com/recipes.json',
      this.recipeService.getRecipes(), {reportProgress: true}
    );

    return this.httpClient.request(req);
  }

  getRecipes() {
    return this.httpClient.get<Recipe[]>('https://ng-recipe-book-6b76f.firebaseio.com/recipes.json',
    {
      observe: 'body',
      responseType: 'json'
    })
    .map(
      (recipes) => {
        console.log(recipes);
        for (const recipe of recipes){
          if (!recipe['ingredients']) {
            recipe['ingredients'] = [];
          }
        }

        return recipes;
      }
    )
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipeService.setRecipes(recipes);
        }
      );
  }
}
