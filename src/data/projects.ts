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
    title: "kong.bupt8.com",
    description: "Web app for finding empty classrooms at BUPT.",
    href: "https://kong.bupt8.com",
  },
  {
    title: "vtxt",
    description: "Turn videos and images into ASCII art, right in the browser.",
    href: "https://vtxt.pages.dev",
  },
  {
    title: "bysou",
    description: "Interactive Bayesian search game: find the target in a 10×10 sea.",
    href: "https://bysou.pages.dev",
  },
];

export default projects;
