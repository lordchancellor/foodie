import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material.module';

import { RecipesService } from './recipes/recipes.service';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RecipesComponent } from './recipes/recipes.component';

@NgModule({
	declarations: [
		AppComponent,
		RecipesComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		ReactiveFormsModule,
		HttpClientModule,
		MaterialModule
	],
	providers: [
		RecipesService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
