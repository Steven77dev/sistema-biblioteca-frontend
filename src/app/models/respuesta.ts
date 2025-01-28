export interface ApiResponse<T> {
    respuesta: T;
    codigo: number;
    mensaje: string;
}
