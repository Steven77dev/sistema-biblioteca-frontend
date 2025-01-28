import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { catchError, of } from 'rxjs'; 
import { Libro } from 'src/app/models/libros/libro.dto';
import { Prestamo } from 'src/app/models/prestamo/prestamo.dto';
import { MensajesToastService } from 'src/app/servicios/compartido/mensajes-toast.service';
import { LibroService } from 'src/app/servicios/libro.service';
import { PrestamoService } from 'src/app/servicios/prestamo.service';

@Component({
  selector: 'app-registrar-prestamo',
  //standalone:true,
  //imports:[CalendarModule],
  templateUrl: './registrar-prestamo.component.html'
})
export class RegistrarPrestamoComponent {
  @Input() autor: Prestamo | null = null;
  @Output() cerrarModal = new EventEmitter<boolean>();
  esNuevo: boolean = true;
  formulario!: FormGroup;
  visible: boolean = true;
  libros: Libro[] = []; 
  constructor(private fb: FormBuilder,
    private mensajeToast: MensajesToastService,
    private libroService: LibroService, 
    private prestamoService: PrestamoService
  ) { }

  ngOnInit() {
    this.listarLibros()
    this.formulario = this.fb.group({
      idLibro: [null, Validators.required],
      fechaPrestamo: [null, Validators.required],
      //fechaDevolucion: [null, Validators.required],
      estado: ['ACTIVO', Validators.required]
    });
  }

   listarLibros() {
      this.libroService.listado().pipe(
        catchError((errorResponse: any) => {
          this.mensajeToast.errorServicioConsulta(errorResponse);
  
          return of(null);
        })
      ).subscribe((response: any) => {
        const { respuesta, codigo, mensaje } = response;
        
        if (codigo === 200 && respuesta) {
          this.libros = respuesta;
        }
      });
    }
  

  guardarPrestamo() {
    if (this.formulario.valid) {
      
      this.guardar()
    } else {
      this.mensajeToast.showWarn('Advertencia', 'Debe completar los campos requeridos');
    }
  }


  private guardar() {
    const datosForm = this.formulario.value
    const servicio = datosForm.id == null ? this.prestamoService.crear(datosForm) : this.prestamoService.actualizar(datosForm);
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
        this.mensajeToast.showError('Error',mensaje);
      }
    });
  }
  cerrar(actualizado: boolean) {
    this.visible = false;
    this.cerrarModal.emit(actualizado);
  }

}
