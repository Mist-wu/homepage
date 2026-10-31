export const projectCategories = [
  "Creative Web",
  "Tools & Automation",
  "Simulations",
] as const;

type Project = {
  category: (typeof projectCategories)[number];
  title: string;
  description: string;
  href: string;
  /** Optional 16:9 hero image: a path under public/ or a full URL */
  imgSrc?: string;
};

const projects: Project[] = [
  {
    title: "run.bupt8.com",
    category: "Tools & Automation",
    description: "Check and upload BUPT campus running records.",
    href: "https://run.bupt8.com",
  },
  {
    title: "qqbot",
    category: "Tools & Automation",
    description:
      "QQ group chat bot combining language model with decision model.",
    href: "https://github.com/Mist-wu/qqbot",
  },
  {
    title: "y2b-rs",
    category: "Tools & Automation",
    description: "Rust CLI/TUI for YouTube monitoring and Bilibili upload.",
    href: "https://github.com/Mist-wu/y2b-rs",
  },
  {
    title: "pi-extensions",
    category: "Tools & Automation",
    description: "Extensions for the Pi coding agent.",
    href: "https://github.com/Mist-wu/pi-extensions",
  },
  {
    title: "cc-skills",
    category: "Tools & Automation",
    description: "Claude Code skills I build and actually use.",
    href: "https://github.com/Mist-wu/cc-skills",
  },
  {
    title: "art.mistwu.com",
    category: "Creative Web",
    description:
      "Explore 56 public-domain paintings in an interactive 3D gallery.",
    href: "https://art.mistwu.com",
  },
  {
    title: "tree.mistwu.com",
    category: "Creative Web",
    description:
      "A blog template that turns folders and files into a pixel tree.",
    href: "https://tree.mistwu.com",
  },
  {
    title: "bayes.mistwu.com",
    category: "Simulations",
    description:
      "Interactive Bayesian search game: find the target in a 10×10 sea.",
    href: "https://bayes.mistwu.com",
  },
  {
    title: "prob.mistwu.com",
    category: "Simulations",
    description: "Explore probability through interactive simulations.",
    href: "https://prob.mistwu.com",
  },
  {
    title: "orbit.mistwu.com",
    category: "Creative Web",
    description: "A space-themed blog for articles, short notes, and photos.",
    href: "https://orbit.mistwu.com",
  },
  {
    title: "txt.mistwu.com",
    category: "Creative Web",
    description: "Turn videos and images into ASCII art, right in the browser.",
    href: "https://txt.mistwu.com",
  },
];

export default projects;
