import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/HomeView.vue'),
    // component: HomeView
  },
  {
    path: '/how-it-works',
    name: 'how-it-works',
    component: () => import(/* webpackChunkName: "how-it-works" */ '../views/HowItWorks.vue'),
  },
  {
    path: '/become-a-partner',
    name: 'become-a-partner',
    component: () => import(/* webpackChunkName: "partner" */ '../views/BecomeAPartner.vue'),
  },
  {
    path: '/about-us',
    name: 'about-us',
    component: () => import(/* webpackChunkName: "about-us" */ '../views/AboutUs.vue'),
  },
  {
    path: '/sign-up',
    name: 'sign-up',
    component: () => import(/* webpackChunkName: "about-us" */ '../views/SignUp.vue'),
  },
  {
    path: '/log-in',
    name: 'log-in',
    component: () => import(/* webpackChunkName: "about-us" */ '../views/LogIn.vue'),
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
