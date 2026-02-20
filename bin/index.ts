#!/usr/bin/env node
/**
 * Simple utilities for the dileepadev-npm package.
 * @module dileepadev-npm
 */

import {
  greet,
  getAbout,
  getContact,
  getName,
  getSocials,
  getVersion,
} from "../src/main.js";

const isMain =
  process.argv[1].endsWith("index.js") ||
  process.argv[1].endsWith("index.ts") ||
  process.argv[1].endsWith("dileepadev") ||
  process.argv[1].endsWith("dileepadev-npm");

if (isMain) {
  const command = process.argv[2];

  switch (command) {
    case "version":
    case "-v":
    case "--version":
      console.log(getVersion());
      break;

    case "about":
    case "--about":
      console.log(getAbout().join("\n\n"));
      break;

    case "contact":
    case "--contact":
      console.log(`Email: ${getContact()}`);
      break;

    case "socials":
    case "--socials":
      const socials = getSocials();
      Object.entries(socials).forEach(([platform, url]) => {
        console.log(
          `${platform.charAt(0).toUpperCase() + platform.slice(1)}: ${url}`,
        );
      });
      break;

    case "name":
    case "--name":
      console.log(getName());
      break;

    case "help":
    case "--help":
    case "-h":
      console.log(`
Usage: dileepadev-npm [command]

Commands:
  version, -v, --version   Show version
  about, --about           Show about me
  contact, --contact       Show contact email
  socials, --socials       Show social links
  name, --name             Show name
  help, -h, --help         Show this help message
      `);
      break;

    default:
      // Default behavior (greeting) if no specific command matches,
      // or treat the argument as a name if it's not a recognized command flag
      // dependent on desired behavior.
      // Given the original was `greet(name)`, let's keep that for backward compatibility
      // if it looks like a name (not starting with -)
      if (command && !command.startsWith("-")) {
        console.log(greet(command));
      } else {
        console.log(greet("World"));
      }
      break;
  }
}
