import { ApiResponse } from "../respuesta";

export interface Autor {
    id: number;
    nombre: string;
    nacionalidad: string;
    fechaNacimiento: Date;
  }
  

  export type ListarAutoresResponse =ApiResponse<Autor[]>