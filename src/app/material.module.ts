import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

const materialModules: any[] = [
	MatToolbarModule,
	MatButtonModule,
	MatInputModule,
	MatCardModule,
	MatListModule,
	MatSnackBarModule,
	MatProgressSpinnerModule
];

@NgModule({
	imports: materialModules,
	exports: materialModules
})
export class MaterialModule { }
