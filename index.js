#!/usr/bin/env node
/**
 * Simple utilities for the dileepadev-npm package.
 * @module dileepadev-npm
 */

/**
 * Return a friendly greeting.
 *
 * @param {string} [name='World'] - Name to greet.
 * @returns {string} Greeting message.
 */
function greet(name = 'World') {
  return `Hello, ${name}!`;
}

// if executed as a script, act as CLI
if (require.main === module) {
  const name = process.argv[2] || 'World';
  console.log(greet(name));
}

module.exports = {
  greet,
};
