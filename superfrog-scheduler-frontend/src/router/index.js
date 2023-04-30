import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../views/LandingPageView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: LandingPage
    },
    {
      path: '/add-student',
      name: 'add-student',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AddStudentView.vue')
    },
    {
      path: '/list-students',
      name: 'list-students',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ListAllStudentsView.vue')
    },

    {
      path:'/honorarium',
      name: 'honorarium',
      component: () => import('../views/PaymentForServices.vue')
    },
    {
      path: '/list-requests',
      name: 'list-requests',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ListAllRequestsView.vue')
    },
    {
      path: '/select-date-time',
      name: 'select-date-time',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/SelectDateTimeView.vue')
    },
    {
      path: '/complete-form',
      name: 'complete-form',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/CompleteFormView.vue')
    },
    {
      path: '/policy-agreement',
      name: 'policy-agreement',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/PolicyAgreementView.vue')
    },
    {
      path: '/review-submit',
      name: 'review-submit',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ReviewSubmitView.vue')
    },
    {
      path: '/receipt',
      name: 'receipt',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ReceiptView.vue')
    },
    {
      path: '/search-student',
      name: 'search-student',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/SearchStudentView.vue')
    },
    {
      path: '/sign-in',
      name: 'sign-in',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/SignInView.vue')
    }
  ]
})

export default router
