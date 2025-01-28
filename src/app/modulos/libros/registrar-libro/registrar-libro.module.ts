import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button'; 
import { CalendarModule } from 'primeng/calendar';
@NgModule({ 
  imports: [
    CommonModule,
    DropdownModule,
    FormsModule,
    InputTextModule,
    ToastModule,
    DialogModule,
    ReactiveFormsModule,
    TableModule,
    ToolbarModule,
    ButtonModule,
    CalendarModule,
    DropdownModule
  ]
})
export class RegistrarLibroModule { }
