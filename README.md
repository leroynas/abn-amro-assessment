# abn-amro-assessment

Small assessment project for ABN AMRO.

## Architecture

For the architecture I chose for a simple approach, because the application is very small I didn't choose for a domain driven design for example. There are no globally defined components, because of the simplicity of this application I didn't see the need to create a global button component or a card component. The card used in the TV Shows grid is so specific for that use case that creating a global card here wouldn't make any sense.

## Used dependencies

- lodash.debounce -> debouncing search input to reduce amount of calls.
- fortawesome -> icon package.
- body-scroll-lock -> Only easy and safe way to lock the body when a modal is opened.

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Run your unit tests

```
yarn test:unit
```

### Lints and fixes files

```
yarn lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
