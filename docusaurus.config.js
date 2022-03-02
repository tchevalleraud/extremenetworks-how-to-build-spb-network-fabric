// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Extreme Networks - How to build',
  tagline: 'SPB Network Fabric',
  url: 'https://tchevalleraud.github.io',
  baseUrl: '/extremenetworks-how-to-build-spb-network-fabric/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/extremenetworks.ico',
  organizationName: 'tchevalleraud', // Usually your GitHub org/user name.
  projectName: 'extremenetworks-how-to-build-spb-network-fabric', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  i18n:{
    defaultLocale: 'en',
    locales: ['en', 'fr']
  },
  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
      },
    ],
  ],
  themeConfig:
    ({
      navbar: {
        style: 'dark',
        title: 'How to build - SPB Network Fabric',
        logo: {
          alt: 'Extreme Networks',
          src: 'img/extremenetworks-white.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Tutorial',
          },
          {
            type: "localeDropdown",
            position: "right"
          },
          {
            href: 'https://github.com/tchevalleraud/extremenetworks-how-to-build-spb-network-fabric',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Extreme Networks Website',
                href: 'https://www.extremenetworks.com/',
              },
              {
                label: 'Extreme Networks Github',
                href: 'https://github.com/extremenetworks',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/tchevalleraud/extremenetworks-how-to-build-spb-network-fabric',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
