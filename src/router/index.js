import { route } from 'quasar/wrappers'
import { createRouter, createMemoryHistory, createWebHistory, createWebHashHistory } from 'vue-router'
import { LocalStorage } from 'quasar'
import routes from './routes'
// console.log(app)
/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default route(function (/* { store, ssrContext } */) {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : (process.env.VUE_ROUTER_MODE === 'history' ? createWebHistory : createWebHashHistory)

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,

    // Leave this as is and make changes in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    history: createHistory(process.env.MODE === 'ssr' ? void 0 : process.env.VUE_ROUTER_BASE)
  })

  Router.beforeEach((to, from, next) => {
    const user = LocalStorage.getItem('user')
    if (to.matched.some(record => record.meta.authAdmin)) {
      if (user === null || user === 'undefined') {
        next({
          name: 'loginGapari'
        })
        this.$showNotif('Anda belum login!', 'negative')
      } else {
        next()
      }
    } else {
      if (user === null || user === 'undefined') {
        next()
      } else {
        next({ name: 'dashboard' })
      }
    }
  })

  return Router
})
