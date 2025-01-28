import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { catchError, of } from 'rxjs';
import { Autor } from 'src/app/models/autores/autor.dto';
import { AutorService } from 'src/app/servicios/autor.service';
import { MensajesToastService } from 'src/app/servicios/compartido/mensajes-toast.service';

@Component({
  selector: 'app-registrar-autor',
  //standalone:true,
  //imports:[CalendarModule],
  templateUrl: './registrar-autor.component.html'
})
export class RegistrarAutorComponent {
  @Input() autor: Autor | null = null;
  @Output() cerrarModal = new EventEmitter<boolean>();
  esNuevo: boolean = true;
  formulario!: FormGroup;
  visible: boolean = true;

  constructor(private fb: FormBuilder,
    private mensajeToast: MensajesToastService,

    private autorService: AutorService
  ) { }

  ngOnInit() {
    this.formulario = this.fb.group({
      id: [this.autor?.id || null],
      nombre: [this.autor?.nombre || '', Validators.required],
      nacionalidad: [this.autor?.nacionalidad || '', Validators.required],
      fechaNacimiento: [this.autor?.fechaNacimiento ? new Date(this.autor.fechaNacimiento) : new Date() || null, Validators.required],
    });
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
    const servicio = datosForm.id == null ? this.autorService.crear(datosForm) : this.autorService.actualizar(datosForm);
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
        this.mensajeToast.showError('Error','No se pudo guardar el autor');
      }
    });
  }
  cerrar(actualizado: boolean) {
    this.visible = false;
    this.cerrarModal.emit(actualizado);
  }

}
