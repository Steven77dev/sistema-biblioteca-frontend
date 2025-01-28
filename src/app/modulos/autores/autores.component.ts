import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { RegistrarAutorComponent } from './registrar-autor/registrar-autor.component';
import { Autor, ListarAutoresResponse } from 'src/app/models/autores/autor.dto';
import { AutorService } from 'src/app/servicios/autor.service';
import { catchError, finalize, of } from 'rxjs';
import { MensajesToastService } from 'src/app/servicios/compartido/mensajes-toast.service';
 

@Component({
  selector: 'app-autores',
  templateUrl: './autores.component.html',
  styleUrls: ['./autores.component.scss']
})
export class AutoresComponent implements OnInit {
  autores: Autor[] = []; 
  esNuevo: boolean = true;
  loading: boolean = false
  mostrarModal: boolean = false
  registroSeleccionado: Autor | null = null;
  @ViewChild("registrar") registrar!: RegistrarAutorComponent;
  

  constructor(private mensajeToast: MensajesToastService, 
    private confirmationService: ConfirmationService,
    private autorService: AutorService) {}

  ngOnInit() {
    this.listar();
   
  }

  listar() {
    this.autorService.listado().pipe(
      catchError((errorResponse: any) => {
        this.mensajeToast.errorServicioConsulta(errorResponse);

        return of(null);
      }), finalize(() => { this.loading = false })
    ).subscribe((response: any) => {
      const { respuesta, codigo, mensaje } = response;
      
      if (codigo === 200 && respuesta) {
        this.autores = respuesta;
      }
    });
  }

  abrirNuevo() {
    this.mostrarModal = true
    this.registroSeleccionado = null
  }

  editar(autor: Autor) {
    this.registroSeleccionado = { ...autor };
    this.mostrarModal = true
  }

   eliminar(idAutor: number){
      this.autorService.eliminar(idAutor).pipe(
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
  confirmarEliminar(autor: Autor) {
    this.confirmationService.confirm({
      header:'Confirmación',
      message: `¿Estás seguro de eliminar al autor ${autor.nombre}?`,
      accept: () => {
        this.eliminar(autor.id)
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
