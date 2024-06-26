import Vue from 'vue'
import VueRouter from 'vue-router'
import newHome from "@/views/new/newHome.vue"
import aboutUs from "@/views/new/aboutUs.vue"
import theHome from "@/views/new/theHome.vue"
import questionList from "@/views/new/questionList.vue"
import favorites from "@/views/new/favorites.vue"
import examPage from "@/views/examPage.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'newHome',
    component: newHome,
    children: [
      {
        path: '',
        component: theHome,
      },
      {
        path: 'aboutUs',
        name: 'aboutUs',
        component: aboutUs
      },
      {
        path: ':type/:lesson',
        name: 'questionList',
        component: questionList
      },
      {
          path: 'favorites',
          name: 'favorites',
          component: favorites
      },
      {
    path: 'examPage/:lesson/:id',
    name: 'examPage',
    component: examPage
  },
    ]
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
