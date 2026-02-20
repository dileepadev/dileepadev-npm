# dileepadev-npm

A simple utility npm package that provides information about **Dileepa Bandara**. Use it as a library to access my profile details programmatically or as a CLI tool to get my contact info, bio, and social links instantly.

## Installation

```bash
npm install @dileepadev/npm # or your scoped package name
```

## Usage

### As a library

```js
import { greet, getAbout, getContact, getSocials } from 'dileepadev-npm';

console.log(greet('Dileepa'));
// → "Hello, Dileepa!"

console.log(getAbout());
// → [ "I'm an Associate AI Engineer...", ... ]

console.log(getContact());
// → "contact@dileepa.dev"

console.log(getSocials());
// → { "github": "https://github.com/dileepadev", ... }
```

### As a CLI

The package provides an executable. Install globally or use `npx`:

```bash
# Get general help and command list
npx dileepadev-npm --help

# Show about section
npx dileepadev-npm about

# Show contact details
npx dileepadev-npm contact

# Show social links
npx dileepadev-npm socials

# Get a friendly greeting
npx dileepadev-npm Alice
# → Hello, Alice!
```

## API

### `greet(name)`

Returns a simple greeting string. Defaults to `"World"`.

### `getName()`

Returns the profile name.

### `getAbout()`

Returns an array of strings describing the profile.

### `getContact()`

Returns the contact email address.

### `getSocials()`

Returns an object mapping social platforms to their URLs.

### `getVersion()`

Returns the package version.

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
