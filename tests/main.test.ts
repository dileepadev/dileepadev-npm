import { describe, it, expect } from "vitest";
import {
  greet,
  getName,
  getAbout,
  getContact,
  getSocials,
  getVersion,
  profile,
} from "../src/main.js";

describe("greet", () => {
  it("should return default greeting when no name is provided", () => {
    expect(greet()).toBe("Hello, World!");
  });

  it("should return greeting with the provided name", () => {
    expect(greet("Dileepa")).toBe("Hello, Dileepa!");
  });

  it("should handle empty string", () => {
    expect(greet("")).toBe("Hello, !");
  });
});

describe("getName", () => {
  it("should return the profile name", () => {
    expect(getName()).toBe("Dileepa Bandara");
  });
});

describe("getAbout", () => {
  it("should return an array of description paragraphs", () => {
    const about = getAbout();
    expect(Array.isArray(about)).toBe(true);
    expect(about.length).toBeGreaterThan(0);
  });

  it("should match profile description", () => {
    expect(getAbout()).toEqual(profile.description);
  });
});

describe("getContact", () => {
  it("should return the contact email", () => {
    expect(getContact()).toBe("contact@dileepa.dev");
  });
});

describe("getSocials", () => {
  it("should return an object with social links", () => {
    const socials = getSocials();
    expect(socials).toBeTypeOf("object");
    expect(socials).toHaveProperty("github");
    expect(socials).toHaveProperty("linkedin");
    expect(socials).toHaveProperty("website");
  });

  it("should contain valid URLs", () => {
    const socials = getSocials();
    for (const [key, value] of Object.entries(socials)) {
      if (key !== "email") {
        expect(value).toMatch(/^https?:\/\//);
      }
    }
  });
});

describe("getVersion", () => {
  it("should return a valid semver string", () => {
    const version = getVersion();
    expect(version).toMatch(/^\d+\.\d+\.\d+$/);
  });

  it("should return the current version", () => {
    expect(getVersion()).toBe("0.1.0");
  });
});
