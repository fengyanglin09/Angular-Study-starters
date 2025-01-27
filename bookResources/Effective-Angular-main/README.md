# Effective Angular 
<img src="https://m.media-amazon.com/images/I/718bDAx1U7L._SY522_.jpg" align="right" height="400"></a>

This is the code repository for the [Effective Angular](https://www.amazon.com/dp/1805125532) book, published by Packt.

Develop applications of any size by effectively using Angular with Nx, RxJS, NgRx, and Cypress



## What is this book about?

Learn how to use the Angular framework effectively and develop scalable enterprise-ready applications using the latest techniques, such as standalone components, control flow, and Signals, implementing best practices and design patterns, and utilizing industry-standard libraries like NgRx, Nx, and Transloco. You will dive deep into the framework to learn about its features and master concepts like dependency injection, reactive programming, and state management. Starting with different front-end architecture designs and setting up a scalable environment for Angular applications and libraries using Nx, the book then takes you through the framework's newest and most powerful features. You’ll learn to manipulate the Document Object Model (DOM) with Angular directives, pipes, and
animations, and build reusable components like a pro.

**Effective Angular covers the following features:**
- Effectively using Nx to develop a monorepo ready to handle hundreds of Angular applications and libraries gracefully.
- Explore Angular's features by reducing complexity using standalone components, injecting dependencies with the inject function, managing state with signals, controlling template rending with control flow, and guarding your routes with simple functions.
- Manage application states using RxJS, Signals, and NgRx
- Explore reactive programming using Signals and RxJS
- Implement design patterns for scalable and maintainable Angular code
- Build dynamic and reusable components with content projection, template references and deferrable views
- Perform end-to-end, and unit testing in Angular with Cypress and Jest
- Optimize the performance of your Angular applications by deeply understanding change detection, utilizing Signals and preventing bad practices that impact performance

If you feel Effective Angular is the book for you, get [your copy](https://www.amazon.com/dp/1805125532) today!


## Technical requirements
- Visual Studio Code (VS Code) as your integrated development environment (IDE)
- Chrome web browser
- Angular 17.1 or higher
- NodeJS version v20.11.0 or higher
- TypeScript version 5.3.3 or higher
- Nx version v18.0.7 or higher


## Cloning the repository
To run the examples, please first clone the repository, as follows:

```
git clone https://github.com/PacktPublishing/Effective-Angular.git
```

# BusinessToolsMonorepo

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

✨ **This workspace has been generated by [Nx, a Smart, fast and extensible build system.](https://nx.dev)** ✨


## Start the app

To start the development server run `nx serve finance-expenses-registration`. Open your browser and navigate to http://localhost:4200/. Happy coding!


## Branches per chapter 
- [Branch including all to code](https://github.com/PacktPublishing/Effective-Angular)
- [Chapter 1: Scalable Front-end Architecture for Angular Applications](https://github.com/PacktPublishing/Effective-Angular/tree/feature/chapter-two/dependency-injection)
- [Chapter 2: Powerful Angular Features](https://github.com/PacktPublishing/Effective-Angular/tree/feature/chapter-two/dependency-injection)
- [Chapter 3: Enhancing Your Applications with Directives, Pipes, and Animations](https://github.com/PacktPublishing/Effective-Angular/tree/feature/chapter-three/directives-pipes-and-animations)
- [Chapter 4: Building Forms Like a Pro](https://github.com/PacktPublishing/Effective-Angular/tree/feature/chapter-four/building-forms-like-a-pro)
- [Chapter 5: Creating Dynamic Angular Components](https://github.com/PacktPublishing/Effective-Angular/tree/feature/chapter-five/dynamic-components)
- [Chapter 6: Applying Code Conventions and Design Patterns in Angular](https://github.com/PacktPublishing/Effective-Angular/tree/feature/chapter-six/code-conventions)
- [Chapter 7: Mastering Reactive Programming in Angular](https://github.com/PacktPublishing/Effective-Angular/tree/feature/chapter-seven/reactive-programming)
- [Chapter 8: Handling Application State with Grace](https://github.com/PacktPublishing/Effective-Angular/tree/feature/chapter-eight/state-management)
- [Chapter 9: Enhancing the Performance and Security of Angular Applications](https://github.com/PacktPublishing/Effective-Angular/tree/feature/chapter-nine/security-and-performance)
- [Chapter 10: Internationalization, Localization, and Accessibility of Angular Applications](https://github.com/PacktPublishing/Effective-Angular/tree/feature/chapter-ten/internationalization-accessibility)
- [Chapter 11: Testing Angular Applications](https://github.com/PacktPublishing/Effective-Angular/tree/feature/chapter-eleven/testing-angular-applications)
- [Chapter 12: Deploying Angular Applications](https://github.com/PacktPublishing/Effective-Angular)


## Generate code

If you happen to use Nx plugins, you can leverage code generators that might come with it.

Run `nx list` to get a list of available plugins and whether they have generators. Then run `nx list <plugin-name>` to see what generators are available.

Learn more about [Nx generators on the docs](https://nx.dev/plugin-features/use-code-generators).

## Running tasks

To execute tasks with Nx use the following syntax:

```
nx <target> <project> <...options>
```

You can also run multiple targets:

```
nx run-many -t <target1> <target2>
```

..or add `-p` to filter specific projects

```
nx run-many -t <target1> <target2> -p <proj1> <proj2>
```

Targets can be defined in the `package.json` or `projects.json`. Learn more [in the docs](https://nx.dev/core-features/run-tasks).

## Want better Editor Integration?

Have a look at the [Nx Console extensions](https://nx.dev/nx-console). It provides autocomplete support, a UI for exploring and running tasks & generators, and more! Available for VSCode, IntelliJ and comes with a LSP for Vim users.

## Errata
If you have purchased the book, please note the following correction:
* In some instances, where you see **»** in the code snippets, it should be replaced with **"** for correct syntax. We apologize for any confusion caused by this oversight.
* Page 65, Second code snippet, instead of :
  ```
  export const navigateFn = () => (url: string) => inject(Router).
  navigate([url]);
  export class baseService {
    protected _navigateFn = navigateFn();
  }
  ```
  _it should be_
  ```
  export const navigateFn = () => {
    const router = inject(Router);
    return (url: stirng) => router.navigate([url]);
  }

  export class baseService {
     protected _navigateFn = navigateFn();
  }
  ```

