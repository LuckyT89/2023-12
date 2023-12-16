# 202312

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.5.

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

# Custom Notes by Tyler

## Routing

This app has two feature modules, calculator and facts. Each one has a routing module with a single path to navigate to the container component for that module.
The only other path in this app is in the main app-routing.module.ts file which redirects the default path of '' to go to the calculator path, making the
calculator module the default or landing page of the app.

## To Do

[x] Use common color

[ ] Move router links to header component
[ ] Style links
[ ] Hamburger menu for mobile
