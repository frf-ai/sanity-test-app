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
                  buildHookId: '5f590b6787366954b4b3b84e',
                  title: 'Sanity Studio',
                  name: 'sanity-test-app-studio-w9khf62o',
                  apiId: '89a26c9b-b33d-4cad-9393-fe0f0d0c4f00'
                },
                {
                  buildHookId: '5f590b675cc41465d0c07ce2',
                  title: 'Blog Website',
                  name: 'sanity-test-app-web',
                  apiId: 'a9e0cc5e-abdb-4110-afff-3f23ecb335b8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/frf-ai/sanity-test-app',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-test-app-web.netlify.app', category: 'apps'}
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
