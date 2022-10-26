import { createRouter, createWebHistory } from "vue-router";
import ChatRoom from './views/ChatRoom.vue'
import Login from './views/Login.vue'
import SignUp from './views/SignUp.vue'

const webHistory = createWebHistory()

const router = createRouter({
  history: webHistory,
  routes: [
    {
      path: '/',
      component: ChatRoom,
    }, 
    {
      path: '/login',
      component: Login,
    }, 
    {
      path: '/signup',
      component: SignUp,
    }, 
  ] 
})

export default router