import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { finalize as finalise } from 'rxjs/operators';

import { RecipesService } from './recipes.service';

import { Recipe } from './recipe.model';

@Component({
	selector: 'fdy-recipes',
	templateUrl: './recipes.component.html',
	styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {

	loading: boolean = false;

	recipeSearch: FormGroup;
	recipes: Recipe[];

	selectedRecipe: Recipe;

	constructor(private formBuilder: FormBuilder, 
							private snackBar: MatSnackBar,
							private recipesService: RecipesService) { }

	ngOnInit(): void {
		this.recipeSearch = this.formBuilder.group({
			search: [ '', Validators.minLength(2) ]
		});
	}

	onSearch(): void {
		const searchTerm: string = this.recipeSearch.get('search').value;

		this.loading = true;

		this.recipesService.searchRecipes(searchTerm)
			.pipe(finalise(() => this.loading = false))
			.subscribe(
				(res: Recipe[]) => {
					console.log(res);
					this.recipes = res;
				},
				err => {
					console.log(err);
					this.snackBar.open('No results found', '', { verticalPosition: 'top', duration: 3000 });
				}
			);
	}

	onRecipeSelected(recipe: Recipe): void {
		this.selectedRecipe = recipe;
	}

}
