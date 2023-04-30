// import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../views/LandingPageView.vue'
// import Login from '../views/LoginView.vue'

let routes = [
    {
        path: '/',
        // name: 'landing-page',
        meta: {
            requiresAuth: false,
        },
        // component: LandingPage,
        component: () => import('../Layout.vue'),
        children: [
            {
                path: '/landing-page',
                name: 'landing-page',
                meta:{
                    requiresAuth: false,
                },
                component: LandingPage,
            },
            {
                path: 'add-student',
                name: 'add-student',
                meta: {
                    requiresAuth: false,
                },
                component: () => import('../views/AddStudentView.vue')
            },
            {
                path: 'list-students',
                name: 'list-students',
                meta: {
                    requiresAuth: false,
                },
                component: () => import('../views/ListAllStudentsView.vue')
            },
            {
                path: 'list-requests',
                name: 'list-requests',
                meta: {
                    requiresAuth: false,
                },
                component: () => import('../views/ListAllRequestsView.vue')
            },
            {
                path: 'select-date-time',
                name: 'select-date-time',
                meta: {
                    requiresAuth: false,
                },
                component: () => import('../views/SelectDateTimeView.vue')
            },
            {
                path: 'complete-form',
                name: 'complete-form',
                meta: {
                    requiresAuth: false,
                },
                component: () => import('../views/CompleteFormView.vue')
            },
            {
                path: 'policy-agreement',
                name: 'policy-agreement',
                meta: {
                    requiresAuth: false,
                },
                component: () => import('../views/PolicyAgreementView.vue')
            },
            {
                path: 'review-submit',
                name: 'review-submit',
                meta: {
                    requiresAuth: false,
                },
                component: () => import('../views/ReviewSubmitView.vue')
            },
            {
                path: 'receipt',
                name: 'receipt',
                meta: {
                    requiresAuth: false,
                },
                component: () => import('../views/ReceiptView.vue')
            },
            {
                path: 'login',
                name: 'login',
                meta: {
                    requiresAuth: false,
                },
                component: () => import('../views/LoginView.vue')
            }
        ]
    },
];


export default routes;
