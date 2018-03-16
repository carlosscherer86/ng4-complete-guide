import { Ingredient } from './../shared/ingredient.model';
import { Recipe } from './recipes.model';
import { Subject } from 'rxjs/Subject';

export class RecipeService {
  recipesChaged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe(
      'Tasty Schnitzel',
      'A super-tasty Schnitzel - just awesome!',
      'https://www.daringgourmet.com/wp-content/uploads/2014/03/Schnitzel-5.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]
    ),
    new Recipe(
      'Big Fat Burger',
      'What else you need to say?',
      'http://bk-apac-prd.s3.amazonaws.com/sites/burgerking.co.nz/files/BUR2423D_Kings-Collection_PRODUCT_300x270_02%5B1%5D.png',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1)
      ]
    )
  ];

  constructor() {}

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChaged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }
}
