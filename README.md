# Introduction
 In this project we integrate social login of Google and Facebook to Login into app
 this project create using angular 7
 1) First run command `npm install`

 2) To run project us `ng serve`.

 # Steps to run project using Google and Facebook
 1) [google Integration](https://developers.google.com/identity/sign-in/web/sign-in) read this documentation 
    1.1) Congfigure your project and create client id of google copy your `client id` in `app.module.ts`
 2) [Facebook Integration](https://developers.facebook.com/docs)
    2.1) `log in` the application using your facebook account and then click on `My App` and Create `own App` and enter all information

    2.2) copy the `App Id` and paste in `app.Module.ts`
  ## 2.1 Use Full Link to integrate Facebook
    1) [Part 1 of steps of setup](https://medium.com/developing-an-angular-4-web-app/adding-facebook-oauth-to-our-app-1fe597f454a1)
    2) [Part 2 of Steps of setup](https://medium.com/developing-an-angular-4-web-app/adding-facebook-oauth-to-our-app-a4066a320694)

 # Link of angularx-social-login

 1) [npm link](https://www.npmjs.com/package/angularx-social-login).
 2) [youtube video link] (https://www.youtube.com/watch?v=QyzJQ5xsk7U)
 
# FacebookIntegration

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.4.

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

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
