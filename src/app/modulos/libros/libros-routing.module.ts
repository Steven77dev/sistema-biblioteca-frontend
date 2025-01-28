import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { LibrosComponent } from './libros.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: LibrosComponent }
	])],
	exports: [RouterModule]
})
export class AutoresRoutingModule { }
