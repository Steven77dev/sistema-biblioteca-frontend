# Sistema de Gestión y Ventas

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
# Hospital Nacional Cayetano Heredia - Frontend Angular 15 con PrimeNG

Este repositorio contiene el código fuente y la documentación para el proyecto Frontend de Angular 15 desarrollado con PrimeNG para el Hospital Nacional Cayetano Heredia. Esta aplicación proporciona una interfaz de usuario moderna para mejorar la gestión de datos y servicios médicos en el hospital.

## Características

- Interfaz de usuario intuitiva y fácil de usar.
- Integración de componentes PrimeNG para una experiencia de usuario mejorada.
- Agregar las nuevas funcionalidades

## Requisitos Previos

Asegúrate de tener las siguientes herramientas instaladas en tu sistema antes de continuar:

- [Node.js](https://nodejs.org/): Asegúrate de tener Node.js instalado. Puedes descargarlo desde el sitio web oficial.

- [Angular CLI](https://angular.io/cli): Necesitas Angular CLI para desarrollar y ejecutar la aplicación. Puedes instalarlo globalmente utilizando npm (Node Package Manager) con el siguiente comando:
`npm install -g @angular/cli@15`

## Instalación:

Sigue estos pasos para configurar y ejecutar el proyecto en tu entorno local:

1. Clona este repositorio en tu máquina local:

git clone https://github.com/InformaticaHNCH2/frontend-sigehov3.git

2. Navega al directorio del proyecto:

cd sigehov3Frontend (por ejemplo)

3. Instala las dependencias del proyecto:

`npm install`

4. Inicia la aplicación:

`ng serve`

5. Abre tu navegador web y visita `http://localhost:4200` para ver la aplicación en funcionamiento.

## Generar nuevo componente

Ejecutar `ng generate component modulos/nombre-modulo/nombre-componente`

## Generar module y routing de componente creado

Ejecutar `ng generate module modulos/nombre-modulo/nombre-componente --routing`

Ten en cuenta reemplazar nombre-modulo por el nombre del modulo que has creado


## Enrutar nuevo componente

Revisar el .ts `/modulos/his/his-routing.module.ts` 

En ella se agrega las opciones (componentes) que serán enrutadas en el módulo 

## Enrutar nuevo módulo

Revisar el .ts `/src/app/app-routing.module.ts` 

En ella se agrega los módulos que serán enrutadas en el menú (`src/app/layout/app.menu.component.ts` )
