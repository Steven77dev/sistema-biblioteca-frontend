import { Component, inject, OnInit, ViewChild } from '@angular/core'; 
import { ConfirmationService, MessageService } from 'primeng/api';
import { catchError, finalize, of } from 'rxjs';
import { MensajesToastService } from 'src/app/servicios/compartido/mensajes-toast.service';
import { RegistrarLibroComponent } from './registrar-libro/registrar-libro.component';
import { Libro } from 'src/app/models/libros/libro.dto';
import { LibroService } from 'src/app/servicios/libro.service';
 

@Component({
  selector: 'app-libros',
  providers:[ConfirmationService],
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.scss']
})
export class LibrosComponent implements OnInit {
  libros: Libro[] = []; 
  esNuevo: boolean = true;
  loading: boolean = false
  mostrarModal: boolean = false
  registroSeleccionado: Libro | null = null;
  @ViewChild("registrar") registrar!: RegistrarLibroComponent;
  

  constructor(private mensajeToast: MensajesToastService, 
    private confirmationService: ConfirmationService,
    private libroService: LibroService) {}

  ngOnInit() {
    this.listar();
   
  }

  listar() {
    this.libroService.listado().pipe(
      catchError((errorResponse: any) => {
        this.mensajeToast.errorServicioConsulta(errorResponse);

        return of(null);
      }), finalize(() => { this.loading = false })
    ).subscribe((response: any) => {
      const { respuesta, codigo, mensaje } = response;
      
      if (codigo === 200 && respuesta) {
        this.libros = respuesta;
      }
    });
  }

  abrirNuevo() {
    this.mostrarModal = true
    this.registroSeleccionado = null
  }

  editar(libro: Libro) {
    this.registroSeleccionado = { ...libro };
    this.mostrarModal = true
  }
  confirmarEliminar(libro: Libro) {
    this.confirmationService.confirm({
      header:'Confirmación',
      message: `¿Estás seguro de eliminar al libro ${libro.titulo}?`,
      accept: () => {
        this.eliminar(libro.id)
      },
    });
  }

  eliminar(idLibro: number){
    this.libroService.eliminar(idLibro).pipe(
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
        this.mensajeToast.showError('Error','No se pudo eliminar el libro');
      }
    });
  }
  alCerrarModal(actualizado: boolean) {
    this.mostrarModal = false;
    if (actualizado) {
      this.listar()
    }
  }
 
}
