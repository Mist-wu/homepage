import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://mistwu.com/",
    title: "Mist Wu",
    description: "Student at BUPT. I build things for the web.",
    author: "Mist Wu",
    profile: "https://github.com/Mist-wu",
    ogImage: "default-og.jpg",
    lang: "en",
    timezone: "Asia/Shanghai",
    dir: "ltr",
  },
  posts: {
    perPage: 4,
    perIndex: 4,
    scheduledPostMargin: 15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: true,
    showBackButton: true,
    editPost: {
      enabled: true,
      url: "https://github.com/Mist-wu/homepage/edit/main/",
    },
    search: "pagefind",
  },
  socials: [
    { name: "x",        url: "https://x.com/istMnoob" },
    { name: "bilibili", url: "https://space.bilibili.com/499802523" },
    // For WeChat, url is the QR code image shown on hover
    { name: "wechat",   url: "https://raw.githubusercontent.com/Mist-wu/my-assert/refs/heads/main/pic/wechatQR.jpg" },
    { name: "mail",     url: "mailto:vertexgod@bupt.edu.cn" },
    { name: "github",   url: "https://github.com/Mist-wu" },
  ],
  shareLinks: [
    { name: "x",      url: "https://x.com/intent/post?url=" },
    // WeChat has no web share URL; rendered as a QR code popover instead
    { name: "wechat", url: "", linkTitle: "Share this post on WeChat" },
    { name: "mail",   url: "mailto:?subject=See%20this%20post&body=" },
  ],
});