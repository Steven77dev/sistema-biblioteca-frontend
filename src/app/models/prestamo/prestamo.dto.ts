import { ApiResponse } from "../respuesta";

export interface Prestamo {
    id: number;
    idLibro: number;
    fechaPrestamo: Date;
    fechaDevolucion: Date;
    estado: string;
  }

      export type ListarPrestamosResponse =ApiResponse<Prestamo[]>