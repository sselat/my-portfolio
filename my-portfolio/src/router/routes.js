const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {path: '', component: () => import('pages/IndexPage.vue')},
      {
        path: '/me',
        component: () => import('pages/About/AboutPage.vue')
      },
      {
        path: '/socialmedia',
        component: () => import('pages/SocialMedia/SocialPage.vue')
      },
      {
        path: '/projects',
        component: () => import('pages/Projects/ProjectsPage.vue')
      },
      {
        path: '/contact',
        component: () => import('pages/Contact/ContactPage.vue')
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
