To generate a new application, use:

```sh
npx nx g @nx/angular:app demo
```

To generate a new library, use:

```sh
npx nx g @nx/angular:lib mylib
```


to show structure of the projects, run:

```sh   
npx nx graph
```

Testing and Linting

To run tests/lint for a specific project, use:

```sh   
npx nx test <project-name>
npx nx lint <project-name>
```


To set up Tailwind CSS in your Angular project, you can use the following command:
```shell
npx nx g @nx/angular:setup-tailwind my-project
```


To generate an Angular application with Tailwind CSS configured run:

```shell
npx nx g @nx/angular:app apps/my-app --add-tailwind
```


To generate an Angular buildable library with Tailwind CSS configured run:

```shell
npx nx g @nx/angular:lib libs/my-lib --buildable --add-tailwind
```


To add Tailwind CSS to an existing Angular application, buildable library or publishable library, run:
```shell
npx nx g @nx/angular:setup-tailwind my-project
```
