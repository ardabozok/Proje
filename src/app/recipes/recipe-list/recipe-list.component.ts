import { Component, OnInit } from '@angular/core';
import {Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
    recipes: Recipe[] = [
                         new Recipe('Arda', 'Bu bir açıklamadır', 'http://www.daringgourmet.com/wp-content/uploads/2014/03/Schnitzel-7_edited.jpg'),
                         new Recipe('Arda', 'Bu bir açıklamadır', 'http://www.daringgourmet.com/wp-content/uploads/2014/03/Schnitzel-7_edited.jpg'),
];

  constructor() { }

  ngOnInit() {
  }

}
