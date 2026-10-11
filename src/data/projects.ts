export type Project = {
  title: string;
  description: string;
  href: string;
  /** Optional 16:9 hero image: a path under public/ or a full URL */
  imgSrc?: string;
};

const projects: Project[] = [
  {
    title: "hire",
    description: "Recruitment platform for AI agents.",
    href: "https://github.com/Mist-wu/hire",
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
];

export default projects;
