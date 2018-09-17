export interface Recipe {
	name: string;
	image: string;
	source: string;
	url: string;
	calories: number;
	ingredients: string[];
	tags: string;
}

export interface EdamamAPI {
	count: number;
	from: number;
	hits: EdamamAPIHit[];
	more: boolean;
	params: EdamamAPIParams;
	q: string;
	to: number;
}

interface EdamamAPIParams {
	app_id: string[];
	app_key: string[];
	q: string[];
	sane: any[];
}

export interface EdamamAPIHit {
	bookmarked: boolean;
	bought: boolean;
	recipe: EdamamAPIRecipe;
}

interface EdamamAPIRecipe {
	calories: number;
	cautions: any[];
	dietLabels: string[];
	digest: any[];
	healthLabels: string[];
	image: string;
	ingredientLines: string[];
	ingredients: { text: string, weight: number }[];
	label: string;
	shareAs: string;
	source: string;
	totalDaily: any;
	totalNutrients: any;
	totalTime: number;
	totalWeight: number;
	uri: string;
	url: string;
	yield: number;
}
