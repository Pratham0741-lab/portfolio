/**
 * =========================================================================
 * PORTFOLIO DATA CONFIGURATION
 * 
 * All copy and text content is defined in this configuration file.
 * To customize this portfolio, replace the placeholder values below with
 * your personal information, projects, skills, and links.
 * =========================================================================
 */

export const siteConfig = {
  initials: "YN",
  name: "Your Name",
  firstName: "Your",
  lastName: "Name",
  eyebrow: "HELLO, I'M",
  bio: "Replace with your personal bio sentence describing your engineering focus, background, or current specialization.",
  ctaText: "View my work",
  ctaHref: "#projects",
  // Three stacked label/value pairs for the hero info column
  infoColumn: [
    { label: "LOCATION", value: "City, Country" },
    { label: "EDUCATION / ROLE", value: "University or Current Organization" },
    { label: "AREAS OF FOCUS", value: "Topic One, Topic Two, Topic Three" },
  ],
  // Hero pull-quote block (two-line italic serif quote with burgundy highlight + supporting text)
  quoteBlock: {
    quoteBefore: "“A memorable quote or guiding philosophy that describes your approach to ",
    quoteHighlight: "crafting enduring software",
    quoteAfter: " and design.”",
    supportingSentence: "Supporting sentence providing additional context or personal philosophy on engineering and design.",
  },
  // Interests statement with highlighted phrase (solid burgundy background with white text)
  interests: {
    beforeText: "Replace this paragraph with a statement about your technical interests, research curiosities, and personal hobbies. Highlighting ",
    highlightedText: "one key sentence or phrase here",
    afterText: " that represents your primary creative or engineering focus.",
  },
  // Contact links
  contactLinks: [
    { label: "Email", href: "mailto:your.email@example.com" },
    { label: "GitHub", href: "https://github.com/yourusername" },
    { label: "LinkedIn", href: "https://linkedin.com/in/yourusername" },
  ],
  // Navigation links
  navLinks: [
    { label: "Home", href: "#home" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "About", href: "#about" },
  ],
};

/**
 * Exactly FOUR full-width project rows.
 * Accent colors (in exact order):
 *  1. Deep burgundy: #5C1A22
 *  2. Dark teal-black: #0E2E28
 *  3. Aubergine / deep plum: #2E1A33
 *  4. Burnt ochre: #8A5A1E
 */
export const projects = [
  {
    id: 1,
    title: "Project Title 1",
    description: "A short, compelling description of this project summarizing its purpose, core technical architecture, and impact.",
    accentColor: "#5C1A22", // Deep burgundy
    accentGradient: "linear-gradient(135deg, #6B1E28 0%, #5C1A22 55%, #421118 100%)",
    layout: "text-left",
    mediaPlaceholder: true,
    projectUrl: "#",
  },
  {
    id: 2,
    title: "Project Title 2",
    description: "A short, compelling description of this project summarizing its purpose, core technical architecture, and impact.",
    accentColor: "#0E2E28", // Dark teal-black
    accentGradient: "linear-gradient(135deg, #153B34 0%, #0E2E28 55%, #081F1B 100%)",
    layout: "text-right",
    mediaPlaceholder: true,
    projectUrl: "#",
  },
  {
    id: 3,
    title: "Project Title 3",
    description: "A short, compelling description of this project summarizing its purpose, core technical architecture, and impact.",
    accentColor: "#2E1A33", // Aubergine / deep plum
    accentGradient: "linear-gradient(135deg, #3C2243 0%, #2E1A33 55%, #1E1022 100%)",
    layout: "text-left",
    mediaPlaceholder: true,
    projectUrl: "#",
  },
  {
    id: 4,
    title: "Project Title 4",
    description: "A short, compelling description of this project summarizing its purpose, core technical architecture, and impact.",
    accentColor: "#8A5A1E", // Burnt ochre
    accentGradient: "linear-gradient(135deg, #9C6724 0%, #8A5A1E 55%, #6B4212 100%)",
    layout: "text-right",
    mediaPlaceholder: true,
    projectUrl: "#",
  },
];

/**
 * Skills Categories (solid fill chip cycling through matching accent colors)
 */
export const skillGroups = [
  {
    id: "programming",
    name: "Programming",
    accentColor: "#5C1A22", // Row 1 accent (deep burgundy)
    skills: [
      "Language / Skill 1",
      "Language / Skill 2",
      "Language / Skill 3",
      "Language / Skill 4",
      "Language / Skill 5",
    ],
  },
  {
    id: "ml-ai",
    name: "Machine Learning & AI",
    accentColor: "#0E2E28", // Row 2 accent (dark teal-black)
    skills: [
      "Framework / Skill 1",
      "Framework / Skill 2",
      "Framework / Skill 3",
      "Framework / Skill 4",
      "Framework / Skill 5",
    ],
  },
  {
    id: "web-dev",
    name: "Web Development",
    accentColor: "#2E1A33", // Row 3 accent (aubergine/deep plum)
    skills: [
      "Tool / Skill 1",
      "Tool / Skill 2",
      "Tool / Skill 3",
      "Tool / Skill 4",
      "Tool / Skill 5",
    ],
  },
  {
    id: "tools-platforms",
    name: "Tools & Platforms",
    accentColor: "#8A5A1E", // Row 4 accent (burnt ochre)
    skills: [
      "Platform / Skill 1",
      "Platform / Skill 2",
      "Platform / Skill 3",
      "Platform / Skill 4",
      "Platform / Skill 5",
    ],
  },
];

/**
 * Interests statement with highlighted phrase (solid burgundy background with white text)
 */
export const interestsText = {
  beforeText: "Replace this paragraph with a statement about your technical interests, research curiosities, and personal hobbies. Highlighting ",
  highlightedText: "one key sentence or phrase here",
  afterText: " that represents your primary creative or engineering focus.",
};
