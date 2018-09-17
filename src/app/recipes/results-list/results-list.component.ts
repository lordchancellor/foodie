import { Component, Input } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
	selector: 'fdy-results-list',
	templateUrl: './results-list.component.html',
	styleUrls: ['./results-list.component.scss']
})
export class ResultsListComponent {

	@Input()
	recipes: Recipe[];

}
