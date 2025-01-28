import { Injectable } from '@angular/core'; 
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';  
import { HttpService } from 'src/app/core/http/http.service'; 
import { Libro, ListarLibrosResponse } from '../models/libros/libro.dto';
import { ListarPrestamosResponse } from '../models/prestamo/prestamo.dto';


@Injectable({
  providedIn: 'root'
})
export class PrestamoService { 
  readonly _URL: string;

  constructor(private http: HttpService) {
    this._URL = environment.apiRest.host + "/prestamos";
  }
 
  crear(request: Libro): Observable<any> { 
    return this.http.obtenerQueryPost<any>(this._URL, request);
  }

  actualizar(request: Libro): Observable<any> { 
    return this.http.obtenerQueryPut<any>(this._URL+'/'+request.id, request);
  }

  finalizarPrestamo(idLibro: number): Observable<any> { 
    return this.http.obtenerQueryPut<any>(this._URL+'/finalizar/'+idLibro, null);
  }

  listado(): Observable<ListarPrestamosResponse> { 
    return this.http.obtenerQueryGet<ListarPrestamosResponse>(this._URL);
  }

}