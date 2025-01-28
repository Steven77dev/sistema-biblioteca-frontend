
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { catchError, finalize, of } from 'rxjs';
import { Autor } from 'src/app/models/autores/autor.dto';
import { Libro } from 'src/app/models/libros/libro.dto';
import { AutorService } from 'src/app/servicios/autor.service';
import { MensajesToastService } from 'src/app/servicios/compartido/mensajes-toast.service';
import { LibroService } from 'src/app/servicios/libro.service';

@Component({
  selector: 'app-registrar-libro',
  templateUrl: './registrar-libro.component.html'
})
export class RegistrarLibroComponent {
  @Input() libro: Libro | null = null;
  @Output() cerrarModal = new EventEmitter<boolean>();
  esNuevo: boolean = true;
  formulario!: FormGroup;
  visible: boolean = true;
  autores: Autor[] = [];
  constructor(private fb: FormBuilder,
    private mensajeToast: MensajesToastService,
    private autorService: AutorService,
    private libroService: LibroService
  ) { }

  ngOnInit() {
    this.formulario = this.fb.group({
      id: [this.libro?.id || null],
      idAutor: [this.libro?.idAutor || '', Validators.required],
      isbn: [this.libro?.isbn || '', Validators.required],
      titulo: [this.libro?.titulo || '', Validators.required],
      fechaPublicacion: [new Date(this.libro?.fechaPublicacion ?? new Date()) || null, Validators.required],
    });
    this.listarAutores()
  }

  guardarAutor() {
    if (this.formulario.valid) {
      
      this.guardar()
    } else {
      this.mensajeToast.showWarn('Advertencia', 'Debe completar los campos requeridos');
    }
  }


  private guardar() {
    const datosForm = this.formulario.value
    const servicio = datosForm.id == null ? this.libroService.crear(datosForm) : this.libroService.actualizar(datosForm);
    servicio.pipe(
      catchError((errorResponse: any) => {
        this.mensajeToast.errorServicioGuardado(errorResponse);

        return of(null);
      })
    ).subscribe((response: any) => {
      const { respuesta, codigo, mensaje } = response;

      if (codigo === 200) {
        this.mensajeToast.showSuccess('Éxito', mensaje);
        this.cerrarModal.emit(true);
      } else{
        this.mensajeToast.showError('Error','No se pudo guardar el libro');
      }
    });
  }

  listarAutores() {
      this.autorService.listado().pipe(
        catchError((errorResponse: any) => {
          this.mensajeToast.errorServicioConsulta(errorResponse);
  
          return of(null);
        })
      ).subscribe((response: any) => {
        const { respuesta, codigo, mensaje } = response;
        
        if (codigo === 200 && respuesta) {
          this.autores = respuesta;
        }
      });
    }

  cerrar(actualizado: boolean) {
    this.visible = false;
    this.cerrarModal.emit(actualizado);
  }

}
