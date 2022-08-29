import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/views/layout/Layout'

/* Router Modules */
import componentsRouter from './modules/components'
// import chartsRouter from './modules/charts'
import tableRouter from './modules/table'
import nestedRouter from './modules/nested'

/**
 *  其他属性可以去看 https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 **/
/**
* hidden: true                   当它为true时，路由不会出现在侧边栏，如404页面(默认值是false)
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           当设置为noredirect时，路由在面包屑导航中不可被点击
* name:'router-name'             name属性一定要填写，填写什么自己随意
* meta : {
    roles: ['admin','editor']     设置该路由进入的权限，支持多个权限叠加
    title: 'title'                设置该路由在侧边栏和面包屑导航中所展现的名字
    icon: 'svg-name'              设置路由的图标
    noCache: false                设置是否不进行缓存(默认是false，也就是“进行缓存”)
    breadcrumb:true               如果设置为false，则该路由不会出现在面包屑导航中，默认值是true
  }
**/

// 这里是固定路由，不受权限的影响
export const constantRouterMap = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path*',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/auth-redirect',
    component: () => import('@/views/login/authredirect'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/errorPage/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/errorPage/401'),
    hidden: true
  },

  // 首页模块路由
  {
    path: '',   //这里的意思是如果你访问" "路径，它就会自动重定向到dashboard页面
    component: Layout,
    redirect: 'dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        name: 'Dashboard',
        meta: { title: '多伦多的小世界', icon: 'dashboard', noCache: true }
      }
    ]
  },
  // {
  //   path: '/hosp',
  //   component: Layout,
  //   redirect: '/hosp/index',
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/guide/index'),
  //       name: 'Guide',
  //       meta: { title: '多伦多的小世界3', icon: 'guide', noCache: true }
  //     }
  //   ]
  // },

   // {
  //   path: '/hosp',
  //   component: Layout,
  //   redirect: '/hosp/index',
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/guide/index'),
  //       name: 'Guide',
  //       meta: { title: '多伦多的小世界3', icon: 'guide', noCache: true }
  //     }
  //   ]
  // },
  // 医院表
  {
    path: '/hospset',
    component: Layout,
    redirect: '/hospset/list',
    children: [
      {
        path: 'list',
        name: '医院列表',
        component: () => import('@/views/hospset/list'),
        meta: { title: '医院列表', icon: 'table' }
      },
    ]
  },
  
  {
    path: '/entry',
    component: Layout,
    // redirect: '/entry/list',
    meta: { title: '填表预约', icon: 'edit' },
    children: [
      {
        path: 'tree1',
        name: '医院列表',
        component: () => import('@/views/form/EntryList01'),
        meta: { title: '广东省佛山市三水区乐平欣华医院核酸检测预约表', icon: 'table' }
      },
      {
        path: 'tree2',
        name: '做核酸',
        // component: () => import('@/views/doAcid/ChinaIndex'),
        component: () => import('@/views/form/EntryList02'),
        meta: { title: '广东省佛山市三水区健翔医院核酸检测预约表', icon: 'table' }
      }
    ]
  },

  {
    path: '/hospitalList',
    component: Layout,
    // redirect: '/hospitalList/list',
    name: '医院列表详情',
    meta: { title: '医院预约列表', icon: 'chart' },
    children: [
      {
        path: 'hospitalList01',
        name: '医院1',
        component: () => import('@/views/form/hospitalList01'),
        meta: { title: '广东省佛山市三水区乐平欣华医院', icon: 'list' }
      },
      {
        path: 'hospitalList02',
        name: '医院2',
        // component: () => import('@/views/doAcid/ChinaIndex'),
        component: () => import('@/views/form/hospitalList02'),
        meta: { title: '广东省佛山市三水区健翔医院', icon: 'list' }
      }
    ]
  },
]

export default new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

// 这里是异步路由，可以给每一个路由设置权限
export const asyncRouterMap = [
  {
    path: '/permission',
    component: Layout,
    redirect: '/permission/index',
    alwaysShow: true, // will always show the root menu
    meta: {
      title: '权限设置',
      icon: 'lock',
      roles: ['admin'] // you can set roles in root nav
    },
    children: [
      {
        path: 'page',
        component: () => import('@/views/permission/page'),
        name: 'PagePermission',
        meta: {
          title: '多伦多的小世界4',
          roles: ['admin']
        }
      },

    ]
  },

  // {
  //   path: '/icon',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/svg-icons/index'),
  //       name: 'Icons',
  //       meta: { title: '图标', icon: 'icon', noCache: true },
  //       roles: ['admin']
  //     }
  //   ]
  // },

  /** When your routing table is too long, you can split it into small modules**/
  // componentsRouter,
  // chartsRouter,
  nestedRouter,
  tableRouter,
  // {
  //   path: '/error',
  //   component: Layout,
  //   redirect: 'noredirect',
  //   name: 'ErrorPages',
  //   meta: {
  //     title: 'errorPages',
  //     icon: '404',
  //     roles: ['admin']
  //   },
  //   children: [
  //     {
  //       path: '401',
  //       component: () => import('@/views/errorPage/401'),
  //       name: 'Page401',
  //       meta: { title: 'page401', noCache: true }
  //     },
  //     {
  //       path: '404',
  //       component: () => import('@/views/errorPage/404'),
  //       name: 'Page404',
  //       meta: { title: 'page404', noCache: true }
  //     }
  //   ]
  // },


  {
    path: 'external-link',
    component: Layout,
    children: [
      {
        path: 'http://torontoworl.3vkj.net/',
        meta: { title: '音乐', icon: 'link' }
      }
    ]
  },

  { path: '*', redirect: '/404', hidden: true }
]
