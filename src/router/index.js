import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
import Login from '@/components/Login.vue'
import Signup from '@/components/Signup.vue'
import Profile from '@/components/Profile.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/login', component: Login },
    { path: '/signup', component: Signup },
    { path: '/profile', component: Profile },
    { path: '/', component: HelloWorld }
  ]
})
