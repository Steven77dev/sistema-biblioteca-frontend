# Documentación del Proyecto Frontend

## Resumen
Este proyecto es una aplicación desarrollada con Angular y PrimeNG 17. Incluye funcionalidades como formularios reactivos, manejo de datos desde servicios, y notificaciones para errores.

## Requisitos Previos
- **Node.js**: Versión 18.x o superior.
- **Angular CLI**: Versión 17.x.
- **PrimeNG**: Versión 17.x.
- **Theme PrimeNG**: Bootstrap.
- **PrimeFlex**: Versión 3.x.

## Configuración del Proyecto

### 1. Clonar el Repositorio
```bash
git clone https://github.com/Steven77dev/sistema-biblioteca-frontend
cd sistema-biblioteca-frontend
```

### 2. Instalar Dependencias
```bash
npm install
```

### 3. Ejecutar el Servidor de Desarrollo
```bash
npm start
```
La aplicación estará disponible en `http://localhost:4200/`.

## Estructura del Proyecto
- **src/app**: Contiene los módulos, componentes, servicios y modelos del proyecto.
  - **modulos**: Pantallas para la visualización del usuario.
  - **servicios**: Servicios para comunicación con la API.
  - **models**: Interfaces TypeScript para las estructuras de datos (por ejemplo, `Prestamo`).

## Funcionalidades

### 1. Carga de Datos Asíncrona
Se usan llamadas concurrentes con `forkJoin` para obtener datos de libros, préstamos y autores al mismo tiempo.

### 2. Notificaciones
Se utiliza un servicio personalizado (`mensajeToast`) para mostrar mensajes de error.

### 3. Formularios Reactivos
El formulario permite registrar y actualizar préstamos:
```typescript
this.form = this.fb.group({
  id: [null],
  idLibro: [null, Validators.required],
  fechaPrestamo: [null, Validators.required],
  fechaDevolucion: [null, Validators.required],
  estado: ['', Validators.required]
});
```

### 4. Componentes de PrimeNG
- **`p-calendar`**: Selección de fechas.
- **`p-toast`**: Mostrar mensajes.
- **`p-dialog`**: Modal para formularios.
- **`p-table`**: Listado de datos en grilla.
- **`p-dropdown`**: Listado de datos para seleccionar.

## Configuración de Entorno
Crea un archivo en `src/environments/environment.ts` con el siguiente contenido:
```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:9098/api' // Cambia esto según tu configuración
};
```

## Comandos Útiles
- **Iniciar Servidor**: `npm start`
- **Construir Proyecto**: `ng build --prod`

## Despliegue
1. Construir la aplicación:
   ```bash
   ng build --prod
   ```
2. Subir el contenido de la carpeta `dist/` a tu servidor web.
