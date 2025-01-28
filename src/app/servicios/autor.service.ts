import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';  
import { HttpService } from 'src/app/core/http/http.service';
import { Autor, ListarAutoresResponse } from '../models/autores/autor.dto';


@Injectable({
  providedIn: 'root'
})
export class AutorService { 
  readonly _URL: string;

  constructor(private http: HttpService) {
    this._URL = environment.apiRest.host + "/autores";
  }
 
  crear(request: Autor): Observable<any> { 
    return this.http.obtenerQueryPost<any>(this._URL, request);
  }

  actualizar(request: Autor): Observable<any> { 
    return this.http.obtenerQueryPut<any>(this._URL+'/'+request.id, request);
  }

  eliminar(idAutor: number): Observable<any> { 
    return this.http.obtenerQueryDelete<any>(this._URL+'/'+idAutor);
  }

  listado(): Observable<ListarAutoresResponse> { 
    return this.http.obtenerQueryGet<ListarAutoresResponse>(this._URL);
  }
  /*listadoMesasLocal(request: BuscarMesasRequest): Observable<ListarMesasLocalResponse> { 
    return this.http.obtenerQueryPost<ListarMesasLocalResponse>(this._URL + "/listadoMesasLocal", request);
  }

  listadoProductosPorPedir(request: BuscarProductosPorPedirRequest): Observable<ListarProductosPorPedirResponse> { 
    return this.http.obtenerQueryPost<ListarProductosPorPedirResponse>(this._URL + "/productosPorPedir", request);
  }

  crearPedido(request: CrearPedidoRequest): Observable<any> { 
    return this.http.obtenerQueryPost<any>(this._URL + "/crearPedido", request);
  }

  listadoPedidosPorMesa(request: BuscarPedidosMesaRequest): Observable<ListarPedidosMesaResponse> { 
    return this.http.obtenerQueryPost<ListarPedidosMesaResponse>(this._URL + "/pedidosPorMesa", request);
  }

  agregarProductoPedido(request: AgregarProductoPedidoRequest): Observable<any> { 
    return this.http.obtenerQueryPost<any>(this._URL + "/agregarProductoPedido", request,);
  }*/


}