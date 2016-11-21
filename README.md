# gtr-test-xray

GTR Test XRAY is a DSL Test library for the guitar test app.  It is imported
into other node.js applications as a dependency and exposes an API layer 
that describes how we talk to our application through selenium and WebdriverIO.

## Setup

```
nvm use
npm install install
```

### Build The Page Objects from source

```
npm run build
```

### API Docs

```
npm run build-docs
npm run show-docs
```

### Implementation

gtr-test-xray can be implemented by several ways for local development or actual testing.

1. `npm install --save gtr-test-xray` Then wire dependency injector to look for the node module. 
2. `npm link` to the git repository on you machine`
3. Initialize this repo as a submodule.