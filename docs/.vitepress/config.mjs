import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "A Newbie-friendly Vitepress Template Project",
  description: "It's a vitepress template project for newbie 👶.",
  base: "/grandpaKiwi_blog/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首頁', link: '/' },
      { text: '第一篇測試', link: '/my_first_md' },
    ],

    sidebar: [
      {
        text: '側邊欄',
        items: [
          { text: '第一篇測試', link: '/my_first_md' },
        ]
      }
    ], 

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})