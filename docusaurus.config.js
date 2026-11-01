// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Audit Intelligence — Use-Case Study',
  tagline: 'Proposed deterministic audit workflows for Indian CA firms',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://alokrathava.github.io',
  baseUrl: '/audit-intelligence-docs-site/',

  organizationName: 'alokrathava',
  projectName: 'audit-intelligence-docs-site',
  trailingSlash: false,

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Audit Intelligence | Use Cases',
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docsSidebar',
            position: 'left',
            label: 'Explore Use Cases',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Author',
            items: [
              {label: 'Alok Rathava — LinkedIn', href: 'https://www.linkedin.com/in/alokrathava/'},
            ],
          },
        ],
        copyright: `Audit Intelligence — proposed use-case documentation. Authored by Alok Rathava.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
