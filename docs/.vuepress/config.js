module.exports = {
  title: 'API Demo Docs',
  description: 'Example of APIs and related documentation',
  base: "/api-demo-docs/",
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }]
  ],
  themeConfig: {
    lastUpdated: 'Last Updated',
    repo: 'ocular-d/api-demo-docs',
    docsDir: 'docs',
    editLinks: false,
    editLinkText: 'Help us improve this page!',
    sidebar: [{
      title: 'Overview',
      collapsable: false,
      children: [
        'spectral',
        'lefthook',
      ]
    }
  ]
  }
}
