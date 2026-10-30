export type Project = {
  title: string;
  description: string;
  href: string;
  /** Optional 16:9 hero image: a path under public/ or a full URL */
  imgSrc?: string;
};

const projects: Project[] = [
  {
    title: "run.bupt8.com",
    description: "Check and upload BUPT campus running records.",
    href: "https://run.bupt8.com",
  },
  {
    title: "qqbot",
    description: "QQ group chat bot combining language model with decision model.",
    href: "https://github.com/Mist-wu/qqbot",
  },
  {
    title: "y2b-rs",
    description: "Rust CLI/TUI for YouTube monitoring and Bilibili upload.",
    href: "https://github.com/Mist-wu/y2b-rs",
  },
  {
    title: "pi-extensions",
    description: "Extensions for the Pi coding agent.",
    href: "https://github.com/Mist-wu/pi-extensions",
  },
  {
    title: "cc-skills",
    description: "Claude Code skills I build and actually use.",
    href: "https://github.com/Mist-wu/cc-skills",
  },
  {
    title: "txt.mistwu.com",
    description: "Turn videos and images into ASCII art, right in the browser.",
    href: "https://txt.mistwu.com",
  },
  {
    title: "tree.mistwu.com",
    description: "A blog template that turns folders and files into a pixel tree.",
    href: "https://tree.mistwu.com",
  },
  {
    title: "bayes.mistwu.com",
    description: "Interactive Bayesian search game: find the target in a 10×10 sea.",
    href: "https://bayes.mistwu.com",
  },
  {
    title: "prob.mistwu.com",
    description: "Explore probability through interactive simulations.",
    href: "https://prob.mistwu.com",
  },
  {
    title: "orbit.mistwu.com",
    description: "A space-themed blog for articles, short notes, and photos.",
    href: "https://orbit.mistwu.com",
  },
];

export default projects;
