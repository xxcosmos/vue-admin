import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * 不需要权限
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '主页', icon: 'dashboard' }
    }]
  },

  {
    path: '/production',
    component: Layout,
    redirect: '/production/table',
    name: 'Production',
    meta: { title: '生产管理', icon: 'example' },
    children: [
      {
        path: 'table',
        name: 'Table',
        component: () => import('@/views/table/index'),
        meta: { title: '电机备修', icon: 'table' }
      },
      {
        path: 'tree',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: '变压器备修', icon: 'tree' }
      },
      {
        path: 'tree',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: '电机检修', icon: 'tree' }
      },
      {
        path: 'tree',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: '变压器检修', icon: 'tree' }
      },
      {
        path: 'tree',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: '生产台账', icon: 'tree' }
      }
    ]
  },

  {
    path: '/form',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Form',
        component: () => import('@/views/form/index'),
        meta: { title: '质量管理', icon: 'form' }
      }
    ]
  },

  {
    path: '/nested',
    component: Layout,
    redirect: '/nested/menu1',
    name: 'Nested',
    meta: {
      title: '技术标准与方案',
      icon: 'nested'
    },
    children: [
      {
        path: 'menu1',
        component: () => import('@/views/nested/menu1/index'), // Parent router-view
        name: 'Menu1',
        meta: { title: 'Menu1' },
        children: [
          {
            path: 'menu1-1',
            component: () => import('@/views/nested/menu1/menu1-1'),
            name: 'Menu1-1',
            meta: { title: 'Menu1-1' }
          },
          {
            path: 'menu1-2',
            component: () => import('@/views/nested/menu1/menu1-2'),
            name: 'Menu1-2',
            meta: { title: 'Menu1-2' },
            children: [
              {
                path: 'menu1-2-1',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
                name: 'Menu1-2-1',
                meta: { title: 'Menu1-2-1' }
              },
              {
                path: 'menu1-2-2',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
                name: 'Menu1-2-2',
                meta: { title: 'Menu1-2-2' }
              }
            ]
          },
          {
            path: 'menu1-3',
            component: () => import('@/views/nested/menu1/menu1-3'),
            name: 'Menu1-3',
            meta: { title: 'Menu1-3' }
          }
        ]
      },
      {
        path: 'menu2',
        component: () => import('@/views/nested/menu2/index'),
        meta: { title: 'menu2' }
      }
    ]
  },

  {
    path: 'external-link',
    component: Layout,
    children: [
      {
        path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
        meta: { title: '综合查询', icon: 'link' }
      }
    ]
  },

  {
    path: '/table/process',
    name: 'Process',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Process',
        component: () => import('@/views/table/process/index'),
        meta: { title: '总流程', icon: 'table' }
      }
    ]
  },

  {
    path: '/table/process/detail/breakDown',
    name: 'BreakDown',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'BreakDown',
        component: () => import('@/views/table/process/detail/breakDown/index'),
        meta: { title: '分解', icon: 'table' }
      }
    ]
  },

  {
    path: '/table/process/detail/register',
    name: 'Register',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Register',
        component: () => import('@/views/table/process/detail/register/index'),
        meta: { title: '回厂登记', icon: 'table' }
      }
    ]
  },

  {
    path: '/table/process/detail/dianqi',
    name: 'Dianqi',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Dianqi',
        component: () => import('@/views/table/process/detail/dianqi/index'),
        meta: { title: '电气检查和处理', icon: 'table' }
      }
    ]
  },

  {
    path: '/table/process/detail/jixie/gundong',
    name: 'JixieG',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'JixieG',
        component: () => import('@/views/table/process/detail/jixie/gundong/index'),
        meta: { title: '机械检查和处理（滚动轴承）', icon: 'table' }
      }
    ]
  },

  {
    path: '/table/process/detail/jixie/huadong',
    name: 'JixieH',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'JixieH',
        component: () => import('@/views/table/process/detail/jixie/huadong/index'),
        meta: { title: '机械检查和处理（滑动轴承）', icon: 'table' }
      }
    ]
  },

  {
    path: '/table/process/detail/buildUp',
    name: 'BuildUp',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'BuildUp',
        component: () => import('@/views/table/process/detail/buildUp/index'),
        meta: { title: '组装', icon: 'table' }
      }
    ]
  },

  {
    path: '/table/process/detail/test/zhiliu',
    name: 'TestZ',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'TestZ',
        component: () => import('@/views/table/process/detail/test/zhiliu/index'),
        meta: { title: '试验（直流）', icon: 'table' }
      }
    ]
  },

  {
    path: '/table/process/detail/save',
    name: 'Save',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Save',
        component: () => import('@/views/table/process/detail/save/index'),
        meta: { title: '存档', icon: 'table' }
      }
    ]
  },
  {
    path: '/table/process/detail/finish',
    name: 'Finish',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Finish',
        component: () => import('@/views/table/process/detail/finish/index'),
        meta: { title: '出厂确认', icon: 'table' }
      }
    ]
  },
  // 404 页面必须放在最后
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
