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
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { CalendarModule } from 'primeng/calendar';
import { PrestamosComponent } from './prestamos.component';
import { RegistrarPrestamoComponent } from './registrar-prestamo/registrar-prestamo.component';
import { PrestamosRoutingModule } from './prestamos-routing.module';
@NgModule({
  declarations: [PrestamosComponent,RegistrarPrestamoComponent],
  imports: [
    CommonModule,
    PrestamosRoutingModule,
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
export class PrestamosModule { }
