let routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/login')
  },
  {
    path: '/',
    name: 'layout',
    component: () => import('@/views/layout/index'),
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        component: () => import('@/views/dashboard/home'),
        meta: { title: 'Dashboard', }
      },
      {
        path: 'control/select',
        name: 'basicSelect',
        component: () => import('@/views/control/basicSelect'),
        meta: { title: 'basicSelect' }
      },
      {
        path: 'form',
        name: 'form',
        component: () => import('@/views/form/basicForm'),
        meta: { title: 'form' }
      },
      {
        path: 'table/basic-table',
        name: 'basicTable',
        component: () => import('@/views/table/basicTable'),
        meta: { title: 'basicTable' }
      },
      {
        path: 'table/customize-table',
        name: 'customizeTable',
        component: () => import('@/views/table/customizeTable'),
        meta: { title: 'customizeTable' }
      },
      {
        path: '/multi-level/level-2-1',
        name: 'level-2-1',
        component: () => import('@/views/multiLevel/Level_2_1'),
        meta: { title: 'level-2-1' }
      },
      {
        path: '/multi-level/level-2-2/level-2-2-1',
        name: 'Level_2_2_1',
        component: () => import('@/views/multiLevel/Level_2_2_1'),
        meta: { title: 'Level_2_2_1' }
      }
    ]
  },
  {
    path: '/error/404',
    component: () => import('@/views/error/404'),
    meta: { title: '404' }
  },
  {
    path: '*',
    redirect: '/error/404'
  }
];

export default routes;
