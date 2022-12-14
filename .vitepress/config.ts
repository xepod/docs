import { defineConfig } from 'vitepress';

export default defineConfig({
  lang: 'zh',
  title: 'docs',
  description: 'docs',

  // for depoly to GitHub Pages
  base: '/docs/',

  themeConfig: {
    siteTitle: 'Xepod',

    sidebar: [
      {
        items: [
          { text: '简介', link: '/docs/introduction' },
          { text: '命令', link: '/docs/command' },
          { text: '为什么又一款包管理', link: '/docs/why-another' },
        ],
      },
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022 mashisora',
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/xepod' }],
  },
});
