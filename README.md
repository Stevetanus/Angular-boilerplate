# Boilerplate

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.1.5.

## Development server

To start a local development server, run:

```bash
npm run start
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Feature
1. [Tailwind CSS](https://tailwindcss.com/docs/installation/framework-guides/angular)

2. [ESLint](https://github.com/angular-eslint/angular-eslint) 
    use `eslint.config.ts` to lint the file associate with Angular
3. [Prettier](https://prettier.io/docs/configuration)
    use `prettierrc` to format file
4. [Husky](https://typicode.github.io/husky/how-to.html)
    in `.husky/pre-commit` define what to do when you commit, it will use lint and write your files with ESLint and Prettier
5. [i18n with ngx-translate](https://ngx-translate.org/getting-started/installation/)
    translate language with ease


## Todo
1. routes-example
2. firebase-auth, auth-guard
3. Formmodule, ReactiveFormModule
4. CI
5. Popup components
6. Maybe add MUI
7. environment(dev, production)
8. SSR
9. Services store
10. Mock API
