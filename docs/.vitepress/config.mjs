import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "A Newbie-friendly Vitepress Template Project",
  description: "It's a vitepress template project for newbie 👶.",
  base:"/grandpaKiwi_blog/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      {
        text: '我的文章',
        items: [
          { text: 'My First Article', link: '/read/my_first_md.md' },
          { text: '2025年8月 CDXCTF Writeup', link: 'docs/CDXCTF/CDXCTF_list.md' },
        ]
      }
    ],


    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
