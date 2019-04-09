import Vue from 'vue'
import Router from 'vue-router'
import ClassMain from '../components/classMain'
import Login from '../components/login'
import TestStore from '../components/testStore'

Vue.use(Router)
export default new Router({
    routes: [
        {
            path:'/class',
            name:'class',
            component:ClassMain
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
