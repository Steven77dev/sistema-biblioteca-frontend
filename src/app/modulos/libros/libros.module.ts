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
import { CardModule } from 'primeng/card';
import { AutoresRoutingModule } from './libros-routing.module';  
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { CalendarModule } from 'primeng/calendar';
import { RegistrarLibroComponent } from './registrar-libro/registrar-libro.component';
import { LibrosComponent } from './libros.component';
@NgModule({
  declarations: [LibrosComponent,RegistrarLibroComponent],
  imports: [
    CommonModule,
    AutoresRoutingModule,
    DropdownModule,
    FormsModule,
    InputTextModule,
    ToastModule,
    DialogModule,
    ReactiveFormsModule,
    TableModule,
    ToolbarModule,
    ButtonModule,
    CardModule,
    CalendarModule,
    ConfirmDialogModule
  ],
  providers:[ConfirmationService]
})
export class LibrosModule { }
