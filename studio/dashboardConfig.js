export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f9b410307f3472ffd642d2a',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-dijyhk2m',
                  apiId: 'c735c2fa-2d82-40a2-bc45-abafe1bcddcf'
                },
                {
                  buildHookId: '5f9b410344768d30db4153e0',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-o7em9viv',
                  apiId: '51174ad6-b51b-454a-adc7-b9e0ddf5bf8b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/juliansharifi/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-o7em9viv.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
