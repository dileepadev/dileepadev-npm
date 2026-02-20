# dileepadev-npm

A tiny utility npm package for demonstrating publishing and distribution.  

## Installation

```bash
npm install @dileepadev/npm # or your scoped package name
```

## Usage

### As a library

```js
import { greet } from 'dileepadev-npm';

console.log(greet('world'));
// → "Hello, world!"
```

### As a CLI

The package provides an executable. Install globally or use `npx`:

```bash
npx dileepadev-npm Alice
```

Then run (if installed globally):

```bash
dileepadev-npm Bob
# → Hello, Bob!
```

Omitting the name prints a greeting for "World":

```bash
dileepadev-npm
# → Hello, World!
```

## API

### `greet(name)`

Returns a simple greeting string. If no
name is provided it defaults to `"World"`.

## Development

```bash
# Install dependencies
npm install

# Build the project
npm run build
```

- Edit the source code in `src/` or `bin/`, then run the build command.
- Publish new versions via `npm version`/`npm publish`.

## License

MIT
