export type Project = {
  title: string;
  description: string;
  href: string;
  /** Optional 16:9 hero image: a path under public/ or a full URL */
  imgSrc?: string;
};

const projects: Project[] = [
  {
    title: "pi-everos-memory",
    description: "EverOS-backed long-term memory for the pi coding agent.",
    href: "https://github.com/Mist-wu/pi-everos-memory",
  },
  {
    title: "y2b-rs",
    description:
      "Rust CLI/TUI for monitoring YouTube, translating subtitles with pi, and uploading to Bilibili.",
    href: "https://github.com/Mist-wu/y2b-rs",
  },
  {
    title: "qqbot",
    description:
      "QQ group chat bot built on NapCat: one model decides whether to speak, another decides what to say. Supports stickers, web search, and long-term memory.",
    href: "https://github.com/Mist-wu/qqbot",
  },
  {
    title: "financePi",
    description:
      "Pi-driven crypto trading agent with constrained tools and risk controls.",
    href: "https://github.com/Mist-wu/financePi",
  },
  {
    title: "cc-skills",
    description: "Claude Code skills I build and actually use.",
    href: "https://github.com/Mist-wu/cc-skills",
  },
  {
    title: "bupt-empty-classroom",
    description: "An app for finding empty classrooms at BUPT.",
    href: "https://github.com/Mist-wu/bupt-empty-classroom",
  },
];

export default projects;
