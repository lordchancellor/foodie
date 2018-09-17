import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Recipe, EdamamAPI, EdamamAPIHit } from './recipe.model';

@Injectable()
export class RecipesService {

	private appId: string = '9bf7e0a5';
	private appKey: string = 'af78f343a8f0b87f8eb531f291be06f9';
	private searchUrl: string = `https://api.edamam.com/search?app_id=${this.appId}&app_key=${this.appKey}`;

	private processRecipe: any = map((res: EdamamAPI): Recipe[] => {
		return res.hits.map((hit: EdamamAPIHit): Recipe => {
			return {
				name: hit.recipe.label,
				image: hit.recipe.image,
				source: hit.recipe.source,
				url: hit.recipe.url,
				calories: Math.floor(hit.recipe.calories),
				ingredients: hit.recipe.ingredientLines,
				tags: hit.recipe.dietLabels.join(', ')
			};
		});
	});

	constructor(private http: HttpClient) {}

	public searchRecipes(queryString: string): Observable<any> {
		return this.http.get(`${this.searchUrl}&q=${queryString}`).pipe(
			this.processRecipe
		);
	}

}
