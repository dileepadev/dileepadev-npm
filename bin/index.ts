#!/usr/bin/env node
/**
 * Simple utilities for the dileepadev-npm package.
 * @module dileepadev-npm
 */

import { greet } from '../src/index.js';

// if executed as a script, act as CLI
const isMain = process.argv[1].endsWith('index.js') || process.argv[1].endsWith('index.ts') || process.argv[1].endsWith('dileepadev') || process.argv[1].endsWith('dileepadev-npm');

if (isMain) {
  const name = process.argv[2] || 'World';
  console.log(greet(name));
}
