/**
 * Return a friendly greeting.
 *
 * @param {string} [name='World'] - Name to greet.
 * @returns {string} Greeting message.
 */
export function greet(name: string = "World"): string {
  return `Hello, ${name}!`;
}

/**
 * User profile information.
 */
export const profile = {
  connect: [
    "I love meeting new people and sharing meaningful moments. Feel free to follow, leave a comment, or just say hello on any of the platforms below!",
    "Whether you have a question, an idea, or just want to reach out, I'd love to hear from you. Drop me a message anytime!",
  ],
  description: [
    "I'm an Associate AI Engineer with expertise in artificial intelligence, software development, and cloud computing. I enjoy solving real-world problems through code and building impactful solutions that improve people's lives.",
    "With hands-on experience in Python, TypeScript, and Azure, I specialize in designing and deploying AI systems that deliver real business value. I am particularly interested in the intersection of AI and human-computer interaction, focusing on creating technologies that enhance human capabilities rather than replace them.",
    "Outside of work, I explore research, contribute to open-source projects, and stay up to date with the latest in AI. I also enjoy giving back to the community by volunteering, sharing knowledge, and creating content to help others grow and reach their goals.",
  ],
  links: {
    email: "contact@dileepa.dev",
    facebook: "https://facebook.com/dileepadev",
    github: "https://github.com/dileepadev",
    instagram: "https://instagram.com/dileepadev",
    linkedin: "https://linkedin.com/in/dileepadev",
    website: "https://dileepa.dev",
    xtwitter: "https://twitter.com/dileepadev",
    youtube: "https://youtube.com/@dileepadev",
  },
  name: "Dileepa Bandara",
  tagline:
    "I'm an AI Engineer passionate about building intelligent solutions that make a difference.",
  title: "AI Engineer",
};

/**
 * Get the user's name.
 * @returns {string} The user's name.
 */
export function getName(): string {
  return profile.name;
}

/**
 * Get the user's about section.
 * @returns {string[]} Array of description paragraphs.
 */
export function getAbout(): string[] {
  return profile.description;
}

/**
 * Get the user's contact email.
 * @returns {string} The contact email.
 */
export function getContact(): string {
  return profile.links.email;
}

/**
 * Get the user's social media links.
 * @returns {Record<string, string>} Object containing social media links.
 */
export function getSocials(): Record<string, string> {
  return profile.links;
}

/**
 * Get the package version.
 * @returns {string} The package version.
 */
export function getVersion(): string {
  return "0.1.0";
}
