import { Component, OnInit, OnDestroy } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { catchError, finalize, forkJoin, of, Subscription } from 'rxjs';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { Autor } from 'src/app/models/autores/autor.dto';
import { Libro } from 'src/app/models/libros/libro.dto';
import { Prestamo } from 'src/app/models/prestamo/prestamo.dto';
import { AutorService } from 'src/app/servicios/autor.service';
import { MensajesToastService } from 'src/app/servicios/compartido/mensajes-toast.service';
import { LibroService } from 'src/app/servicios/libro.service';
import { PrestamoService } from 'src/app/servicios/prestamo.service';

@Component({
    templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit, OnDestroy {

    libros:Libro[]= []
    autores:Autor[] = []
    prestamos:Prestamo[] = []

    constructor(
        private mensajeToast: MensajesToastService, 
            
            private libroService: LibroService,
            private autorService: AutorService,
            private prestamoService: PrestamoService
    ) {
        
    }

    ngOnInit() {
       this.cargarListados()
    }

    cargarListados(){
        forkJoin({
            libros: this.libroService.listado().pipe(
              catchError((errorResponse: any) => {
                this.mensajeToast.errorServicioConsulta(errorResponse);
                return of(null);
              })
            ),
            prestamos: this.prestamoService.listado().pipe(
              catchError((errorResponse: any) => {
                this.mensajeToast.errorServicioConsulta(errorResponse);
                return of(null);
              })
            ),
            autores: this.autorService.listado().pipe(
              catchError((errorResponse: any) => {
                this.mensajeToast.errorServicioConsulta(errorResponse);
                return of(null);
              })
            )
          })
            
            .subscribe((result) => {
              const { libros, prestamos, autores } = result;
        
              if (libros?.codigo === 200 && libros?.respuesta) {
                this.libros = libros.respuesta;
              }
        
              if (prestamos?.codigo === 200 && prestamos?.respuesta) {
                this.prestamos = prestamos.respuesta;
              }
        
              if (autores?.codigo === 200 && autores?.respuesta) {
                this.autores = autores.respuesta;
              }
            });
    }

    ngOnDestroy() {
      
    }
}