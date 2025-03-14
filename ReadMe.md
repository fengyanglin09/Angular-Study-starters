## Creating a nx workspace with angular preset

```shell
npx create-nx-workspace@latest my-angular-workspace --preset=angular
```

## Build, test and lint your app

```shell
# Build
nx build 
# Test
nx test 
# Lint
nx lint 
# Run them together!
nx run-many -t build test lint
```

## View project details

```shell
nx show project my-angular-library-workspace
```

## View interactive project graph

```shell
nx graph    
```

## Add UI Library

```shell
# Generate UI lib
nx g @nx/angular:lib ui
# Add a component
nx g @nx/angular:component ui/src/lib/button
```