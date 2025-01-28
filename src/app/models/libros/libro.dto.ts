import { ApiResponse } from "../respuesta";

  export interface Libro {
    id: number;
    titulo: string;
    idAutor: number;
    isbn: string;
    fechaPublicacion: Date;
    estado: string;
  }
  
    export type ListarLibrosResponse =ApiResponse<Libro[]>