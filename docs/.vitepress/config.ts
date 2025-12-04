import { defineConfig } from 'vitepress'
import llmstxt from 'vitepress-plugin-llms'

export default defineConfig({
  title: 'Foundatio.LuceneQuery',
  description: 'Dynamic Lucene-style query capabilities for .NET with Entity Framework and Elasticsearch support',
  base: '/',
  ignoreDeadLinks: true,
  markdown: {
    lineNumbers: false
  },
  vite: {
    plugins: [
      llmstxt({
        title: 'Foundatio.LuceneQuery Documentation',
        ignoreFiles: ['node_modules/**', '.vitepress/**']
      })
    ]
  },
  head: [
    ['link', { rel: 'icon', href: 'https://raw.githubusercontent.com/FoundatioFx/Foundatio/main/media/foundatio-icon.png', type: 'image/png' }],
    ['meta', { name: 'theme-color', content: '#3c8772' }]
  ],
  themeConfig: {
    logo: {
      light: 'https://raw.githubusercontent.com/FoundatioFx/Foundatio/master/media/foundatio.svg',
      dark: 'https://raw.githubusercontent.com/FoundatioFx/Foundatio/master/media/foundatio-dark-bg.svg'
    },
    siteTitle: 'LuceneQuery',
    nav: [
      { text: 'Guide', link: '/guide/what-is-foundatio-lucenequery' },
      { text: 'GitHub', link: 'https://github.com/FoundatioFx/Foundatio.LuceneQuery' }
    ],
    sidebar: {
      '/guide/': [
        {
          text: 'Introduction',
          items: [
            { text: 'What is Foundatio.LuceneQuery?', link: '/guide/what-is-foundatio-lucenequery' },
            { text: 'Getting Started', link: '/guide/getting-started' }
          ]
        },
        {
          text: 'Core Concepts',
          items: [
            { text: 'Query Syntax', link: '/guide/query-syntax' },
            { text: 'Visitors', link: '/guide/visitors' },
            { text: 'Field Mapping', link: '/guide/field-mapping' },
            { text: 'Validation', link: '/guide/validation' }
          ]
        },
        {
          text: 'Integrations',
          items: [
            { text: 'Entity Framework', link: '/guide/entity-framework' },
            { text: 'Elasticsearch', link: '/guide/elasticsearch' }
          ]
        },
        {
          text: 'Advanced Topics',
          items: [
            { text: 'Custom Visitors', link: '/guide/custom-visitors' },
            { text: 'Date Math', link: '/guide/date-math' },
            { text: 'Configuration', link: '/guide/configuration' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/FoundatioFx/Foundatio.LuceneQuery' },
      { icon: 'discord', link: 'https://discord.gg/6HxgFCx' }
    ],
    footer: {
      message: 'Released under the Apache 2.0 License.',
      copyright: 'Copyright © 2025 Foundatio'
    },
    editLink: {
      pattern: 'https://github.com/FoundatioFx/Foundatio.LuceneQuery/edit/main/docs/:path'
    },
    search: {
      provider: 'local'
    }
  }
})
