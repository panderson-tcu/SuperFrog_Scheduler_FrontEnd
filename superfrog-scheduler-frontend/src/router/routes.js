// import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from "../views/LandingPageView.vue";
// import Login from '../views/LoginView.vue'

let routes = [

  {
    path: "/",
    // name: 'landing-page',
    meta: {
      requiresAuth: false,
    },
    // component: LandingPage,
    component: () => import("../Layout.vue"),
    children: [
      {
        path: "/landing-page",
        name: "landing-page",
        meta: {
          requiresAuth: false,
        },
        component: LandingPage,
      },
      {
        path: "list-students",
        name: "list-students",
        meta: {
          requiresAuth: false,
        },
        component: () => import("../views/ListAllStudentsView.vue"),
      },
      {
        path: "list-requests",
        name: "list-requests",
        meta: {
          requiresAuth: false,
        },
        component: () => import("../views/ListAllRequestsView.vue"),
      },
      {
        path: "select-date-time",
        name: "select-date-time",
        meta: {
          requiresAuth: false,
        },
        component: () => import("../views/SelectDateTimeView.vue"),
      },
      {
        path: "complete-form",
        name: "complete-form",
        meta: {
          requiresAuth: false,
        },
        component: () => import("../views/CompleteFormView.vue"),
      },
      {
        path: "policy-agreement",
        name: "policy-agreement",
        meta: {
          requiresAuth: false,
        },
        component: () => import("../views/PolicyAgreementView.vue"),
      },
      {
        path: "review-submit",
        name: "review-submit",
        meta: {
          requiresAuth: false,
        },
        component: () => import("../views/ReviewSubmitView.vue"),
      },
      {
        path: "receipt",
        name: "receipt",
        meta: {
          requiresAuth: false,
        },
        component: () => import("../views/ReceiptView.vue"),
      },
      {
        path: "login",
        name: "login",
        meta: {
          requiresAuth: false,
        },
        component: () => import("../views/LoginView.vue"),
      },
      {
        path: "/edit-student-profile",
        name: "edit-student-profile",
        meta: {
          requiresAuth: false,
        },
        component: () => import("../views/EditsStudentProfile.vue"),
      },
      {
        path: "/sign-up",
        name: "sign-up",
        meta: {
          requiresAuth: false,
        },
        component: () => import("../views/SignUpSFSForAppearance.vue"),
      },
      {
        path: "/list-all-appearances",
        name: "list-all-appearances",
        meta: {
          requiresAuth: false,
        },
        component: () => import("../views/ListApproved.vue"),
      },
      {
        path: "/student-profile",
        name: "student-profile",
        meta: {
          requiresAuth: false,
        },
        component: () => import("../views/ViewProfileInfo.vue"),
      },
      {
        path: "/edit-request-details",
        name: "edit-request-details",
        meta: {
          requiresAuth: false,
        },
        component: () => import("../views/EditRequestDetails.vue"),
      },
      {
        path: "/sign-in",
        name: "sign-in",
        meta: {
          requiresAuth: false,
        },
        component: () => import("../views/SignInView.vue"),
      },
      {
        path: "/price-table",
        name: "price-table",
        meta: {
          requiresAuth: false,
        },
        component: () => import("../views/PriceTableView.vue"),
      },
      {
        path: "/range",
        name: "range",
        meta: {
          requiresAuth: false,
        },
        component: () => import("../views/RangeView.vue"),
      },

    //UC 11 : Spirit Director cancels student sing-up of an appearance request
    {
        path: '/cancel-signup',
        name: '/cancel-signup',
        meta: {
        requiresAuth: false,
        },
        component: () => import('../views/CancelSignUpView.vue')
    },

    //UC 12 : Spirit Director cancels request
    {
        path: '/cancel-request',
        name: '/cancel-request',
        meta: {
        requiresAuth: false,
        },
        component: () => import('../views/CancelRequestView.vue')
    },

    //UC 13 : Spirit Director creates student account
    {
        path: '/add-student',
        name: '/add-student',
        meta: {
        requiresAuth: false,
        },
        component: () => import('../views/AddStudentView.vue')
    },

    //UC 14 : Spirit Director deactivates a student account
    {
        path: '/deactivate',
        name: '/deactivate',
        meta: {
        requiresAuth: false,
        },
        component: () => import('../views/DeactivateStudentView.vue')
    },

      //UC 16: Spirit Director views SuperFrog Student Account
      {
        path: "/view-superfrog-student-account",
        name: "/view-superfrog-student-account",
        meta: {
          requiresAuth: false,
        },
        component: () => import("../views/ListAllStudentsView.vue"),
      },

      //UC 18: Spirit Director generates TCU Honorarium
      {
        path: "/payment-form",
        name: "/payment-form",
        meta: {
          requiresAuth: false,
        },
        component: () => import("../views/PaymentForServices.vue"),
      },

      //UC 19: Spirit Director generates performance reports
      {
        path: "/performance-reports",
        name: "/performance-reports",
        meta: {
          requiresAuth: false,
        },
        component: () => import("../views/PerformanceReportView.vue"),
      },

    ],
  },

  //routing for spirit director
  {
    path: "/director",
    name: "director",
    component: () => import("../views/SearchStudentView.vue"), // Membership will be rendered in App's <vue-router />
    children: [
    
      //UC 15: Spirit Director finds SuperFrog Students
      {
        path: "/find-superfrog-students",
        name: "/find-superfrog-students",
        meta: {
          requiresAuth: false,
        },
        component: () => import("../views/SearchStudentView.vue"),
      },
    ],
  },

  //routing for superfrog students

  {
    path: "/superfrogstudent",
    name: "superfrogstudent",
    component: () => import("../Layout/DirectorPage.vue"), // FrontOffice will be rendered in App's <vue-router />
    children: [
      // children will be rendered in Front component's <vue-router />
      {
        path: "viewmyrequest",
        name: "viewmyrequest",
        component: () => import("../views/ViewProfileInfo.vue"),
      },
    ],
  },
];

export default routes;
