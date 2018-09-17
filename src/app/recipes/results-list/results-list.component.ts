import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
	selector: 'fdy-results-list',
	templateUrl: './results-list.component.html',
	styleUrls: ['./results-list.component.scss']
})
export class ResultsListComponent {

	@Input()
	recipes: Recipe[];

	@Output()
	recipeSelected: EventEmitter<Recipe> = new EventEmitter();

	onSelectRecipe(recipe: Recipe): void {
		this.recipeSelected.emit(recipe);
	}

}
