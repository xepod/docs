import { defineConfig } from 'vitepress';

export default defineConfig({
  lang: 'zh',
  title: 'docs',
  description: 'blog',
  base: '/',

  themeConfig: {
    siteTitle: 'xepod',

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022 mashisora',
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/xepod' }],
  },
});
