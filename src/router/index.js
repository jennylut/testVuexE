import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import Login from '../components/Login'
import TestStore from '../components/TestStore'

Vue.use(Router)
export default new Router({
    routes: [
        {
            path:'/hello',
            name:'hello',
            component:HelloWorld
        },
        {
            path:'/login',
            name:'login',
            component:Login
        },
        {
            path:'/test',
            name:'test',
            component:TestStore
        }
    ]
})
