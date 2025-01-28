import { Injectable } from '@angular/core'; 
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';  
import { HttpService } from 'src/app/core/http/http.service'; 
import { Libro, ListarLibrosResponse } from '../models/libros/libro.dto';


@Injectable({
  providedIn: 'root'
})
export class LibroService { 
  readonly _URL: string;

  constructor(private http: HttpService) {
    this._URL = environment.apiRest.host + "/libros";
  }
 
  crear(request: Libro): Observable<any> { 
    return this.http.obtenerQueryPost<any>(this._URL, request);
  }

  actualizar(request: Libro): Observable<any> { 
    return this.http.obtenerQueryPut<any>(this._URL+'/'+request.id, request);
  }

  eliminar(idLibro: number): Observable<any> { 
    return this.http.obtenerQueryDelete<any>(this._URL+'/'+idLibro);
  }

  listado(): Observable<ListarLibrosResponse> { 
    return this.http.obtenerQueryGet<ListarLibrosResponse>(this._URL);
  }

}