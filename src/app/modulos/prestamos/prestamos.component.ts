import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { AutorService } from 'src/app/servicios/autor.service';
import { catchError, finalize, of } from 'rxjs';
import { MensajesToastService } from 'src/app/servicios/compartido/mensajes-toast.service';
import { Prestamo } from 'src/app/models/prestamo/prestamo.dto';
import { RegistrarPrestamoComponent } from './registrar-prestamo/registrar-prestamo.component';
import { PrestamoService } from 'src/app/servicios/prestamo.service';
import { Libro } from 'src/app/models/libros/libro.dto';
import { LibroService } from 'src/app/servicios/libro.service';
 

@Component({
  selector: 'app-prestamos',
  templateUrl: './prestamos.component.html',
  styleUrls: ['./prestamos.component.scss']
})
export class PrestamosComponent implements OnInit {
  prestamos: Prestamo[] = []; 
  esNuevo: boolean = true;
  loading: boolean = false
  mostrarModal: boolean = false
  registroSeleccionado: Prestamo | null = null;
  @ViewChild("registrar") registrar!: RegistrarPrestamoComponent;
  libros: Libro[] =[]  

  constructor(private mensajeToast: MensajesToastService, 
    private confirmationService: ConfirmationService,
    
    private prestamoService: PrestamoService) {}

  ngOnInit() { 
    this.listar();
   
  }

 

  listar() {
    this.prestamoService.listado().pipe(
      catchError((errorResponse: any) => {
        this.mensajeToast.errorServicioConsulta(errorResponse);

        return of(null);
      }), finalize(() => { this.loading = false })
    ).subscribe((response: any) => {
      const { respuesta, codigo, mensaje } = response;
      
      if (codigo === 200 && respuesta) {
        this.prestamos = respuesta;
      }
    });
  }

  abrirNuevo() {
    this.mostrarModal = true
    this.registroSeleccionado = null
  }

  editar(prestamo: Prestamo) {
    this.registroSeleccionado = { ...prestamo };
    this.mostrarModal = true
  }

   finalizarPrestamo(idPrestamo: number){
      this.prestamoService.finalizarPrestamo(idPrestamo).pipe(
        catchError((errorResponse: any) => {
          this.mensajeToast.errorServicioGuardado(errorResponse);
  
          return of(null);
        })
      ).subscribe((response: any) => {
        const { respuesta, codigo, mensaje } = response;
  
        if (codigo === 200) {
          this.mensajeToast.showSuccess('Éxito', mensaje); 
          this.listar()
        } else{
          this.mensajeToast.showError('Error','No se pudo eliminar el autor');
        }
      });
    }
  confirmarFinalizarPrestamo(prestamo: Prestamo) {
    this.confirmationService.confirm({
      header:'Confirmación',
      message: `¿Estás seguro de finalizar el préstamo?`,
      accept: () => {
        this.finalizarPrestamo(prestamo.id)
      },
    });
  }

  alCerrarModal(actualizado: boolean) {
    this.mostrarModal = false;
    if (actualizado) {
      this.listar()
    }
  }
 
}
