import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "A Kiwi write something there",
  description: "It's a vitepress template project for newbie 👶.",
  base: "/grandpaKiwi_blog/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      {
        text: '我的文章',
        items: [
          { text: 'My First Article', link: '/read/my_first_md.md' },
          { text: '2025年8月 CDXCTF Writeup', link: '/CDXCTF/CDXCTF_list.md' },
          { text: '報告清單', link: '/報告/報告_list.md' },
        ]
      }
    ],

    sidebar: [
      {
        text: '側邊欄',
        items: [
          { text: 'My First Article', link: '/read/my_first_md.md' },
          { text: '2025年8月 CDXCTF Writeup', link: '/CDXCTF/CDXCTF_list.md' },
        ]
      }
    ], 

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
