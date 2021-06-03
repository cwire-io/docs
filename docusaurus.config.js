/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'CWIRE - Docs',
  tagline: 'Build your internal frontend from your ORM schema in minutes',
  url: 'https://cwire-io.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'cwire-io',
  projectName: 'docs',
  themeConfig: {
    navbar: {
      logo: {
        alt: 'CWire Logo',
        src: 'img/cwire.svg',
      },
      items: [
        {
          type: 'doc',
          label: 'Docs',
          position: 'left',
          docId: 'introduction',
        },
        {
          label: 'App',
          position: 'right',
          href: 'https://app.cwire.io',
        },
        {
          label: 'GitHub',
          position: 'right',
          href: 'https://github.com/cwire-io',
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
              label: 'Introduction',
              to: '/docs/introduction',
            },
            {
              label: 'NodeJS',
              to: '/docs/nodejs/getting-started',
            },
            {
              label: 'Python',
              to: '/docs/python/getting-started',
            },
            {
              label: 'Java',
              to: '/docs/java/getting-started',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/cwire',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/cwire-io/',
            },
            {
              label: 'Website',
              href: 'https://cwire.io',
            },
            {
              label: 'Imprint',
              href: 'https://cwire.io/imprint.html'
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} CWire, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/cwire-io/docs/edit/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
