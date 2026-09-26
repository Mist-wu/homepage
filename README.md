<div align="center">

# homepage

**[mistwu.com](https://mistwu.com) 的源码：博客、项目和关于页。**

基于 [AstroPaper](https://github.com/satnaing/astro-paper) 主题，静态构建后部署在 Cloudflare Workers 上。

[![Astro](https://img.shields.io/badge/Astro-7-BC52EE?logo=astro&logoColor=white)](https://astro.build/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Cloudflare Workers](https://img.shields.io/badge/Cloudflare-Workers-F38020?logo=cloudflare&logoColor=white)](https://workers.cloudflare.com/)
[![License](https://img.shields.io/badge/license-MIT-22c55e)](LICENSE)

</div>

---

## 特性

- **博客**：Markdown / MDX 写文章，支持标签、归档、分页、RSS 和 sitemap。
- **项目页**：在一个数据文件里列出项目，自动渲染成卡片。
- **全站搜索**：构建时用 [Pagefind](https://pagefind.app/) 生成静态索引，不需要后端。
- **动态 OG 图**：每篇文章用 Satori 自动生成分享卡片。
- **明暗主题**：跟随系统，也可以手动切换。

## 快速开始

需要 Node.js ≥ 22.12 和 pnpm。

```bash
git clone https://github.com/Mist-wu/homepage.git && cd homepage
pnpm install
pnpm dev
```

## 写作与修改

| 想改什么 | 改哪里 |
| --- | --- |
| 文章 | `src/content/posts/*.md(x)` |
| 关于页 | `src/content/pages/about.md` |
| 项目列表 | `src/data/projects.ts` |
| 站点信息、社交链接、功能开关 | `astro-paper.config.ts` |
| 配色 / 排版 | `src/styles/` |

文章 frontmatter 至少需要：

```yaml
---
title: 标题
description: 一句话摘要
pubDatetime: 2026-09-26T12:00:00+08:00
tags: [notes]
---
```

加上 `draft: true` 不发布，`featured: true` 放进首页的精选区。

## 部署

```bash
pnpm run deploy
```

构建（`astro check` → `astro build` → Pagefind 索引）后用 Wrangler 把 `dist/` 作为静态资源部署到 Cloudflare Workers，自定义域名 mistwu.com 在 Cloudflare 控制台绑定。

## 开发

```bash
pnpm build     # 类型检查 + 构建 + 搜索索引
pnpm preview   # 预览构建结果
pnpm lint
pnpm format
```

## 致谢

- [AstroPaper](https://github.com/satnaing/astro-paper)：主题
- [Astro](https://astro.build/)：框架
- [Pagefind](https://pagefind.app/)：静态搜索

## License

[MIT](LICENSE)
