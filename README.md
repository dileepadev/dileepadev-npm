# dileepadev-npm

A tiny utility npm package for demonstrating publishing and distribution.  

## Installation

```bash
npm install @dileepadev/npm # or your scoped package name
```

## Usage

### As a library

```js
const { greet } = require('dileepadev-npm');

console.log(greet('world'));
// → "Hello, world!"
```

### As a CLI

The same file provides the executable. Install globally or use `npx`:

```bash
npm install -g @dileepadev/npm    # or your package name
# or
npx dileepadev Alice
```

Then run:

```bash
dileepadev Bob
# → Hello, Bob!
```

Omitting the name prints a greeting for "World":

```bash
dileepadev
# → Hello, World!
```

## API

### `greet(name)`

Returns a simple greeting string. If no
name is provided it defaults to `"World"`.

## Development

- Edit the source code and publish new versions via `npm version`/`npm publish`.

## License

MIT
