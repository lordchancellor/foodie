import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';

const materialModules: any[] = [
	MatToolbarModule,
	MatButtonModule,
	MatInputModule,
	MatCardModule
];

@NgModule({
	imports: materialModules,
	exports: materialModules
})
export class MaterialModule { }
