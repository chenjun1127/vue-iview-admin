const menus = [
  {
    name: 'dashboard',
    title: '首页',
    icon: 'md-home',
    path: '/dashboard'
  },
  {
    name: 'control',
    title: '组件',
    icon: 'md-options',
    children: [
      {
        name: 'select',
        title: '下拉选择器',
        icon: '',
        path: '/control/select'
      }
    ]
  },
  {
    name: 'form',
    title: '表单',
    icon: 'md-paper',
    path: '/form'
  },
  {
    name: 'table',
    title: '表格',
    icon: 'md-list-box',
    children: [
      {
        name: 'basicTable',
        title: '基础表格',
        icon: '',
        path: '/table/basic-table'
      },
      {
        name: 'customize-table',
        title: '自定义表格',
        icon: '',
        path: '/table/customize-table'
      }
    ]
  },
  {
    name: 'permission',
    title: '权限',
    icon: 'md-lock',
    children: [
      {
        name: 'intercept',
        title: '路由拦截',
        icon: '',
        path: '/permission/intercept',
      },
      {
        name: 'toggle',
        title: '权限切换',
        icon: '',
        path: '/permission/toggle'
      }
    ]
  },
  {
    name: 'error',
    title: '错误页面',
    icon: 'md-thunderstorm',
    children: [
      {
        name: '403',
        title: '403',
        icon: '',
        path: '/error/403'
      },
      {
        name: '404',
        title: '404',
        icon: '',
        path: '/error/404'
      },
      {
        name: '500',
        title: '500',
        icon: '',
        path: '/error/500'
      }
    ]
  },
  {
    name: 'multi-level',
    title: '多级菜单',
    icon: 'md-menu',
    children: [
      {
        name: 'level-2-1',
        title: 'Level-2-1',
        icon: '',
        path: '/multi-level/level-2-1'
      },
      {
        name: 'level-2-2',
        title: 'Level-2-2',
        icon: '',
        children: [
          {
            name: 'level-2-2-1',
            title: 'Level-2-2-1',
            icon: '',
            path: '/multi-level/level-2-2/level-2-2-1'
          }
        ]
      }
    ]
  }
];
export default menus;
