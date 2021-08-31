# Frontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


##--------------------------
## nuevo proyecto
$ ng new frontend
-routing (y) css (y)

## instalar componentes necesarios
* listado direcciones
..src/app/ $ ng g component listados/listado-direcciones
* headers
..src/app/ $ ng g component header/header
* -footer
..src/app/ $ ng g component footer/footer
* -body
..src/app/ $ ng g component body/body

## instalar material design
..src/app/ $ ng add @angular/material
- añadir { MaterialModule } en app.module.ts
- en app/styles.css, comentar => /* html, body { height: 100%; } */

1. creamos un module donde ingresar los componentes de material
..src/app/ $ ng g module material

2. ingresar los componentes que necesitamos
-src/app/material/material.module.ts
import { MatToolbarModule } from "@angular/material/toolbar"
exports: [
    MatToolbarModule
  ]
etc.

3. configurar app-routing
Asignar el componente Body como landingpage a <routing-outlet>
    {path: '', component: BodyComponent},

4. acceso al back en carpeta environments
src/environments/environments.ts

5. importar componente HttpClientModule en 
src/app/app-module.ts

6. crear servicio (crea carpeta service)
src/app/ $ ng g service service/direccion
Crear endpoint al back

7. importar servicio en componente
listado-direcciones-component.ts

8. importar MatTabsModule
import { MatTabsModule } from '@angular/material/tabs'

9. routerLink en header
<router-outlet></router-outlet> sustituye al componente body

10. crear componentes
* register
..src/app/ $ ng g component register/register
* login
..src/app/ $ ng g component login/login
* direcciones
..src/app/ $ ng g component direccion/direccion

11. crear interface con los datos que recibiremos
..register/seguridad.ts

11. crear servicio (en carpeta service)
src/app/ $ ng g service service/seguridad

12. importar modulos para formularios en app.module.ts
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

13. logica en register.componets
13. token en localStorage



