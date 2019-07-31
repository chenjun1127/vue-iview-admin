import Layout from '@/views/layout/index';

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/login')
  },
  {
    path: '/',
    name: 'layout',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        component: () => import('@/views/dashboard/home'),
        meta: { title: 'Dashboard' }
      }
    ]
  },
  {
    path: '/control',
    component: Layout,
    redirect: '/control/select',
    name: 'control',
    meta: { title: 'control' },
    children: [
      {
        path: 'select',
        name: 'select',
        component: () => import('@/views/control/basicSelect'),
        meta: { title: 'select' }
      }
    ]
  },
  {
    path: '/form',
    component: Layout,
    children: [
      {
        path: '',
        name: 'form',
        component: () => import('@/views/form/basicForm'),
        meta: { title: 'Form' }
      }
    ]
  },
  {
    path: '/table',
    component: Layout,
    redirect: '/table/basic-table',
    name: 'table',
    meta: { title: 'table' },
    children: [
      {
        path: 'basic-table',
        name: 'basicTable',
        component: () => import('@/views/table/basicTable'),
        meta: { title: 'basicTable' }
      },
      {
        path: 'customize-table',
        name: 'customizeTable',
        component: () => import('@/views/table/customizeTable'),
        meta: { title: 'customizeTable' }
      }
    ]
  },
  {
    path: '/permission',
    component: Layout,
    redirect: '/permission/intercept',
    name: 'permission',
    meta: { title: 'permission' },
    children: [
      {
        path: 'intercept',
        name: 'intercept',
        component: () => import('@/views/permission/intercept'),
        meta: { title: 'intercept', permission: 1 }
      },
      {
        path: 'toggle',
        name: 'toggle',
        component: () => import('@/views/permission/toggle'),
        meta: { title: 'toggle' }
      }
    ]
  },
  {
    path: '/multi-level',
    component: Layout,
    redirect: '/multi-level/level-2-1',
    name: 'multi-level',
    meta: { title: 'multi-level' },
    children: [
      {
        path: 'level-2-1',
        name: 'level-2-1',
        component: () => import('@/views/multiLevel/level_2_1'),
        meta: { title: 'level-2-1' }
      },
      {
        path: 'level-2-2/level-2-2-1',
        name: 'level-2-2-1',
        component: () => import('@/views/multiLevel/level_2_2_1'),
        meta: { title: 'level-2-2-1',permission: 1 }
      }
    ]
  },
  {
    path: '/message',
    component: Layout,
    children: [
      {
        path: '',
        name: 'message',
        component: () => import('@/views/message/message'),
        meta: { title: 'message' }
      }
    ]
  },
  {
    path: '/error',
    component: Layout,
    redirect: '/error/403',
    name: 'error',
    meta: { title: 'error' },
    children: [
      {
        path: '403',
        name: '403',
        component: () => import('@/views/error/403'),
        meta: { title: '403' }
      },
      {
        path: '500',
        name: '500',
        component: () => import('@/views/error/500'),
        meta: { title: '500' }
      }
    ]
  },
  {
    path: '/error/404',
    component: () => import('@/views/error/404'),
    meta: { title: '404' }
  },
  { path: '*', redirect: '/error/404' }
];

export default routes;
