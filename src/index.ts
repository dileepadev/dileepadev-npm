/**
 * Return a friendly greeting.
 *
 * @param {string} [name='World'] - Name to greet.
 * @returns {string} Greeting message.
 */
export function greet(name: string = 'World'): string {
  return `Hello, ${name}!`;
}
