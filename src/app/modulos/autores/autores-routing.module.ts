import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutoresComponent } from './autores.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: AutoresComponent }
	])],
	exports: [RouterModule]
})
export class AutoresRoutingModule { }
