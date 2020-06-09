import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model'
import { examples} from './examples.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe ('A test recipe', 'Simply a test', 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2019/10/puttanesca.jpg?itok=gTWChUgQ'),
    new Recipe ('A test recipe', 'Simply a test', 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2019/10/puttanesca.jpg?itok=gTWChUgQ')
  ]



  constructor() { }

  ngOnInit(): void {
  }

}
