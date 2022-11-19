import { defineConfig } from 'vitepress';

export default defineConfig({
  lang: 'zh',
  title: 'docs',
  description: 'blog',
  base: '/',

  themeConfig: {
    siteTitle: 'Xepod',

    sidebar: [
      {
        items: [
          { text: '简介', link: '/docs/introduction' },
          { text: '命令', link: '/docs/command' },
          { text: 'Rack', link: '/docs/manifest' },
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
