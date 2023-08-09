export const routers = [
  {
    path: '/',
    name: 'Dashboard',
    component: () => import('@/views/dashboard/index.vue'),
    children:[
      {
        path: '',
        name:'Rahbariyat page',
        component: ()=>import('@/views/aboutView/management.vue')
      },
      {
        path: 'division',
        name:"Bo'linma page",
        component: ()=>import('@/views/aboutView/division.vue')
      },
      {
        path: 'department',
        name:'Kafedra page',
        component: ()=>import('@/views/aboutView/department.vue')
      },
      {
        path: 'dep-employee',
        name:"Bo'limllar page",
        component: ()=>import('@/views/aboutView/dep-employee.vue')
      },
      {
        path: 'trade-union',
        name:"kasaba uyushmasi page",
        component: ()=>import('@/views/aboutView/trade-union.vue')
      }
    ]
  }
]
