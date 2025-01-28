import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private readonly http: HttpClient) {}

  obtenerQueryGet<T>(
    endpoint: string,
    params?: any,
    contentType: string = 'application/json'
  ): Observable<T> {
    const headers = this.createHeaders(contentType)

    return this.http.get<T>(endpoint, { headers, params })
  }

  obtenerQueryPost<T>(endpoint: string, data: any, contentType: string = 'application/json'): Observable<T> {
    const headers = this.createHeaders(contentType)
    return this.http.post<T>(endpoint, data, { headers })
  }

  obtenerQueryPut<T>(
    endpoint: string,
    data: any,
    params?: any,
    contentType: string = 'application/json'
  ): Observable<T> {
    const headers = this.createHeaders(contentType)
    return this.http.put<T>(endpoint, data, { headers, params })
  }

  obtenerQueryDelete<T>(endpoint: string, params?: any, contentType: string = 'application/json'): Observable<T> {
    const headers = this.createHeaders(contentType)
    return this.http.delete<T>(endpoint, { headers, params })
  }

  private createHeaders(contentType: string): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': contentType,
      
    })
  }
}
