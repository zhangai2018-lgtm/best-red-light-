export const SITE = {
  website: "https://astro-paper.pages.dev/",
  author: "AeroGlass Team",
  profile: "https://yourdomain.com/",
  desc: "Expert reviews of the best window cleaning robots.",
  title: "AeroGlass Reviews",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: false,   // ← 关掉深色模式
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000,
  showArchives: false,       // ← 关掉归档
  showBackButton: true,
  editPost: {
    enabled: false,
    text: "Edit page",
    url: "https://github.com/satnaing/astro-paper/edit/main/",
  },
  dynamicOgImage: true,
  dir: "ltr",
  lang: "en",
  timezone: "Asia/Bangkok",
} as const;
