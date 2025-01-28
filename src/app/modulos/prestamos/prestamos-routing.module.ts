import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {  PrestamosComponent } from './prestamos.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: PrestamosComponent }
	])],
	exports: [RouterModule]
})
export class PrestamosRoutingModule { }
