import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import mkpmnCalendar from '../views/MkpMnCalendar'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/calendar',
            name: 'mkpmnCalendar',
            component: mkpmnCalendar
        }
    ]
})

export default router
