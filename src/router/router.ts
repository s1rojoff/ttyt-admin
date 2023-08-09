export const routers = [
  {
    path: '/',
    name: 'Dashboard',
    component: () => import('@/views/dashboard/index.vue'),
    children: [
      // pages of About us
      {
        path: '',
        name: 'Rahbariyat page',
        meta: {
          parentName: 'Biz haqimizda'
        },
        component: () => import('@/views/aboutView/management.vue')
      },
      {
        path: 'division',
        name: "Bo'linma page",
        meta: {
          parentName: 'Biz haqimizda'
        },
        component: () => import('@/views/aboutView/division.vue')
      },
      {
        path: 'department',
        name: 'Kafedra page',
        meta: {
          parentName: 'Biz haqimizda'
        },
        component: () => import('@/views/aboutView/department.vue')
      },
      {
        path: 'dep-employee',
        name: "Bo'limllar page",
        meta: {
          parentName: 'Biz haqimizda'
        },
        component: () => import('@/views/aboutView/dep-employee.vue')
      },
      {
        path: 'trade-union',
        name: 'kasaba uyushmasi page',
        meta: {
          parentName: 'Biz haqimizda'
        },
        component: () => import('@/views/aboutView/trade-union.vue')
      },
      // pages of international section
      {
        path: 'international',
        name: 'about international section',
        meta: {
          parentName: 'international section'
        },
        component: () => import('@/views/internationalView/about-department.vue')
      },
      {
        path: 'current-project',
        name: 'current project',
        meta: {
          parentName: 'international section'
        },
        component: () => import('@/views/internationalView/about-department.vue')
      },
      {
        path: 'investment',
        name: 'Investment',
        meta: {
          parentName: 'international section'
        },
        component: () => import('@/views/internationalView/investment.vue')
      },
      // pages of youth-policy
      {
        path: 'activities',
        name: 'Activities',
        meta: {
          parentName: 'youth policy'
        },
        component: () => import('@/views/youthPolicyView/activities.vue')
      },
      {
        path: 'training',
        name: 'Training',
        meta: {
          parentName: 'youth policy'
        },
        component: () => import('@/views/youthPolicyView/training.vue')
      },
      {
        path: 'scholarship',
        name: 'Scholarship',
        meta: {
          parentName: 'youth policy'
        },
        component: () => import('@/views/youthPolicyView/scholarship.vue')
      },
      {
        path: 'student-campus',
        name: 'Student campus',
        meta: {
          parentName: 'youth policy'
        },
        component: () => import('@/views/youthPolicyView/student-campus.vue')
      },
      {
        path: 'galery',
        name: 'Galery',
        meta: {
          parentName: 'youth policy'
        },
        component: () => import('@/views/youthPolicyView/galery.vue')
      },
      //PAGES OF ANNOUNCEMENT PAGE
      {
        path: 'news',
        name: 'News',
        meta: {
          parentName: 'Announcement'
        },
        component: () => import('@/views/announcementView/news.vue')
      },
      {
        path: 'upcoming-event',
        name: 'Upcoming event',
        meta: {
          parentName: 'Announcement'
        },
        component: () => import('@/views/announcementView/upcoming-event.vue')
      }
    ]
  }
]
